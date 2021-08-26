import { StackScreenProps } from "@react-navigation/stack"
import { Formik } from "formik"
import * as React from "react"
import { Alert, KeyboardAvoidingView, StatusBar, StyleSheet, TouchableOpacity, useColorScheme } from "react-native"
import Button from "../../components/Button"
import PhoneNumberInput from "../../components/formComponents/PhoneNumberInput"
import { Text, View } from "../../components/Themed"
import TextInput from "../../components/formComponents/TextInput"
import { AuthParamList } from "../../../types"
import { grayscale, primary, secondary } from "../../constants/Colors"
import { SignUpSchema } from "../schemas"
import { Auth } from "aws-amplify"

type Props = StackScreenProps<AuthParamList, "SignUpScreen">;

const SignUpScreen = ({navigation} : Props): React.ReactElement => {
    
    const colorScheme = useColorScheme()

    return (
        <View style={styles.container}>

            <Formik
                initialValues={{
                    phoneNumberWithoutCode: "",
                    phoneNumber: "",
                    countryCode: "MX",
                    pass: "",
                    passConfirmation: "",
                    firstName: "",
                    paternalLastName: "",
                    maternalLastName: "",
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
                        //@ts-expect-error we expect a graphql error
                        Alert.alert("Error", err.message)
                    }
                
                }}
                validationSchema={SignUpSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <>
                        <View style={styles.titleContainer}>
                            <Text style={{...styles.title, color: colorScheme === "dark" ? primary.default : secondary.default}}>
                            Crea tu cuenta
                            </Text>
                        </View>
                        <KeyboardAvoidingView style={styles.formContainer}>
                            <View>
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
                            </View>

                            <View> 
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
                            </View>
                        
                        
                            <View> 
                                <TextInput
                                    onChangeText={handleChange("passConfirmation")}
                                    onBlur={handleBlur("passConfirmation")}
                                    value={values.passConfirmation}
                                    placeholder="Confirma la Contraseña"
                                    secureTextEntry={true}
                                    textContentType="password"
                                    returnKeyType="send"
                                    error={
                                        touched.passConfirmation && errors.passConfirmation ? 
                                            errors.passConfirmation
                                            :
                                            undefined
                                    }
                                />
                            </View>

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

                        </KeyboardAvoidingView>
                    </>
                )}
            </Formik>
        </View>
    )
}

export default SignUpScreen

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
        marginTop: StatusBar.currentHeight,
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
