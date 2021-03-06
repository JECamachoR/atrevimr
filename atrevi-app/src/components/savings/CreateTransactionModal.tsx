import * as React from "react"
import { StyleSheet, TextInput, TouchableOpacity } from "react-native"
import Modal from "../Modal"
import { Text, useThemeColor, View } from "../Themed"
import SegmentedControl from "@react-native-segmented-control/segmented-control"
import { Formik } from "formik"
import CurrencyInput from "react-native-currency-input"
import { darkMode, error, grayscale, success } from "../../constants/Colors"
import { Row } from "../Layout"
import { MaterialIcons } from "@expo/vector-icons"
import { t } from "i18n-js"
import GoalPickerModal from "./FundPickerModal"
import { CreateTransactionInput, CreateTransactionMutation, GetUserQuery, Goal, UpdateGoalInput, UpdateUserInput } from "../../API"
import { TransactionSchema } from "../../schemas"
import API, { GraphQLResult } from "@aws-amplify/api"
import { createTransaction, updateGoal, updateUser } from "../../graphql/mutations"
import { graphqlOperation } from "aws-amplify"
import AuthContext from "../../auth/AuthContext"
import { getUser } from "../../graphql/queries"
import ErrorText from "../formComponents/ErrorText"
import Submitting from "../Submitting"

type Props = {
    hideModal: () => void,
    visible: boolean,
}

