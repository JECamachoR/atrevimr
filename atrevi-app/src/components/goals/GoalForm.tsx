import * as React from "react"
import Constants from "expo-constants"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Text, View, useThemeColor } from "../Themed"
import i18n, { t } from "i18n-js"
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
import GoalsContext from "../../contexts/GoalsContext"
import { formatNumber } from "react-native-currency-input"
import UserContext from "../../contexts/UserContext"
import { daysOfTheWeek, frequencies } from "../../../../types"
import getNextSavingDate from "../../../functions/getNextSavingDate"
import Submitting from "../Submitting"
import timeForFrequency from "../../../functions/timeForFrequency"
import getSavingDate from "../../../functions/getSavingDate"
import Button from "../Button"
import DeleteGoalModal from "./DeleteGoalModal"
import { Goal } from "../../API"

type Props = {
    visible: boolean,
    hideModal: () => void,
    goal: Goal | CreateGoalType,
    handleSubmit: (g: any) => void,
    type?: string
}

const CreateGoalFormModal = ({ visible, hideModal, goal, handleSubmit, type }: Props): React.ReactElement => {

	const user = React.useContext(UserContext)
	const line = useThemeColor({colorName: "line"})
	const link = useThemeColor({colorName: "link"})
	const today = new Date()
	const DOTW = (user.DOTW as daysOfTheWeek) || "thursday" as daysOfTheWeek
	const frequency = (user.frequency as frequencies) || "7day"
    
	const minDate = new Date(getNextSavingDate(
		new Date(),
		user.frequency as frequencies,
		user.DOTW as daysOfTheWeek
	))
	return (
		<Formik
			initialValues={goal}
			onSubmit={handleSubmit}
			validationSchema={GoalCreationSchema}
			validateOnChange={false}
			enableReinitialize
		>
			{({ values, handleChange, handleBlur, 
				setFieldValue, submitForm, resetForm, errors, 
				touched, isSubmitting, setTouched 
			}) => {
				
				const [deleteVisible, setDeleteVisible] = React.useState(false)

				const calculateSavings = () => {
					if (!values.total || !values.date) return
					const list = []
					list.push({ammount: values.total, date: values.date})
                    const thisSD = new Date(getSavingDate(today, frequency, DOTW))
                    const nPeriods = Math.floor(((typeof values.date !== "string" ? values.date : new Date(values.date)).getTime() - (thisSD).getTime()) 
                    / (timeForFrequency(frequency) * 1000 * 3600 * 24))
                    setFieldValue("installments", values.total/nPeriods)
				}

				React.useEffect(() => calculateSavings(), 
					[values.total, values.date]
				)
				const f = (n: number) => formatNumber(n, {
					delimiter: ",",
					precision: 2,
					prefix: "$",
					separator: ".",
				})

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
                                    goal={goal as Goal}
								/>

								<NameAndIMG
									changeIMG={(img) => {
										setFieldValue("unsplashIMG", img)
										setTouched({unsplashIMG: true, ...touched})
									}}
									handleBlur={handleBlur("name")}
									handleTextChange={handleChange("name")}
									name={values.name}
									unsplashIMG={ typeof values.unsplashIMG !== "string" ? values.unsplashIMG : JSON.parse(values.unsplashIMG)}
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
										handleBlur={handleBlur("total")}
										handleChange={(v) => setFieldValue("total", v)}
										value={values.total}
										error={(touched.total || undefined) && errors.total}
									/>
									<ErrorText error={(touched.total || undefined) && errors.total} />
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
									
									<Text style={styles.estimateLabel}>{t("For this goal you will need to save")}:</Text>
									<Text style={[
										styles.estimateValue,
										{color: link}
									]}>{f(values.installments - (0))} {t(frequency)}</Text>
								</View>
                                { type == "update" && 
                                    <View style={styles.deleteContainer}>
                                        <Button
                                            title={t("Delete")+" "+ t("Goal")}
                                            onPress={() => setDeleteVisible(true)}
                                            lightVariant="error"
                                            darkModeVariant="error"
                                        />
                                    </View>
                                }
							</FormView>
						}
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
		flex: 1,
		marginVertical: 16,
		borderRadius: 15,
		borderWidth: 1,
		padding: 16,
	},
	estimateLabel: {

	},
	estimateValue: {
		fontSize: 16,
	},
	deleteContainer: {
		marginTop: 16,
		marginBottom: 128,
	},
})