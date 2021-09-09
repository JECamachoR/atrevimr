import { StackScreenProps } from "@react-navigation/stack"
import { Auth } from "aws-amplify"
import { Formik } from "formik"
import * as React from "react"
import { StyleSheet } from "react-native"
import { PhoneVerificationSchema } from "../../schemas"
import Button from "../../components/Button"
import PhoneNumberInput from "../../components/formComponents/PhoneNumberInput"
import TextInput from "../../components/formComponents/TextInput"
import Submitting from "../../components/Submitting"
import { Screen, Text, View } from "../../components/Themed"
import { AuthParamList } from "../../../types"
import { CountryCode } from "react-native-country-picker-modal"
import { t } from "i18n-js"
import useColorScheme from "../../hooks/useColorScheme"
import { primary, secondary } from "../../constants/Colors"

type Props = StackScreenProps<AuthParamList, "PhoneVerificationScreen">;

const PhoneVerificationScreen = ({ route : {params}, navigation}: Props): React.ReactElement => {
	const colorScheme = useColorScheme()

	return (
		<Formik
			initialValues={{
				phoneNumber: params?.phoneNumber || "",
				phoneNumberWithoutCode: params?.phoneNumberWithoutCode || "",
				countryCode: params?.countryCode || "MX",
				code: ""
			}}
			onSubmit={async (v) => {
				try {
					await Auth.confirmSignUp(v.phoneNumber, v.code)
					if (params?.pass && params.phoneNumber) {
						await Auth.signIn({username: params.phoneNumber, password: params.pass})
					} else {
						navigation.popToTop()
					}
				} catch (err) {
					console.error("Error while confirming SignUp:", err)
				}
			}}
			validationSchema={PhoneVerificationSchema}
		>
			{({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => {
				if (isSubmitting) {
					return <Submitting />
				}
				return (
					<Screen style={styles.screen}>
                            
						<View style={styles.titleContainer}>
							<Text style={[styles.title, {color: colorScheme === "dark" ? primary.default : secondary.default}]}>
								{t("Write your code")}
							</Text>
						</View>
						<PhoneNumberInput
							value={values.phoneNumberWithoutCode} 
							defaultCode={values.countryCode as CountryCode}
							placeholder={t("Phone")}
							error={errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : undefined}
							onChangeText={handleChange("phoneNumberWithoutCode")}
							onChangeFormattedText={handleChange("phoneNumber")}
							onBlur={handleBlur("phoneNumber")}
							returnKeyType="send"
						/>
                            
						<TextInput 
							value={values.code}
							placeholder={t("Write your code")}
							keyboardType="number-pad"
							error={errors.code && touched.code ? errors.code : undefined}
							onChangeText={handleChange("code")}
							onBlur={handleBlur("code")}
						/>

						<Button
							onPress={handleSubmit}
							title="Enviar"
						/>
					</Screen>
				)
			}
			}
		</Formik>
	)
}

export default PhoneVerificationScreen

const styles = StyleSheet.create({
	screen: {
	},
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
