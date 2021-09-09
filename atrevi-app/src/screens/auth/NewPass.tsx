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
import TextInput from "../../components/formComponents/TextInput"

type Props = StackScreenProps<AuthParamList, "NewPass">

const NewPass = ({ navigation }: Props): React.ReactElement => {

	const colorScheme = useColorScheme()

	return (

		<Formik
			initialValues={{
				phoneNumber: "",
				phoneNumberWithoutCode: "",
				code: "",
				newPassword: ""
			}}

			onSubmit={async (v) => {
				try {
					await Auth.forgotPasswordSubmit(
						v.phoneNumber,
						v.code,
						v.newPassword
					)
					navigation.navigate("SignInScreen")
				} catch (err: any) {
					console.error(err)
					Alert.alert("Error", err.message)
				}
                
			}}
			// validationSchema={}
		>
			{({ handleChange, handleBlur, handleSubmit, values, errors, touched, submitForm }) => (
				<Screen>
					<FormView>
						<View style={styles.titleContainer}>
							<Text style={{...styles.title, color: colorScheme === "dark" ? primary.default : secondary.default}}>
								{t("Write your code") + " " + t("and new password")}
							</Text>
							<Text>{t("We sent a code to your phone")}.</Text>
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

						<TextInput 
							value={values.code}
							placeholder={t("Write your code")}
							keyboardType="number-pad"
							error={errors.code && touched.code ? errors.code : undefined}
							onChangeText={handleChange("code")}
							onBlur={handleBlur("code")}
						/>
                            
						<TextInput
							onChangeText={handleChange("newPassword")}
							onBlur={handleBlur("newPassword")}
							value={values.newPassword}
							placeholder={t("Password")}
							error={
								touched.newPassword && errors.newPassword ? 
									errors.newPassword
									:
									undefined
							}
							secureTextEntry={true}
							textContentType="password"
							returnKeyType="send"
							onSubmitEditing={submitForm}
							// passRef={newPassword}
						/>

						<Button onPress={handleSubmit} title={t("Submit")} />

					</FormView>
				</Screen>
			)}
		</Formik>
	)
}

export default NewPass

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
