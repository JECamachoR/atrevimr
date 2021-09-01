import { StyleSheet, TouchableOpacity } from "react-native"
import { Screen, View, useThemeColor } from "../../components/Themed"
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
import MoneyboxesContext from "../../contexts/MoneyboxesContext"
import GoalList from "../../components/goals/GoalList"
import MoneyboxList from "../../components/moneyboxes/MoneyboxList"

type Props = StackScreenProps<NavParamList, "Home">

const HomeScreen = ({ navigation }: Props) : React.ReactElement =>  {

	const [plusButtonModalOpen, setPlusButtonModalOpen] = React.useState(false)

	const colorScheme = useColorScheme()
	const iconColor = useThemeColor({colorName: "iconColor"})

	const goals = React.useContext(GoalsContext)
	const moneyboxes = React.useContext(MoneyboxesContext)

	return (
		<Screen>

			<PlusButtonModal 
				visible={plusButtonModalOpen} 
				hideModal={() => setPlusButtonModalOpen(false)} 
				goToCreateGoal={()=> navigation.navigate("CreateGoal")}
				goToCreateMoneybox={()=> navigation.navigate("CreateMoneybox")}
			/>

			<View style={[styles.titleRow, goals.length || moneyboxes.length ? {paddingBottom: 0} : {}]} >
				<View style={styles.logo} >
					{colorScheme === "dark" ? <HomeLogoDark /> : <HomeLogoLight height={30} width={127} /> }
				</View>
				<View style={styles.rightHalfTitle} >
					<TouchableOpacity
						onPress={() => alert("notifications :)")}
					>
						<MaterialIcons name="notifications" size={36} color={iconColor} />
					</TouchableOpacity>
				</View>
			</View>

			{ goals.length || moneyboxes.length ? 
				<>
					<View style={{marginBottom: 16}}>
						<GoalList goals={goals} />
					</View>
					<MoneyboxList moneyboxes={moneyboxes} />
				</>
				:
				<>
					<CreateGoalCard goToCreateGoal={() => navigation.navigate("CreateGoal")} />
					<CreateMoneyboxCard goToCreateMoneybox={() => navigation.navigate("CreateMoneybox")} />
				</>
			}

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
		justifyContent: "flex-end",
		flexDirection: "row"
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
