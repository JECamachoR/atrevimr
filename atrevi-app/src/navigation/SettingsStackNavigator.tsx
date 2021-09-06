import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import SettingsScreen from "../screens/settings/SettingsScreen"
import ReportIssue from "../screens/settings/ReportIssue"
import Support from "../screens/settings/Support"
import { SettingsStackParamList } from "../../types"
import About from "../screens/settings/About"
import PrivacyNotice from "../screens/settings/PrivacyNotice"

const SettingsStack = createStackNavigator<SettingsStackParamList>()

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
				name="ReportIssue"
				component={ReportIssue}
			/>
			<SettingsStack.Screen
				name="Support"
				component={Support}
			/>
			<SettingsStack.Screen
				name="About"
				component={About}
			/>
			<SettingsStack.Screen
				name="PrivacyNotice"
				component={PrivacyNotice}
			/>
		</SettingsStack.Navigator>
	)
}

export default SettingsStackNavigator
