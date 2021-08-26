import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import SettingsScreen from "../screens/settings/SettingsScreen"

const SettingsStack = createStackNavigator()

const SettingsStackNavigator = (): React.ReactElement => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
            />
        </SettingsStack.Navigator>
    )
}

export default SettingsStackNavigator
