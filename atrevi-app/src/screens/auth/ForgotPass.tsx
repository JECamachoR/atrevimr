import { Formik } from "formik"
import * as React from "react"
import { Alert, StyleSheet } from "react-native"
import Button from "../../components/Button"
import PhoneNumberInput from "../../components/formComponents/PhoneNumberInput"
import { Text, View, Screen } from "../../components/Themed"
import { primary, secondary } from "../../constants/Colors"
import { Auth } from "aws-amplify"
import FormView from "../../components/formComponents/FormView"
import { t } from "i18n-js"
import { StackScreenProps } from "@react-navigation/stack"
import { AuthParamList } from "../../../types"
import useColorScheme from "../../hooks/useColorScheme"

type Props = StackScreenProps<AuthParamList, "ForgotPass">

const ForgotPass = ({ navigation }: Props): React.ReactElement => {

	const colorScheme = useColorScheme()

	return (


		<Formik
			initialValues={{
				phoneNumber: "",
				phoneNumberWithoutCode: ""
			}}

			onSubmit={async (v) => {
				try {
					await Auth.forgotPassword(v.phoneNumber)
					navigation.navigate("NewPass")
				} catch (err: any) {
					console.error(err)
					Alert.alert("Error", err.message)
				}
                
			}}
			// validationSchema={}
		>
			{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
				<Screen>
					<FormView>
						<View style={styles.titleContainer}>
							<Text style={{...styles.title, color: colorScheme === "dark" ? primary.default : secondary.default}}>
								{t("Forgot password")}
							</Text>
							<Text>{t("Ok what's your phone number?")}</Text>
						</View>
						<PhoneNumberInput 
							value={values.phoneNumberWithoutCode}
							placeholder={t("Phone")}
							error={
								touched.phoneNumberWithoutCode && errors.phoneNumberWithoutCode ? 
									errors.phoneNumberWithoutCode
									:
									undefined
							}
							defaultCode="MX"
							onChangeFormattedText={handleChange("phoneNumber")}
							onChangeText={handleChange("phoneNumberWithoutCode")}
							onBlur={handleBlur("phoneNumberWithoutCode")}
							onChangeCountry={(v) => {handleChange("countryCode")(v.cca2)}}
							returnKeyType="next"
						/>


						<Button onPress={handleSubmit} title={t("Submit")} />

					</FormView>
				</Screen>
			)}
		</Formik>
	
	)
}

export default ForgotPass

const styles = StyleSheet.create({
	titleContainer: {
		margin: 16,
	},
	navOptions: {
		flexDirection: "row",
		marginHorizontal: 16,
		justifyContent: "center",
	},
	title: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 32,
		lineHeight: 48,
	},
})
