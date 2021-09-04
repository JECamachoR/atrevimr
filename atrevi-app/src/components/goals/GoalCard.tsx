import { API, graphqlOperation } from "aws-amplify"
import * as React from "react"
import { GestureResponderEvent, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
import { UnsplashPhoto } from "react-native-unsplash"
import getSavingDate from "../../../functions/getSavingDate"
import shortPlan from "../../../functions/shortPlan"
import { DeleteGoalInput, Goal } from "../../API"
import GoalFundContext from "../../contexts/GoalFundContext"
import GoalsContext from "../../contexts/GoalsContext"
import { deleteGoal, updateFund } from "../../graphql/mutations"
import Button from "../Button"
import Modal from "../Modal"
import GoalTitle from "./GoalTitle"

interface GoalCardProps {
    goal: Goal;
    onPress?: (e: GestureResponderEvent) => void;
    key?: number;
}

const GoalCard = ({ goal , onPress }: GoalCardProps): React.ReactElement => {

	const [visible, setVisible] = React.useState(false)

	const photo: UnsplashPhoto["urls"] = JSON.parse(goal.unsplashIMG || "")
	const goals = React.useContext(GoalsContext)
	const goalFund = React.useContext(GoalFundContext)

	const today = new Date()

	return (
		<TouchableOpacity
			onPress={(e) => {
				setVisible(true)
				if (onPress) onPress(e)
			}}
			style={styles.container}
		>

			<Modal
				hideModal={() => setVisible(false)}
				visible={visible}
			>
				<Button
					title="delete"
					onPress={async () => {
						try {
							await API.graphql(graphqlOperation(deleteGoal, {input: {id: goal.id} as DeleteGoalInput}))
							if (goalFund) {
								const list = goals
									.filter((v) => {
										if (v.id !== goal.id) return v
									})
									.map(v => ({
										ammount: v.ammount, 
										date: new Date(v.date)
									}))
								await API.graphql(graphqlOperation(updateFund, {input: {
									id: goalFund.id,
									recurringAmmount: shortPlan(
										list,
										"7day",
										"monday",
										{
											ammount: goalFund.balance,
											savingDate: getSavingDate(today, "7day", "monday")
										}
									)[0]
								}}))
							}
							setVisible(false)
						} catch (err) {
							console.error(err)
						}
					}}
					lightVariant={"error"}
					darkModeVariant={"error"}
				/>
			</Modal>

			<View style={styles.card}>
				<ImageBackground source={{uri: photo.regular}} style={{flex: 1}}>
					<View style={styles.metaHead}></View>
					<GoalTitle goal={goal} />
				</ImageBackground>
			</View>
		</TouchableOpacity>
	)
}

export default GoalCard

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginHorizontal: 16,
		marginVertical:8,
		borderRadius: 16,
	},
	card: {
		height: 184,
		flex: 1,
		borderRadius: 16,
		overflow: "hidden"
	},
	metaHead: {
		height: 92,
		borderRadius: 16,
		padding: 16,
	},
})