const CreateTransactionModal = ({hideModal, visible}: Props): React.ReactElement => {

	const [nRendered, setNRendered] = React.useState(0)
	const auth = React.useContext(AuthContext)
	return (
		<Formik
			initialValues={{
				ammount: 0,
				concept: "",
				goal: null as Goal | null
			}}
			onSubmit={async v => {
				try {
					const {goal, ...trans} = v
					const c = await API.graphql(
						graphqlOperation(createTransaction, {input: {
							...trans,
                            recievingGoalID: goal?.id
						} as CreateTransactionInput})
					) as GraphQLResult<CreateTransactionMutation>
					if (c.data?.createTransaction?.ammount) {
						await API.graphql(
							graphqlOperation(updateGoal, {input: {
								id: goal?.id,
								balance: (goal?.balance || 0) + c.data.createTransaction.ammount
							} as UpdateGoalInput})
						)
					}
					if (c.data?.createTransaction?.ammount) {
						const b = await API.graphql(
							graphqlOperation(getUser, {id: auth.username})
						) as GraphQLResult<GetUserQuery>
						if (b.data?.getUser?.id) {
							await API.graphql(graphqlOperation(updateUser, {input: 
								{
									id: auth.username,
									balance: (b.data.getUser.balance || 0) + c.data.createTransaction.ammount
								} as UpdateUserInput
							}))
						}
					}
					hideModal()
					setNRendered(v => v+1)
				} catch (err) {
					console.error(err)
				}
			}}
			validationSchema={TransactionSchema}
			key={nRendered}
		>
			{({values, errors, touched, handleBlur, setFieldValue, handleChange, submitForm, resetForm, isSubmitting }) => {
				
				const [pickingGoal, setPickingGoal] = React.useState(false)
				
				const color = useThemeColor({colors: {
					light: grayscale.body,
					dark: grayscale.offWhite
				}})
				const placeholder = useThemeColor({colorName: "placeholderTextColor"})
				
				const bg = useThemeColor({colors: {
					light: grayscale.offWhite,
					dark: darkMode.inputBackground,
				}})
				const line = useThemeColor({colorName: "line"})
				const ph = useThemeColor({colorName: "placeholderTextColor"})
				const link = useThemeColor({colorName: "link"})
				
				return (
					<Modal
						hideModal={hideModal} 
						visible={visible}
						rightComponent={(
							<TouchableOpacity onPress={() => {
								if (!isSubmitting) submitForm()
							}}>
								<View><Text style={[styles.save, {color: link}]}>{t("Save")}</Text></View>
							</TouchableOpacity>
						)}
						title={t("New Record")}
						onClose={resetForm}
					>
						{ isSubmitting ? <Submitting /> :
							<>
								<GoalPickerModal
									visible={pickingGoal}
									hideModal={() => setPickingGoal(false)}
									pickGoal={v => setFieldValue("goal", v)}
								/>

								<SegmentedControl
									values={["Deposit", "Withdrawal"]}
									selectedIndex={values.ammount >= 0 ? 0 : 1}
									onChange={() => setFieldValue("ammount", values.ammount * -1)}
									style={styles.segmented}
								/>

								<View style={styles.ammountContainer}>
									<CurrencyInput
										value={values.ammount}
										onChangeValue={v => setFieldValue("ammount", v)}
										onBlur={handleBlur("ammount")}
										separator="."
										delimiter=","
										style={[styles.ammount, {color: (values.ammount >= 0 ? success.dark : error.default)}]}
										showPositiveSign={true}
										autoFocus={true}
									/>
									<ErrorText
										error={
											errors.ammount && touched.ammount ?
												errors.ammount : undefined
										}
									/>
								</View>

								<TouchableOpacity
									style={styles.funds}
									onPress={() => setPickingGoal(true)}
								>
									<Row
										style={styles.fundRow}
										lightColor={grayscale.inputBackground}
										darkColor={darkMode.inputBackground}
									>
										<Row style={styles.fundLeftSide}>
											<MaterialIcons name="account-balance" size={24} color={color} />
											<Text style={[styles.fundLabel, {color}]}> {t("Goal")}</Text>
										</Row>
										<Row style={styles.fundRightSide}>
											<Text style={[styles.fundLabel, {color: placeholder}]}>{
												values.goal ? 
													((values.goal.name === "goals" ? t("Goals"): values.goal.name) + " ")
													:
													"Pick a goal"
											}</Text>
											<MaterialIcons name="keyboard-arrow-right" size={30} color={color} />
										</Row>
									</Row>
								</TouchableOpacity>
								<ErrorText 
									error={
										errors.goal && touched.goal ?
											errors.goal : undefined
									}
									style={{paddingHorizontal: 16, marginTop: 8}}
								/>
						

								<View>
									<Text style={styles.conceptLabel}>
										{t("Concept")}
									</Text>
								</View>
								<TextInput
									value={values.concept}
									onChangeText={handleChange("concept")}
									onBlur={handleBlur("concept")}
									style={[styles.concept, {
										backgroundColor: bg,
										borderColor: (errors.concept && touched.concept) ? error.default : line,
										color,
									}]}
									placeholder={t("Note")}
									placeholderTextColor={ph}
								/>
								<ErrorText 
									error={
										errors.concept && touched.concept ?
											errors.concept : undefined
									}
									style={{paddingHorizontal: 16}}
								/>
							</>
						}
					</Modal>
				)
			}}
		</Formik>
	)
}

export default CreateTransactionModal

const styles = StyleSheet.create({
	segmented: {
		margin: 16,
		marginBottom: 0,
	},
	ammount: {
		fontSize: 48,
	},
	ammountContainer: {
		margin: 16,
		alignItems: "flex-end",
		justifyContent: "center"
	},
	save: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 16,
	},
	funds: {
		marginHorizontal: 16,
		borderRadius: 15,
		overflow: "hidden",
		height: 44
	},
	fundRow: {
		flex: 1,
		padding: 8,
		alignItems: "center",
	},
	fundLeftSide: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#00000000"
	},
	fundRightSide: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
		backgroundColor: "#00000000"
	},
	fundLabel: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 16,
		lineHeight: 20,
	},
	transparent: {
		backgroundColor: "#00000000"
	},
	concept: {
		height: 44,
		fontSize: 16,
		borderWidth: 1,
		borderRadius: 15,
		marginVertical: 8,
		overflow: "hidden",
		alignItems: "center",
		marginHorizontal: 16,
		paddingHorizontal: 16,
		justifyContent: "center",
		fontFamily: "Poppins_400Regular",
	},
	conceptLabel: {
		marginTop: 8,
		marginHorizontal: 16,
		fontSize: 12,
	}
})
