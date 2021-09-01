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

type Props = {
    visible: boolean,
    hideModal: () => void,
    goal: CreateGoalType,
    handleSubmit: (g: CreateGoalType) => void,
    setGoal: React.Dispatch<React.SetStateAction<CreateGoalType>>
}

const CreateGoalFormModal = ({ visible, hideModal, goal, handleSubmit }: Props): React.ReactElement => {
    
	const line = useThemeColor({colorName: "line"})

	return (
		<Formik
			initialValues={goal}
			onSubmit={handleSubmit}
		>
			{({values, handleChange, handleBlur, setFieldValue, submitForm, resetForm}) => {
    
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
								variant={"moneybox"}
							/>

							<CategoryPicker
								category={values.category}
								selectCategory={(c) => setFieldValue("category", c)}
								variant="moneybox"
							/>

							<View>
								<Text style={styles.subtitle}>{i18n.t("Savings")}</Text>
								<Text style={styles.label}>{i18n.t("How much do you need?")}</Text>
								<NeededAmmountInput
									handleBlur={handleBlur("ammount")}
									handleChange={(v) => setFieldValue("ammount", v)}
									value={values.ammount}
								/>
								<Text style={styles.label}>{i18n.t("When do you need it?")}</Text>
								<DateInput
									date={values.date}
									field={"date"}
									setDate={setFieldValue}
								/>
							</View>
							<View style={[styles.estimateCard, {borderColor: line}]}></View>
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