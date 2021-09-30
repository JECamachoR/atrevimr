import { API, graphqlOperation } from "aws-amplify"
import * as React from "react"
import { Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native"
import getSavingDate from "../../../functions/getSavingDate"
import shortPlan from "../../../functions/shortPlan"
import { DeleteGoalInput, Goal } from "../../API"
import { deleteGoal, updateFund } from "../../graphql/mutations"
import Button from "../Button"
import GoalFundContext from "../../contexts/GoalFundContext"
import GoalsContext from "../../contexts/GoalsContext"
import { Text, View } from "../Themed"
import { grayscale } from "../../constants/Colors"
import { Row } from "../Layout"
import { t } from "i18n-js"

type Props = {
    visible: boolean,
    goal: Goal
    hideModal: () => void
}

const DeleteGoalModal = ({ visible, goal, hideModal }: Props): React.ReactElement => {

	const goals = React.useContext(GoalsContext)
	const goalFund = React.useContext(GoalFundContext)
	const today = new Date()

	return (			
		<Modal
			visible={visible}
			transparent={true}
			style={styles.modal}
		>
			<TouchableOpacity
				style={styles.modal}
				onPress={hideModal}
			>
				<TouchableWithoutFeedback
                
				>
					<View
						style={styles.container}
					>
						<View
							style={styles.head}
						>
							<Text style={styles.title}>
								{t("Delete item", goal)}
							</Text>
						</View>

						<Row>
							<View style={{flex: 1}}>
								<Button
									title={t("Delete")}
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
											hideModal()
										} catch (err) {
											console.error(err)
										}
									}}
									lightVariant={"error"}
									darkModeVariant={"error"}
								/>
							</View>
							<View style={{flex: 1}}>
								<Button 
									title={t("Cancel")}
									onPress={hideModal}
									lightVariant={"successDark"}
									darkModeVariant={"successDark"}
								/>
							</View>
						</Row>
					</View>
				</TouchableWithoutFeedback>
			</TouchableOpacity>
		</Modal>
	)
}

export default DeleteGoalModal

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: grayscale.body + "A0"
	},
	container: {
		marginHorizontal: 24,
	},
	head: {
		height: 40,
		borderBottomWidth: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 22
	}
})
