import * as React from "react"
import Constants from "expo-constants"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Text, View, useThemeColor } from "../Themed"
import i18n, { t } from "i18n-js"
import { primary, secondary } from "../../constants/Colors"
import FormView from "../formComponents/FormView"
import { Formik } from "formik"
import { CreateMoneyboxType } from "../../screens/moneybox/CreateMoneyboxScreen"
import Modal from "../Modal"
import NameAndIMG from "../formComponents/NameAndIMG"
import CategoryPicker from "../formComponents/CategoryPicker"
import NeededAmmountInput from "../formComponents/NeededAmmountInput"
import { MoneyboxCreationSchema } from "../../schemas"
import Submitting from "../Submitting"
import { formatNumber } from "react-native-currency-input"
import UserContext from "../../contexts/UserContext"
import { frequencies } from "../../../types"

type Props = {
    visible: boolean,
    hideModal: () => void,
    moneybox: CreateMoneyboxType,
    handleSubmit: (g: CreateMoneyboxType) => void,
    setMoneybox: React.Dispatch<React.SetStateAction<CreateMoneyboxType>>
}

const CreateMoneyboxFormModal = ({ visible, hideModal, moneybox, handleSubmit }: Props): React.ReactElement => {
    
	const line = useThemeColor({colorName: "line"})
	const link = useThemeColor({colorName: "link"})

	const f = (n: number) => formatNumber(n, {
		delimiter: ",",
		precision: 2,
		prefix: "$",
		separator: ".",
	})

	const user = React.useContext(UserContext)
	const frequency = (user.frequency as frequencies) || "7day"

	return (
		<Formik
			initialValues={moneybox}
			onSubmit={handleSubmit}
			validationSchema={MoneyboxCreationSchema}
			validateOnChange={false}
			enableReinitialize
		>
			{({values, handleChange, handleBlur, setFieldValue, submitForm, resetForm, errors, isSubmitting}) => {

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
						{ isSubmitting ? <Submitting /> :
							<FormView style={styles.formView}>

								<NameAndIMG
									changeIMG={(img) => setFieldValue("unsplashIMG", img)}
									handleBlur={handleBlur("name")}
									handleTextChange={handleChange("name")}
									name={values.name}
									unsplashIMG={values.unsplashIMG}
									variant={"moneybox"}
									nameError={errors.name}
									imgError={errors.unsplashIMG}
								/>

								<CategoryPicker
									category={values.category}
									selectCategory={(c) => setFieldValue("category", c)}
									variant="moneybox"
									error={errors.category}
								/>

								<View>
									<Text style={styles.subtitle}>{i18n.t("Savings")}</Text>
									<Text style={styles.label}>{i18n.t("How much do you want to save periodically?")}</Text>
									<NeededAmmountInput
										handleBlur={handleBlur("recurringAmmount")}
										handleChange={(v) => setFieldValue("recurringAmmount", v)}
										value={values.recurringAmmount}
										error={errors.recurringAmmount}
									/>
								</View>

								<View style={[styles.estimateCard, {borderColor: line}]}>
																		
									<Text style={styles.estimateLabel}>{t("For this moneybox you will need to save")}:</Text>
									<Text style={[
										styles.estimateValue,
										{color: link}
									]}>{values.recurringAmmount && f(values.recurringAmmount)} {t(frequency)}</Text>
								
								</View>
							</FormView>
						}
					</Modal>
				)
			}}
		</Formik>)
}

export default CreateMoneyboxFormModal

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
		height: 78,
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