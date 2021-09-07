import * as React from "react"
import Constants from "expo-constants"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Text, View, useThemeColor } from "../Themed"
import i18n from "i18n-js"
import { primary, secondary } from "../../constants/Colors"
import FormView from "../formComponents/FormView"
import DateInput from "../formComponents/DateInput"
import { Formik } from "formik"
import Modal from "../Modal"
import CategoryPicker from "../formComponents/CategoryPicker"
import NameAndIMG from "../formComponents/NameAndIMG"
import NeededAmmountInput from "../formComponents/NeededAmmountInput"
import { GoalCreationSchema } from "../../schemas"
import ErrorText from "../formComponents/ErrorText"
import shortPlan from "../../../functions/shortPlan"
import getSavingDate from "../../../functions/getSavingDate"
import GoalFundContext from "../../contexts/GoalFundContext"
import GoalsContext from "../../contexts/GoalsContext"
import { formatNumber } from "react-native-currency-input"
import UserContext from "../../contexts/UserContext"
import { daysOfTheWeek, frequencies } from "../../../types"
import getNextSavingDate from "../../../functions/getNextSavingDate"
import Submitting from "../Submitting"
import { Goal } from "../../API"
import { UnsplashPhoto } from "react-native-unsplash"
import Button from "../Button"
import DeleteGoalModal from "./DeleteGoalModal"
import API from "@aws-amplify/api"
import { updateFund, updateGoal } from "../../graphql/mutations"
import { graphqlOperation } from "aws-amplify"

type ProcessedGoal = {
	date: Date;
	id: string;
	owner?: string | null | undefined;
	name: string;
	ammount: number;
	unsplashIMG?: UnsplashPhoto["urls"];
	category: string;
	recurringAmmount: number;
}

type Props = {
    visible: boolean,
    hideModal: () => void,
    goal: Goal,
}

