/* eslint-disable @typescript-eslint/ban-types */
import * as React from "react"
import { Platform, StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStackNavigator from "./HomeStackNavigator"
import SavingsStackNavigator from "./SavingsStackNavigator"
import SettingsStackNavigator from "./SettingsStackNavigator"
import HomeTabBarIcon from "../components/tabBar/HomeTabBarIcon"
import SavingsTabBarIcon from "../components/tabBar/SavingsTabBarIcon"
import SettingsTabBarIcon from "../components/tabBar/SettingsTabBarIcon"
import HomeTabBarLabel from "../components/tabBar/HomeTabBarLabel"
import SavingsTabBarLabel from "../components/tabBar/SavingsTabBarLabel"
import SettingsTabBarLabel from "../components/tabBar/SettingsTabBarLabel"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import GoalsContext from "../contexts/GoalsContext"
import MoneyboxesContext from "../contexts/MoneyboxesContext"
import TransactionsContext from "../contexts/TransactionsContext"
import { Fund, GetUserQuery, Goal, ListFundsQuery, ListGoalsQuery, ListTransactionsQuery, 
	OnCreateFundSubscription, OnCreateGoalSubscription, OnCreateTransactionSubscription, 
	OnCreateUserSubscription, 
	OnDeleteFundSubscription, OnDeleteGoalSubscription, OnUpdateFundSubscription, 
	OnUpdateGoalSubscription, OnUpdateUserSubscription, Transaction, User } from "../API"
import GoalFundContext from "../contexts/GoalFundContext"
import { API, graphqlOperation } from "aws-amplify"
import { getUser, listFunds, listGoals, listTransactions } from "../graphql/queries"
import { GraphQLResult } from "@aws-amplify/api-graphql"
import { onCreateFund, onCreateGoal, onCreateTransaction, onCreateUser, onDeleteFund, 
	onDeleteGoal, onUpdateFund, onUpdateGoal, onUpdateUser } from "../graphql/subscriptions"
import { Observable } from "zen-observable-ts"
import AuthContext from "../auth/AuthContext"
import Loading from "../components/Loading"
import CreateProfileForm from "../screens/settings/CreateProfileForm"
import UserContext from "../contexts/UserContext"
import * as Notifications from "expo-notifications"
import getSavingDate from "../../functions/getSavingDate"
import { daysOfTheWeek, frequencies } from "../../../types"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { t } from "i18n-js"
import { CalendarNotificationTrigger, CalendarTriggerInput, YearlyNotificationTrigger, YearlyTriggerInput } from "expo-notifications"

export interface WeeklyNotificationTrigger {
    type: "weekly";
    weekday: number;
    hour: number;
    minute: number;
}

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = (): React.ReactElement => {

	const auth = React.useContext(AuthContext)

	const [goals, setGoals] = React.useState<Goal[]>([])
	const [moneyboxes, setMoneyboxes] = React.useState<Fund[]>([])
	const [transactions, setTransactions] = React.useState<Transaction[]>([])
	const [goalFund, setGoalFund] = React.useState<Fund | null>(null)
	const [loading, setLoading] = React.useState(true)
	const [user, setUser] = React.useState<User | null>(null)

	React.useEffect(() => {
		const loadGoals = async () => {
			try {
				const goalList = await API.graphql(graphqlOperation(listGoals)) as GraphQLResult<ListGoalsQuery>
				if (goalList.data?.listGoals?.items) {
					const list = goalList.data.listGoals.items.filter(v => {
						if (v?.id) {
							return v
						}
					}) as Goal[]
					setGoals(list)
				}
			} catch (e) {
				console.error(e)
			}
		}
		const loadFunds = async () => {
			try {
				const fundList = await API.graphql(graphqlOperation(listFunds)) as GraphQLResult<ListFundsQuery>
				const separated = fundList.data?.listFunds?.items?.reduce(
					(prev: {moneyboxFunds: Fund[], goalfund: Fund | null}, curr: Fund | null): {moneyboxFunds: Fund[], goalfund: Fund | null} => {
						if (curr?.name === "goals") {
							return {moneyboxFunds: prev.moneyboxFunds, goalfund: curr}
						} else if (curr?.id) {
							return {...prev, moneyboxFunds: [...prev.moneyboxFunds, curr]}
						} else return prev
					}, {moneyboxFunds: [], goalfund: null})
				setMoneyboxes(separated?.moneyboxFunds || [])
				setGoalFund(separated?.goalfund || null)
			} catch (e) {
				console.error(e)
			}
		}
		const loadTransactions = async () => {
			try {
				const transList = await API.graphql(graphqlOperation(listTransactions)) as GraphQLResult<ListTransactionsQuery>
				if (transList.data?.listTransactions?.items) {
					const list = transList.data.listTransactions.items.filter(v => {
						if (v?.id) {
							return v
						}
					}) as Transaction[]
					setTransactions(list)
				}
			} catch (e) {
				console.error(e)
			}
		}

		const loadUser = async () => {
			const u = await API.graphql(graphqlOperation(
				getUser,
				{
					id: auth.username
				}
			)) as GraphQLResult<GetUserQuery>
			if (u.data?.getUser?.id) {
				setUser(u.data.getUser)
			}
		}

		const load = async () => {
			await loadGoals()
			await loadFunds()
			await loadTransactions()
			await loadUser()
		}

		load().then(() => setLoading(false))

		const onGoalCreation = (API.graphql(graphqlOperation(onCreateGoal, {
			owner: auth.username
		})) as Observable<object>).subscribe({
			next: ({value}: {value: GraphQLResult<OnCreateGoalSubscription>}) => {
				if (value.data?.onCreateGoal?.id) {
					const ng = value.data.onCreateGoal as Goal
					setGoals(g => ([...g, ng]))
				}
			},
			error: e => console.error(e)
		})

		const onGoalDeletion = (API.graphql(graphqlOperation(onDeleteGoal, {
			owner: auth.username
		}))as Observable<object>).subscribe({
			next: ({value}: {value: GraphQLResult<OnDeleteGoalSubscription>}) => {
				if (value.data?.onDeleteGoal?.id) {
					const dg = value.data.onDeleteGoal as Goal
					setGoals(g => g.filter(goal => {
						if (goal.id !== dg.id) return goal
					}))
				}
			},
			error: e => console.error(e)
		})

		const onGoalUpdate = (API.graphql(graphqlOperation(onUpdateGoal, {
			owner: auth.username
		})) as Observable<object>).subscribe({
			next: ({value}: {value: GraphQLResult<OnUpdateGoalSubscription>}) => {
				if (value.data?.onUpdateGoal){
					const ug = value.data.onUpdateGoal as Goal
					setGoals(goals => goals.map(g => {
						if (g.id === ug.id) return ug
						return g
					}))
				}
			},
			error: e => console.error(e)
		})

		const onUserCreation = (API.graphql(graphqlOperation(onCreateUser, {
			id: auth.username
		})) as Observable<object>).subscribe({
			next: ({value}: {value: GraphQLResult<OnCreateUserSubscription>}) => {
				if (value.data?.onCreateUser?.id) {
					const ng = value.data.onCreateUser as User
					setUser(ng)
				}
			},
			error: e => console.error(e)
		})

		const onUserUpdate = (API.graphql(graphqlOperation(onUpdateUser, {
			id: auth.username
		})) as Observable<object>).subscribe({
			next: ({value}: {value: GraphQLResult<OnUpdateUserSubscription>}) => {
				if (value.data?.onUpdateUser){
					const ug = value.data.onUpdateUser as User
					setUser(ug)
				}
			},
			error: e => console.error(e)
		})

		const onFundCreation = (API.graphql(graphqlOperation(onCreateFund, {
			owner: auth.username
		})) as Observable<object>).subscribe({
			next: ({value}:{value: GraphQLResult<OnCreateFundSubscription>}) => {
				if (value.data?.onCreateFund?.id) {
					if (value.data.onCreateFund.name === "goals") {
						setGoalFund(value.data.onCreateFund as Fund)
					} else {
						const nf = value.data.onCreateFund as Fund
						setMoneyboxes(g => ([...g, nf]))
					}
				}
			},
			error: e => console.error(e)
		})

		const onFundDeletion = (API.graphql(graphqlOperation(onDeleteFund, {
			owner: auth.username
		}))as Observable<object>).subscribe({
			next: ({value}: {value: GraphQLResult<OnDeleteFundSubscription>}) => {
				if (value.data?.onDeleteFund?.id) {
					const df = value.data.onDeleteFund as Fund
					setMoneyboxes(f => f.filter(m => {
						if (m.id !== df.id) return m
					}))
				}
			},
			error: e => console.error(e)
		})
   
		const onFundUpdate = (API.graphql(graphqlOperation(onUpdateFund, {
			owner: auth.username
		})) as Observable<object>).subscribe({
			next: ({value}: {value: GraphQLResult<OnUpdateFundSubscription>}) => {
				if (value.data?.onUpdateFund){
					const uf = value.data.onUpdateFund as Fund
					if (uf.name === "goals") {
						setGoalFund(uf)
					} else {
						setMoneyboxes(goals => goals.map(m => {
							if (m.id === uf.id) return uf
							return m
						}))
					}
				}
			},
			error: e => console.error(e)
		})

		const onTransactionCreation = (API.graphql(graphqlOperation(onCreateTransaction, {
			owner: auth.username
		})) as Observable<object>).subscribe({
			next: ({value}: {value: GraphQLResult<OnCreateTransactionSubscription>}) => {
				if (value.data?.onCreateTransaction?.id) {
					const nt = value.data.onCreateTransaction as Transaction
					setTransactions(t => ([...t, nt]))
				}
			},
			error: e => console.error(e)
		})

		return () => {
			onGoalCreation.unsubscribe()
			onGoalDeletion.unsubscribe()
			onGoalUpdate.unsubscribe()
			onUserCreation.unsubscribe()
			onUserUpdate.unsubscribe()
			onFundCreation.unsubscribe()
			onFundDeletion.unsubscribe()
			onFundUpdate.unsubscribe()
			onTransactionCreation.unsubscribe()
		}
	}, [])

	React.useEffect(() => {
		const getNotifications = async () => {
			if (
				!loading
                ||
                !user?.DOTW
                ||
                !user.frequency
			) return
			try {

				const notificationID = await AsyncStorage.getItem("atrevi-savings-notification")

				const arr = await Notifications.getAllScheduledNotificationsAsync()

				const sd = new Date(
					getSavingDate(new Date(), user?.frequency as frequencies, user?.DOTW as daysOfTheWeek)
				)
				const day = sd.getDate()
				const month = sd.getMonth()
				const trigger = (Platform.OS === "ios") ? 
                { dateComponents: { year: sd.getFullYear(), day, month, hour: 10, minute: 0 }
                } as CalendarTriggerInput
					:
                { day, month, hour: 10, minute: 0, repeats: true
                } as YearlyTriggerInput

				const currN = arr.find(v => v.identifier === notificationID)

				const compare = () => {
					if (
						!currN
                        ||
                        !notificationID
					) return false
					if (Platform.OS === "ios") {
						const currNTrigger = currN?.trigger as CalendarNotificationTrigger
						return currNTrigger.dateComponents?.day === day &&
                            currNTrigger.dateComponents.month === month &&
                            currNTrigger.dateComponents.year === sd.getFullYear()
					} else {
						const currNTrigger = currN?.trigger as YearlyNotificationTrigger
						return currNTrigger.day === day && 
                            currNTrigger.month === month
					}
				}

                
				if (
					!compare()
				) {
					if (notificationID) {
						await Notifications.cancelScheduledNotificationAsync(notificationID)
					}
					const newID = await Notifications.scheduleNotificationAsync({
						content: {
							title: t("notification-title"),
							body: t("notification-body"),
						},
						trigger,
					})
					await AsyncStorage.setItem("atrevi-savings-notification", newID || "")
				} 
			} catch (e) {
				console.error(e)
			}
		}
		getNotifications()

		const ns = Notifications.addNotificationReceivedListener(n => {
			(async () => {
				try {
					const prevN = JSON.parse(await AsyncStorage.getItem("atrevi-notification-list") || "[]")
					const newN = [...prevN, n]
					await AsyncStorage.setItem("atrevi-notification-list", JSON.stringify(newN))
				} catch (e) {
					console.error(e)
				}
			})()
		})
		return () => ns.remove()
	}, [
		user
	])

	const insets = useSafeAreaInsets()

	if (loading) return <Loading />

	if (!user?.id) {
		return <CreateProfileForm />
	}

	return (
		<GoalsContext.Provider value={goals}>
			<MoneyboxesContext.Provider value={moneyboxes}>
				<TransactionsContext.Provider value={transactions}>
					<GoalFundContext.Provider value={goalFund}>
						<UserContext.Provider value={user} >
							<BottomTab.Navigator
								screenOptions={{
									headerShown: false,
									tabBarStyle: [styles.tabBarStyle, {
										paddingBottom: 8 + insets.bottom,
										height: 64 + insets.bottom
									}],
									tabBarHideOnKeyboard: true,
									tabBarLabelPosition: "below-icon"
								}}
							>
								<BottomTab.Screen
									name="HomeStack"
									component={HomeStackNavigator}
									options={{
										tabBarIcon: HomeTabBarIcon,
										tabBarLabel: HomeTabBarLabel,
									}}
								/>
								<BottomTab.Screen
									name="SavingsStack"
									component={SavingsStackNavigator}
									options={{
										tabBarIcon: SavingsTabBarIcon,
										tabBarLabel: SavingsTabBarLabel,
									}}
								/>
								<BottomTab.Screen
									name="SettingsStack"
									component={SettingsStackNavigator}
									options={{
										tabBarIcon: SettingsTabBarIcon,
										tabBarLabel:  SettingsTabBarLabel,
									}}
								/>
							</BottomTab.Navigator>
						</UserContext.Provider>
					</GoalFundContext.Provider>
				</TransactionsContext.Provider>
			</MoneyboxesContext.Provider>
		</GoalsContext.Provider>
	)
}
export default BottomTabNavigator

const styles = StyleSheet.create({
	tabBarStyle: {
		height: 64,
		paddingTop: 8,
		paddingBottom: 8,
	}
})
