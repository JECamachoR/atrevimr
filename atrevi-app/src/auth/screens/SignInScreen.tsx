import { StackScreenProps } from "@react-navigation/stack"
import * as React from "react"
import { Alert, StyleSheet, TouchableOpacity, useColorScheme } from "react-native"
import Button from "../../components/Button"
import { KeyboardAvoidingView, Text, View } from "../../components/Themed"
import { AuthParamList } from "../../../types"
import { Formik } from "formik"
import PhoneNumberInput from "../../components/formComponents/PhoneNumberInput"
import TextInput from "../../components/formComponents/TextInput"
import { grayscale, primary, secondary } from "../../constants/Colors"
import { SignInSchema } from "../schemas"
import { Auth } from "aws-amplify"
import Submitting from "../../components/Submitting"
import Constants from "expo-constants"

type Props = StackScreenProps<AuthParamList, "SignUpScreen">;

const SignInScreen = ({ navigation } : Props): React.ReactElement => {

    const colorScheme = useColorScheme()

    const pass = React.useRef<{focus: () => void}>()

    return (
        <View style={styles.container}>

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
                    } catch (err) {
                        Alert.alert(
                            "Error",
                            //@ts-expect-error we expect a graphql error
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

                    return (<>
                        <View style={styles.titleContainer}>
                            <Text style={[styles.title, {color: colorScheme === "dark" ? primary.default : secondary.default}]}>
                            bienvenido,
                            </Text>
                            <Text style={[styles.title, {color: colorScheme === "dark" ? primary.default : secondary.default}]}>
                            te extrañamos
                            </Text>
                        </View>
                        <KeyboardAvoidingView style={styles.formContainer}>
                            <PhoneNumberInput
                                value={values.phoneNumberWithoutCode}
                                placeholder="Teléfono"
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
                                placeholder="Contraseña"
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
                                <Text style={{
                                    color: colorScheme === "dark" ? grayscale.offWhite : grayscale.label,
                                    textDecorationLine: "underline"
                                }}>
                                Olvidé mi contraseña
                                </Text>
                            </TouchableOpacity>

                            <Button onPress={submitForm} title="Entrar" />

                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("SignUpScreen")
                                } }
                                style={styles.registrar}
                            >
                                <Text style={{ color: colorScheme === "dark" ? grayscale.offWhite : grayscale.label }}>¿Aún no tienes cuenta?</Text>
                                <Text style={{ color: colorScheme === "dark" ? primary.default : secondary.default }}> Regístrate</Text>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>
                    </>
                    )
                }}
            </Formik>

        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    formContainer: {
        flex: 3,
        justifyContent: "flex-start",
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 16,
        marginTop: Constants.statusBarHeight,
    },
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
    }
})