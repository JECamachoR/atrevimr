import { StyleSheet, TouchableOpacity } from "react-native"
import { Screen, View, useThemeColor, ScrollView } from "../../components/Themed"
import * as React from "react"
import useColorScheme from "../../hooks/useColorScheme"
import HomeLogoDark from "../../assets/icons/HomeLogoDark"
import HomeLogoLight from "../../assets/icons/HomeLogoLight"
import { MaterialIcons } from "@expo/vector-icons"
import CreateGoalCard from "../../components/goals/CreateGoalCard"
import CreateMoneyboxCard from "../../components/moneyboxes/CreateMoneyboxCard"
import RoundButton from "../../components/home/RoundButton"
import PlusButtonModal from "../../components/home/PlusButtonModal"
import { StackScreenProps } from "@react-navigation/stack"
import { NavParamList } from "../../../types"
import GoalsContext from "../../contexts/GoalsContext"
import GoalList from "../../components/goals/GoalList"
import MoneyboxList from "../../components/moneyboxes/MoneyboxList"
import NotificationsModal from "../../components/notifications/NotificationsModal"

type Props = StackScreenProps<NavParamList, "Home">

const HomeScreen = ({ navigation }: Props) : React.ReactElement =>  {

	const [plusButtonModalOpen, setPlusButtonModalOpen] = React.useState(false)
	const [notificationsOpen, setNotificationsOpen] = React.useState(false)

	const colorScheme = useColorScheme()
	const iconColor = useThemeColor({colorName: "iconColor"})

	const goals = React.useContext(GoalsContext)

	return (
		<Screen>

			<NotificationsModal visible={notificationsOpen} hideModal={() => setNotificationsOpen(false)} />

			<PlusButtonModal 
				visible={plusButtonModalOpen} 
				hideModal={() => setPlusButtonModalOpen(false)} 
				goToCreateGoal={()=> navigation.navigate("CreateGoal")}
				goToCreateMoneybox={()=> navigation.navigate("CreateMoneybox")}
			/>
			<ScrollView style={{flex: 1, backgroundColor: "#00000000"}}>
				<View style={[styles.titleRow, goals.length ? {paddingBottom: 0} : {}]} >
					<View style={styles.logo} >
						{colorScheme === "dark" ? <HomeLogoDark /> : <HomeLogoLight height={30} width={127} /> }
					</View>
					<View style={styles.rightHalfTitle} >
						<TouchableOpacity
							onPress={() => navigation.navigate("Web", {
								url: "https://help-center-atrevi.webflow.io/"
							})}
						>
							<MaterialIcons name="help" size={36} color={iconColor} />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => setNotificationsOpen(true)}
						>
							<MaterialIcons name="notifications" size={36} color={iconColor} />
						</TouchableOpacity>
					</View>
				</View>

				{ goals.length ? 
                    <GoalList goals={goals} />
					:
                    <CreateGoalCard goToCreateGoal={() => navigation.navigate("CreateGoal")} />
				}
			</ScrollView>
			<RoundButton variant="plus" onPress={() => setPlusButtonModalOpen(true)} style={styles.roundButtonPosition}/>

			{/* 
			<Button
				title="initialSignup"
				onPress={async () => {
					try {
						const r1 = await API.graphql(graphqlOperation(createUser, {
							input: {phone: auth.username, id: auth.username} as CreateUserInput
						}))
						console.log(r1)
						const r2 = await API.graphql(graphqlOperation(createFund, {input: {
							name: "goals",
							balance: 0,
						} as CreateFundInput}))
						console.log(r2)
					} catch (err) {
						console.error(err)
					}
				}}
			/> */}
		</Screen>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	titleRow: {
		flexDirection: "row",
		paddingHorizontal: 16,
		paddingVertical: 24,
	},
	logo: {
		flex: 1,
		alignItems: "flex-start",
	},
	rightHalfTitle: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
	},
	goalList: {
		flex: 1,
		paddingHorizontal: 16,
	},
	roundButtonPosition: {
		position: "absolute",
		right: 16,
		bottom: 16,
	}
})
