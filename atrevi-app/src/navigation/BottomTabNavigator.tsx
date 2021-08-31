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
import MoneyboxesContext from "../contexts/MoneyboxesContext"
import TransactionsContext from "../contexts/TransactionsContext"
import { Fund, Goal, ListFundsQuery, ListGoalsQuery, ListTransactionsQuery, 
	OnCreateFundSubscription, OnCreateGoalSubscription, OnCreateTransactionSubscription, 
	OnDeleteFundSubscription, OnDeleteGoalSubscription, OnUpdateFundSubscription, 
	OnUpdateGoalSubscription, Transaction } from "../API"
import GoalFundContext from "../contexts/GoalFundContext"
import { API, graphqlOperation } from "aws-amplify"
import { listFunds, listGoals, listTransactions } from "../graphql/queries"
import { GraphQLResult } from "@aws-amplify/api-graphql"
import { onCreateFund, onCreateGoal, onCreateTransaction, onDeleteFund, 
	onDeleteGoal, onUpdateFund, onUpdateGoal } from "../graphql/subscriptions"
import { Observable } from "zen-observable-ts"
import AuthContext from "../auth/AuthContext"

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = (): React.ReactElement => {

	const auth = React.useContext(AuthContext)

	const [goals, setGoals] = React.useState<Goal[]>([])
	const [moneyboxes, setMoneyboxes] = React.useState<Fund[]>([])
	const [transactions, setTransactions] = React.useState<Transaction[]>([])
	const [goalFund, setGoalFund] = React.useState<Fund | null>(null)

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
			error: console.error
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
			error: console.error
		})

		const onFundCreation = (API.graphql(graphqlOperation(onCreateFund, {
			owner: auth.username
		})) as Observable<object>).subscribe({
			next: ({value}:{value: GraphQLResult<OnCreateFundSubscription>}) => {
				if (value.data?.onCreateFund?.id) {
					const nf = value.data.onCreateFund as Fund
					setMoneyboxes(g => ([...g, nf]))
				}
			},
			error: console.error
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
			error: console.error
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
			error: console.error
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
			error: console.error
		})

		loadGoals()
		loadFunds()
		loadTransactions()

		return () => {
			onGoalCreation.unsubscribe()
			onGoalDeletion.unsubscribe()
			onGoalUpdate.unsubscribe()
			onFundCreation.unsubscribe()
			onFundDeletion.unsubscribe()
			onFundUpdate.unsubscribe()
			onTransactionCreation.unsubscribe()
		}
	}, [])

	const insets = useSafeAreaInsets()

	return (
		<GoalsContext.Provider value={goals}>
			<MoneyboxesContext.Provider value={moneyboxes}>
				<TransactionsContext.Provider value={transactions}>
					<GoalFundContext.Provider value={goalFund}>
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
