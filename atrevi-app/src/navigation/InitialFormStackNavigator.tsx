import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import ForewordScreen from "../screens/initialForm/ForewordScreen"
import { InitialFormParamList } from "../../types"
import TheBasic from "../screens/initialForm/TheBasics"
import InitialFormContext, { InitialFormGlobalTypes } from "../contexts/InitialFormContext"
import { Formik } from "formik"

const InitialFormStack = createStackNavigator<InitialFormParamList>()

const InitialFormStackNavigator = (): React.ReactElement => {
    return (
        <Formik
            initialValues={{
                id: undefined,
                birthdate: undefined,
                age: undefined,
                gender: undefined,
                ocupation: undefined,
                monthlyIncome: undefined,
                monthlySpend: undefined,
                frequency: undefined,
                yearlySavings: undefined,
                keepsSavings: undefined,
                recordKeepingPlace: undefined,
                selfRating: undefined,
            } as InitialFormGlobalTypes}
            onSubmit={console.log}
        >
            {(v) => {
                console.log(v.values)
                return (
                    <InitialFormContext.Provider value={v}>
                        <InitialFormStack.Navigator
                            screenOptions={{
                                headerShown: false,
                            }}
                        >
                            <InitialFormStack.Screen
                                name="ForewordScreen"
                                component={ForewordScreen}
                            />
                            <InitialFormStack.Screen
                                name="TheBasics"
                                component={TheBasic}
                            />
                        </InitialFormStack.Navigator>
                    </InitialFormContext.Provider>
                )
            }}
        </Formik>
    )
}

export default InitialFormStackNavigator