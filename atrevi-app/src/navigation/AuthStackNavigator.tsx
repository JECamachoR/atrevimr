import * as React from "react"
import { AuthParamList } from "../../types"
import PhoneVerificationScreen from "../auth/screens/PhoneVerificationScreen"
import SignInScreen from "../auth/screens/SignInScreen"
import SignUpScreen from "../auth/screens/SignUpScreen"
import { createStackNavigator } from "@react-navigation/stack"

const AuthStack = createStackNavigator<AuthParamList>()

const AuthStackNavigator = (): React.ReactElement => {
    
    return (
        <AuthStack.Navigator 
            initialRouteName="SignInScreen">
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
        </AuthStack.Navigator>
    )
}
export default AuthStackNavigator