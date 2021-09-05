import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import ForewordScreen from "../screens/initialForm/ForewordScreen"
import { InitialFormParamList } from "../../types"

const InitialFormStack = createStackNavigator<InitialFormParamList>()

const InitialFormStackNavigator = (): React.ReactElement => {
    return (
        <InitialFormStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <InitialFormStack.Screen
                name="ForewordScreen"
                component={ForewordScreen}
            />
        </InitialFormStack.Navigator>
    )
}

export default InitialFormStackNavigator

type b = {
    id: string | null,
    birthdate: string | null,
    age: number | null,
    gender: string | null,
    ocupation: string | null,
    monthlyIncome: number | null,
    monthlySpend: number | null,
    frequency: string | null,
    yearlySavings: number | null,
    keepsSavings: string | null,
    recordKeepingPlace: string | null,
    selfRating: string | null,
}
const i = {
    id: null,
    birthdate: null,
    age: null,
    gender: null,
    ocupation: null,
    monthlyIncome: null,
    monthlySpend: null,
    frequency: null,
    yearlySavings: null,
    keepsSavings: null,
    recordKeepingPlace: null,
    selfRating: null,
}