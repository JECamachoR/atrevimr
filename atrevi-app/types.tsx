/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
    Main: undefined;
    Auth: undefined
    InitialForm: undefined;
    NotFound: undefined;
    Web: {
        url: string
    }
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

export type SavingsStackParamList = {
    Savings: undefined,
    UpdateSavings: undefined
} & NavParamList

export type SettingsStackParamList = {
    Settings: undefined,
    ReportIssue: undefined,
    Support: undefined,
    About: undefined,
    PrivacyNotice: undefined,
} & NavParamList
 
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
    ForgotPass: undefined;
    NewPass: undefined;
}

export type InitialFormParamList = {
    ForewordScreen: undefined;
    TheBasics: undefined;
    Spending: undefined;
    Savings: undefined;
    PersonalFinance: undefined;
}
 
export type NavParamList = RootStackParamList & HomeStackParamList