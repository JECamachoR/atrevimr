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
import { Text, View } from "../../components/Themed"
import { AuthParamList } from "../../../types"
import { CountryCode } from "react-native-country-picker-modal"

type Props = StackScreenProps<AuthParamList, "PhoneVerificationScreen">;

const PhoneVerificationScreen = ({ route : {params}, navigation}: Props): React.ReactElement => {

	return (
		<View style={styles.container}>
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
						<View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                            
							<View>
								<Text>Un código se envió a tu celular por SMS, ingrésalo abajo :) </Text>
							</View>
                            
							<PhoneNumberInput
								value={values.phoneNumberWithoutCode} 
								defaultCode={values.countryCode as CountryCode}
								placeholder="Número de cel"
								error={errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : undefined}
								onChangeText={handleChange("phoneNumberWithoutCode")}
								onChangeFormattedText={handleChange("phoneNumber")}
								onBlur={handleBlur("phoneNumber")}
								returnKeyType="send"
							/>
                            
							<TextInput 
								value={values.code}
								placeholder="Ingresa el Código"
								keyboardType="number-pad"
								error={errors.code && touched.code ? errors.code : undefined}
								onChangeText={handleChange("code")}
								onBlur={handleBlur("code")}
							/>

							<Button
								onPress={handleSubmit}
								title="Enviar"
							/>
						</View>
					)
				}
				}
			</Formik>
		</View>
	)
}

export default PhoneVerificationScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	}
})
