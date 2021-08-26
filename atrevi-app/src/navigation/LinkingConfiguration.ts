/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from "expo-linking"

export default {
    prefixes: [Linking.makeUrl("/")],
    config: {
        screens: {
            Main: {
                screens: {
                    HomeScreen: "",
                    CreateGoal: "createGoal",
                    DetailGoal: "meta",
                    UpdateGoal: "updateGoal",
                    ProfileScreen: "profile"
                },
            },
            Auth: {
                screens: {
                    SignInScreen: "signIn",
                    SignUpScreen: "signUp",
                    PhoneVerificationScreen: "verifyPhone",
                }
            },
            NotFound: "*",
        },
    },
}
