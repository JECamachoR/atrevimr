import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import ForewordScreen from "../screens/initialForm/ForewordScreen"
import { InitialFormParamList } from "../../types"
import TheBasic from "../screens/initialForm/TheBasics"
import InitialFormContext, { InitialFormGlobalTypes } from "../contexts/InitialFormContext"
import { Formik } from "formik"
import Spending from "../screens/initialForm/Spending"
import Savings from "../screens/initialForm/Savings"
import PersonalFinance from "../screens/initialForm/PersonalFinance"
import API from "@aws-amplify/api"
import { createQuestions } from "../graphql/mutations"
import { graphqlOperation } from "aws-amplify"
import AuthContext from "../auth/AuthContext"

const InitialFormStack = createStackNavigator<InitialFormParamList>()

const InitialFormStackNavigator = (): React.ReactElement => {

    const auth = React.useContext(AuthContext)

    return (
        <Formik
            initialValues={{
                id: auth.username,
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
            onSubmit={async v => {
                const r = await API.graphql(graphqlOperation(
                    createQuestions,
                    {input: v}
                ))
                console.log(r)
            }}
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
                            <InitialFormStack.Screen
                                name="Spending"
                                component={Spending}
                            />
                            <InitialFormStack.Screen
                                name="Savings"
                                component={Savings}
                            />
                            <InitialFormStack.Screen
                                name="PersonalFinance"
                                component={PersonalFinance}
                            />
                        </InitialFormStack.Navigator>
                    </InitialFormContext.Provider>
                )
            }}
        </Formik>
    )
}

export default InitialFormStackNavigator