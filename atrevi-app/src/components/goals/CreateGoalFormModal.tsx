import * as React from "react"
import Constants from "expo-constants"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Text, View, useThemeColor } from "../Themed"
import i18n from "i18n-js"
import { primary, secondary } from "../../constants/Colors"
import { CreateGoalType } from "../../screens/goal/CreateGoalScreen"
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

type Props = {
    visible: boolean,
    hideModal: () => void,
    goal: CreateGoalType,
    handleSubmit: (g: CreateGoalType) => void,
    setGoal: React.Dispatch<React.SetStateAction<CreateGoalType>>
}

const CreateGoalFormModal = ({ visible, hideModal, goal, handleSubmit }: Props): React.ReactElement => {

	const goalList = React.useContext(GoalsContext)
		.map(v => ({...v, date: new Date(v.date)})) as {ammount: number, date: Date}[]
	const goalFund = React.useContext(GoalFundContext)
    
	const line = useThemeColor({colorName: "line"})
	const today = new Date()
	
	return (
		<Formik
			initialValues={{...goal, recurringAmmount: 0}}
			onSubmit={handleSubmit}
			validationSchema={GoalCreationSchema}
			validateOnChange={false}
		>
			{({ values, handleChange, handleBlur, setFieldValue, submitForm, resetForm, errors }) => {
				
				const calculateSavings = () => {
					if (!values.ammount || !values.date) return
					console.log("to get ", values.ammount)
					console.log("by", values.date)
					const list = [...goalList]
					list.push({ammount: values.ammount, date: values.date})
					const r = shortPlan(
						list,
						"7day", 
						"monday", 
						{ ammount: goalFund?.balance || 0, savingDate: getSavingDate(today, "7day", "monday") }
					)
					setFieldValue("recurringAmmount", r[0])
				}

				React.useEffect(() => calculateSavings(), [values.ammount, values.date])

				return (
					
					<Modal
						hideModal={hideModal}
						visible={visible}
						title={i18n.t("Create a Moneybox")}
						rightComponent={(
							<TouchableOpacity onPress={submitForm}>
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
						<FormView style={styles.formView}>

							<NameAndIMG
								changeIMG={(img) => setFieldValue("unsplashIMG", img)}
								handleBlur={handleBlur("name")}
								handleTextChange={handleChange("name")}
								name={values.name}
								unsplashIMG={values.unsplashIMG}
								variant={"goals"}
								nameError={errors.name}
								imgError={errors.unsplashIMG}
							/>

							<CategoryPicker
								category={values.category}
								selectCategory={(c) => setFieldValue("category", c)}
								variant="goals"
								error={errors.category}
							/>

							<View>
								<Text style={styles.subtitle}>{i18n.t("Savings")}</Text>
								<Text style={styles.label}>{i18n.t("How much do you need?")}</Text>
								<NeededAmmountInput
									handleBlur={handleBlur("ammount")}
									handleChange={(v) => setFieldValue("ammount", v)}
									value={values.ammount}
									error={errors.ammount}
								/>
								<ErrorText error={errors.ammount} />
								<Text style={styles.label}>{i18n.t("When do you need it?")}</Text>
								<DateInput
									date={values.date}
									field={"date"}
									setDate={setFieldValue}
									variant="secondary"
								/>
							</View>
							<View style={[styles.estimateCard, {borderColor: line}]}>
								{Boolean(values.recurringAmmount) && 
								<>
									<Text>For this goal you will need to save:</Text>
									<Text>{(values.recurringAmmount - (goalFund?.recurringAmmount || 0) )}</Text>
									<Text>Adding up your other goals, you will save:</Text>
									<Text>{values.recurringAmmount}</Text>
								</>	
								}
							</View>
						</FormView>
					</Modal>
				
				)
			}}
		</Formik>)
}

export default CreateGoalFormModal

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
		marginHorizontal: 24,
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
		marginVertical: 16,
		borderRadius: 15,
		borderWidth: 1,
	},
})