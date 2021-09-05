/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
    Main: undefined;
    Auth: undefined
    InitialForm: undefined;
    NotFound: undefined;
};
 
export type BottomTabBarParamList = {
    HomeStack: undefined
    SettingsStack: undefined
    SavingsStack: undefined
}

export type HomeStackParamList = {
    Home: undefined
    CreateGoal: undefined
    CreateMoneybox: undefined
}
 
export type SettingsStackParamList = {
    Settings: undefined
}
 
export type AuthParamList = {
    WelcomeScreen: undefined;
    SignInScreen: undefined;
    SignUpScreen: undefined;
    PhoneVerificationScreen: {
        phoneNumber?: string, 
        countryCode?: string, 
        phoneNumberWithoutCode?: string,
        pass?: string
    } | undefined;
};

export type InitialFormParamList = {
    ForewordScreen: undefined,
    TheBasics: undefined,
}
 
export type NavParamList = RootStackParamList & HomeStackParamList
 
export type frequencies = "1day" | "7day" | "14day" | "28day"
export type daysOfTheWeek = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"
export type plan = {rate: number, endDate: Date}