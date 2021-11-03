import { API, graphqlOperation } from "aws-amplify"
import * as React from "react"
import { Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native"
import { DeleteGoalInput, Goal } from "../../API"
import { deleteGoal } from "../../graphql/mutations"
import Button from "../Button"
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
