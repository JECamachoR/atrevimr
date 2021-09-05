import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import SettingsScreen from "../screens/settings/SettingsScreen"
import Account from "../screens/settings/Account"

const SettingsStack = createStackNavigator()

const SettingsStackNavigator = (): React.ReactElement => {
	return (
		<SettingsStack.Navigator
		>
			<SettingsStack.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					headerShown: false
				}}
			/>
			<SettingsStack.Screen
				name="Account"
				component={Account}
			/>
		</SettingsStack.Navigator>
	)
}

export default SettingsStackNavigator
