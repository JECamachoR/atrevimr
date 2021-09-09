import * as React from "react"
import { AuthParamList } from "../../types"
import PhoneVerificationScreen from "../screens/auth/PhoneVerificationScreen"
import SignInScreen from "../screens/auth/SignInScreen"
import SignUpScreen from "../screens/auth/SignUpScreen"
import { createStackNavigator } from "@react-navigation/stack"
import WelcomeScreen from "../screens/auth/WelcomeScreen"
import ForgotPass from "../screens/auth/ForgotPass"
import NewPass from "../screens/auth/NewPass"

const AuthStack = createStackNavigator<AuthParamList>()

const AuthStackNavigator = (): React.ReactElement => {
    
	return (
		<AuthStack.Navigator 
			initialRouteName="WelcomeScreen">
			<AuthStack.Screen
				name="SignInScreen"
				component={SignInScreen}
				options={{headerShown: false}}
			/>
			<AuthStack.Screen
				name="SignUpScreen"
				component={SignUpScreen}
				options={{headerShown: false}}
			/>
			<AuthStack.Screen
				name="PhoneVerificationScreen"
				component={PhoneVerificationScreen}
				options={{headerShown: false}}
			/>
			<AuthStack.Screen
				name="ForgotPass"
				component={ForgotPass}
				options={{headerShown: false}}
			/>
			<AuthStack.Screen
				name="NewPass"
				component={NewPass}
				options={{headerShown: false}}
			/>
			<AuthStack.Screen
				name="WelcomeScreen"
				component={WelcomeScreen}
				options={{headerShown: false}}
			/>
		</AuthStack.Navigator>
	)
}
export default AuthStackNavigator