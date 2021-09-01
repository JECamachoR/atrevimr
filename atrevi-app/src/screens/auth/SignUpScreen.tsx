import { StackScreenProps } from "@react-navigation/stack"
import { Formik } from "formik"
import * as React from "react"
import { Alert, StyleSheet, TouchableOpacity, useColorScheme } from "react-native"
import Button from "../../components/Button"
import PhoneNumberInput from "../../components/formComponents/PhoneNumberInput"
import { Text, View, Screen } from "../../components/Themed"
import TextInput from "../../components/formComponents/TextInput"
import { AuthParamList } from "../../../types"
import { grayscale, primary, secondary } from "../../constants/Colors"
import { SignUpSchema } from "../../auth/schemas"
import { Auth } from "aws-amplify"
import FormView from "../../components/formComponents/FormView"

type Props = StackScreenProps<AuthParamList, "SignUpScreen">;

const SignUpScreen = ({navigation} : Props): React.ReactElement => {
    
	const colorScheme = useColorScheme()

	return (

		<Formik
			initialValues={{
				phoneNumberWithoutCode: "",
				phoneNumber: "",
				countryCode: "MX",
				pass: "",
			}}

			onSubmit={async (v) => {
				try {
					await Auth.signUp({
						username: v.phoneNumber,
						password: v.pass,
						attributes: {
							phone_number: v.phoneNumber
						}
					})
					navigation.navigate("PhoneVerificationScreen", v)
				} catch (err) {
					console.error("Error Signing Up:", err)
					Alert.alert("Error", err.message)
				}
                
			}}
			validationSchema={SignUpSchema}
		>
			{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
				<Screen>
					<FormView>
						<View style={styles.titleContainer}>
							<Text style={{...styles.title, color: colorScheme === "dark" ? primary.default : secondary.default}}>
                            Crea tu cuenta
							</Text>
						</View>
						<PhoneNumberInput 
							value={values.phoneNumberWithoutCode}
							placeholder="Teléfono"
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
							onChangeText={handleChange("pass")}
							onBlur={handleBlur("pass")}
							value={values.pass}
							placeholder="Contraseña"
							error={
								touched.pass && errors.pass ? 
									errors.pass
									:
									undefined
							}
							secureTextEntry={true}
							textContentType="newPassword"
							returnKeyType="next"
						/>
						<Button onPress={handleSubmit} title="Entrar" />

						<TouchableOpacity 
							style={styles.navOptions}
							onPress={() => {
								navigation.navigate("SignInScreen")
							}}
						>
							<Text style={{color: colorScheme === "dark" ? grayscale.offWhite : grayscale.label}}>¿Ya tienes cuenta?</Text>
							<Text style={{color: colorScheme === "dark" ? primary.default : secondary.default}}> Inicia Sesión</Text>
						</TouchableOpacity>

						<TouchableOpacity 
							style={styles.navOptions}
							onPress={() => {
								navigation.navigate("PhoneVerificationScreen")
							}}
						>
							<Text style={{color: colorScheme === "dark" ? grayscale.offWhite : grayscale.label}}>¿Ya te registraste pero cuenta?</Text>
							<Text style={{color: colorScheme === "dark" ? primary.default : secondary.default}}> Ingresa tu código</Text>
						</TouchableOpacity>

					</FormView>
				</Screen>
			)}
		</Formik>
	)
}

export default SignUpScreen

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