import { StackScreenProps } from "@react-navigation/stack"
import * as React from "react"
import { Alert, StyleSheet, TouchableOpacity } from "react-native"
import Button from "../../components/Button"
import { Text, View, Screen } from "../../components/Themed"
import { AuthParamList } from "../../../types"
import { Formik } from "formik"
import PhoneNumberInput from "../../components/formComponents/PhoneNumberInput"
import TextInput from "../../components/formComponents/TextInput"
import { grayscale, primary, secondary } from "../../constants/Colors"
import { SignInSchema } from "../../schemas"
import { Auth } from "aws-amplify"
import Submitting from "../../components/Submitting"
import FormView from "../../components/formComponents/FormView"
import { t } from "i18n-js"

type Props = StackScreenProps<AuthParamList, "SignUpScreen">;

const SignInScreen = ({ navigation } : Props): React.ReactElement => {

	const pass = React.useRef<{focus: () => void}>()

	return (
        
		<Screen>
			<FormView>
				<Formik
					initialValues={{
						phoneNumberWithoutCode: "",
						phoneNumber: "",
						pass: "",
					}}
					onSubmit={async (v) => {
						try {
							await Auth.signIn({
								username: v.phoneNumber,
								password: v.pass
							})
						} catch (err: any) {
							Alert.alert(
								"Error",
								err.message === "Incorrect username or password." ? "Número o contraseña incorrecta." : err.message
							)
						}
					}}
					validationSchema={SignInSchema}
				>
					{({ handleChange, handleBlur, submitForm, values, errors, touched, isSubmitting }) => {

						if (isSubmitting){
							return <Submitting />
						}

						return (
							<>
								<View style={styles.titleContainer}>
									<Text 
										style={styles.title}
										darkColor={primary.default}
										lightColor={secondary.default}
									>
                                    {t("welcome")},
									</Text>
									<Text
										style={styles.title}
										darkColor={primary.default}
										lightColor={secondary.default}
									>
                                    {t("we've missed you")}
									</Text>
								</View>
								<PhoneNumberInput
									value={values.phoneNumberWithoutCode}
									placeholder={t("Phone")}
									error={
										touched.phoneNumber && errors.phoneNumber ? 
											errors.phoneNumber
											:
											undefined
									}
									defaultCode="MX"
									onChangeFormattedText={handleChange("phoneNumber")}
									onChangeText={handleChange("phoneNumberWithoutCode")}
									onBlur={handleBlur("phoneNumberWithoutCode")}
									returnKeyType="next"
									onSubmitEditing={() => pass.current?.focus()}
								/>

								<TextInput
									onChangeText={handleChange("pass")}
									onBlur={handleBlur("pass")}
									value={values.pass}
									placeholder={t("Password")}
									error={
										touched.pass && errors.pass ? 
											errors.pass
											:
											undefined
									}
									secureTextEntry={true}
									textContentType="password"
									returnKeyType="send"
									onSubmitEditing={submitForm}
									passRef={pass}
								/>

								<TouchableOpacity
									style={styles.forgotPass}
									onPress={() => alert("Jajaja pos nimodo")}
								>
									<Text 
										style={{textDecorationLine: "underline"}}
										darkColor={grayscale.offWhite}
										lightColor={grayscale.label}
									>
										{t("Forgot your password?")}
									</Text>
								</TouchableOpacity>

								<Button onPress={submitForm} title={t("Submit")} />

								<TouchableOpacity
									onPress={() => {
										navigation.navigate("SignUpScreen")
									} }
									style={styles.registrar}
								>
									<Text 
										darkColor={grayscale.offWhite} 
										lightColor={grayscale.label}
									>{t("Not signed up yet?")}</Text>
									<Text
										darkColor={primary.default} 
										lightColor={secondary.default}
									> {t("Sign Up")}</Text>
								</TouchableOpacity>
							</>
						)
					}}
				</Formik>
			</FormView>
		</Screen>

	)
}

export default SignInScreen

const styles = StyleSheet.create({
	forgotPass: {
		flexDirection: "row",
		justifyContent: "flex-end",
		marginHorizontal: 16,
		fontSize: 12,
		lineHeight: 18,
	},
	title: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 32,
		lineHeight: 48,
	},
	registrar: {
		flexDirection: "row",
		justifyContent: "center",
	},
	titleContainer: {
		margin: 16,
	}
})