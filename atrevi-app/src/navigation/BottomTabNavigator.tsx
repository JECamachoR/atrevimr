/* eslint-disable @typescript-eslint/ban-types */
import * as React from "react"
import { StyleSheet } from "react-native"
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
import TransactionsContext from "../contexts/TransactionsContext"
import { GetUserQuery, Goal, ListGoalsQuery, ListTransactionsQuery, 
	OnCreateGoalSubscription, OnCreateTransactionSubscription, 
	OnCreateUserSubscription, OnDeleteGoalSubscription, 
	OnUpdateGoalSubscription, OnUpdateUserSubscription, Transaction, User } from "../API"
import { API, graphqlOperation } from "aws-amplify"
import { getUser, listGoals, listTransactions } from "../graphql/queries"
import { GraphQLResult } from "@aws-amplify/api-graphql"
import { onCreateGoal, onCreateTransaction, onCreateUser, 
	onDeleteGoal, onUpdateGoal, onUpdateUser } from "../graphql/subscriptions"
import { Observable } from "zen-observable-ts"
import AuthContext from "../auth/AuthContext"
import Loading from "../components/Loading"
import CreateProfileForm from "../screens/settings/CreateProfileForm"
import UserContext from "../contexts/UserContext"

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
	const [transactions, setTransactions] = React.useState<Transaction[]>([])
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
			onTransactionCreation.unsubscribe()
		}
	}, [])

	const insets = useSafeAreaInsets()

	if (loading) return <Loading />

	if (!user?.id) {
		return <CreateProfileForm />
	}

	return (
		<GoalsContext.Provider value={goals}>
				<TransactionsContext.Provider value={transactions}>
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
				</TransactionsContext.Provider>
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
