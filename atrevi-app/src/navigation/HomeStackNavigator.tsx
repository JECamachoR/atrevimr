import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/home/HomeScreen"
import { HomeStackParamList } from "../../types"
import CreateGoalScreen from "../screens/goal/CreateGoalScreen"

const HomeStack = createStackNavigator<HomeStackParamList>()

const HomeStackNavigator = (): React.ReactElement => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerShown: false
				}}
			/>
			<HomeStack.Screen
				name="CreateGoal"
				component={CreateGoalScreen}
				options={{
					headerShown: false,
				}}
			/>
		</HomeStack.Navigator>
	)
}

export default HomeStackNavigator