const UpdateGoalFormModal = ({ visible, hideModal, goal }: Props): React.ReactElement => {

	const processedGoal = {
		date: new Date(goal.date),
		id: goal.id,
		owner: goal.owner,
		name: goal.name,
		ammount: goal.ammount,
		unsplashIMG: JSON.parse(goal.unsplashIMG as string),
		category: goal.category,
		recurringAmmount: 0,
	}

	const goalList = React.useContext(GoalsContext)
	const goalFund = React.useContext(GoalFundContext)
	const user = React.useContext(UserContext)

	const line = useThemeColor({colorName: "line"})
	const link = useThemeColor({colorName: "link"})

	const today = new Date()

	const DOTW = (user.DOTW as daysOfTheWeek) || "thursday" as daysOfTheWeek
	const frequency = (user.frequency as frequencies) || "7day"
	const savingDate = getSavingDate(today, frequency, DOTW)
	const minDate = new Date(getNextSavingDate(
		new Date(),
		user.frequency as frequencies,
		user.DOTW as daysOfTheWeek
	))

	return (
		<Formik
			initialValues={processedGoal as ProcessedGoal}
			onSubmit={async v => {
				try {
					const {recurringAmmount, ...goal} = v
					await API.graphql(graphqlOperation(
						updateGoal,
						{input: {
							...goal,
							date: goal.date.toISOString().split("T")[0],
							unsplashIMG: JSON.stringify(goal.unsplashIMG)
						}}
					))
					await API.graphql(graphqlOperation(
						updateFund,
						{input: {
							id: goalFund?.id,
							recurringAmmount
						}}
					))
					hideModal()
				} catch( er ) {
					console.error(er)
				}
			}}
			validationSchema={GoalCreationSchema}
			validateOnChange={false}
		>
			{({ values, handleChange, handleBlur, 
				setFieldValue, submitForm, resetForm, errors, 
				touched, isSubmitting, setTouched 
			}) => {

				const calculateSavings = () => {
					if (!values.ammount || !values.date) return
					const list = goalList
						.map(v => {
							if (v.id === values.id) {
								return values
							} else return {
								ammount: v.ammount, 
								date: new Date(v.date)
							} as {ammount: number, date: Date}
						})
					
					const r = shortPlan(
						list,
						frequency, 
						DOTW, 
						{ 
							ammount: goalFund?.balance || 0, 
							savingDate
						}
					)
					setFieldValue("recurringAmmount", r[0])
				}

				React.useEffect(() => calculateSavings(), 
					[values.ammount, values.date]
				)
				const f = (n: number) => formatNumber(n, {
					delimiter: ",",
					precision: 2,
					prefix: "$",
					separator: ".",
				})

				const [deleteVisible, setDeleteVisible] = React.useState(false)

				return (
					
					<Modal
						hideModal={hideModal}
						visible={visible}
						title={i18n.t("Create a Goal")}
						rightComponent={(
							<TouchableOpacity onPress={() => {
								if (!isSubmitting) submitForm()
							}}>
								<View>
									<Text
										lightColor={secondary.default}
										darkColor={primary.default}
										style={styles.headRightText}
									>{i18n.t("Save")}</Text>
								</View>
							</TouchableOpacity>
						)}
						onClose={resetForm}
					>
						{ isSubmitting ? <Submitting /> :
							<FormView style={styles.formView}>

								<DeleteGoalModal
									visible={deleteVisible}
									hideModal={() => setDeleteVisible(false)}
									goal={goal}
								/>

								<NameAndIMG
									changeIMG={(img) => {
										setFieldValue("unsplashIMG", img)
										setTouched({unsplashIMG: true, ...touched})
									}}
									handleBlur={handleBlur("name")}
									handleTextChange={handleChange("name")}
									name={values.name}
									unsplashIMG={values.unsplashIMG}
									variant={"goals"}
									nameError={touched.name ? errors.name : undefined}
									imgError={touched.unsplashIMG ? errors.unsplashIMG : undefined}
								/>

								<CategoryPicker
									category={values.category}
									selectCategory={(c) => setFieldValue("category", c)}
									variant="goals"
									error={(touched.category || undefined) && errors.category}
								/>

								<View>
									<Text style={styles.subtitle}>{i18n.t("Savings")}</Text>
									<Text style={styles.label}>{i18n.t("How much do you need?")}</Text>
									<NeededAmmountInput
										handleBlur={handleBlur("ammount")}
										handleChange={(v) => setFieldValue("ammount", v)}
										value={values.ammount}
										error={(touched.ammount || undefined) && errors.ammount}
									/>
									<ErrorText error={(touched.ammount || undefined) && errors.ammount} />
									<Text style={styles.label}>{i18n.t("When do you need it?")}</Text>
									<DateInput
										date={values.date}
										field={"date"}
										setDate={setFieldValue}
										variant="secondary"
										minDate={minDate}
									/>
								</View>
								<View style={[styles.estimateCard, {borderColor: line}]}>
									{Boolean(values.recurringAmmount) && 
								<>
									<Text style={styles.estimateLabel}>For this goal you will need to save:</Text>
									<Text style={[
										styles.estimateValue,
										{color: link}
									]}>{f(values.recurringAmmount - (goalFund?.recurringAmmount || 0))}</Text>
									<Text style={styles.estimateLabel}>{"\n"}Adding up your other goals, you will save:</Text>
									<Text style={[
										styles.estimateValue,
										{color: link}
									]}>{f(values.recurringAmmount)}</Text>
								</>	
									}
									<View style={{marginVertical: 24,}}>
										<Button
											title="Delete Goal"
											onPress={() => setDeleteVisible(true)}
											lightVariant="error"
											darkModeVariant="error"
										/>
									</View>
								</View>
							</FormView>
						}
					</Modal>
				
				)
			}}
		</Formik>)
}

export default UpdateGoalFormModal

const styles = StyleSheet.create({
	bg: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
		backgroundColor: "#FFFFFF00"
	},
	container: {
		flex: 1,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		overflow: "hidden",
	},
	headRightText: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 16,
	},
	formView: {
		marginTop: 16,
		paddingHorizontal: 24,
		paddingBottom: 128,
	},
	subtitle: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 20,
	},
	label: {
		fontSize: 16,
		lineHeight: 28,
	},
	estimateCard: {
		height: 132,
		flex: 1,
		marginTop: 16,
		marginBottom: 128,
		borderRadius: 15,
		borderWidth: 1,
		padding: 16,
	},
	estimateLabel: {

	},
	estimateValue: {
		fontSize: 16,
	},
})