import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import SavingsScreen from "../screens/savings/SavingsScreen"

const SavingsStack = createStackNavigator()

const SavingsStackNavigator = (): React.ReactElement => {
    return (
        <SavingsStack.Navigator>
            <SavingsStack.Screen
                name="Savings"
                component={SavingsScreen}
                options={{
                    headerShown: false,
                }}
            />
        </SavingsStack.Navigator>
    )
}

export default SavingsStackNavigator
