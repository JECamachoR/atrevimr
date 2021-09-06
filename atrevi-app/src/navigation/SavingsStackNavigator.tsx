import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import SavingsScreen from "../screens/savings/SavingsScreen"
import { SavingsStackParamList } from "../../types"
import UpdateSavings from "../screens/savings/UpdateSavings"

const SavingsStack = createStackNavigator<SavingsStackParamList>()

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
			<SavingsStack.Screen
				name="UpdateSavings"
				component={UpdateSavings}
				options={{
					headerShown: true,
					title: "Savings Settings"
				}}
			/>
		</SavingsStack.Navigator>
	)
}

export default SavingsStackNavigator
