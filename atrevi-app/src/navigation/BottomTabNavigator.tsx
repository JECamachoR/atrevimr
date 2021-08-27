import * as React from "react"
import { StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStackNavigator from "./HomeStackNavigator"
import SavingsStackNavigator from "./SavingsStackNavigator"
import SettingsStackNavigator from "./SettingsStackNavigator"
import HomeTabBarIcon from "../components/tabBar/HomeTabBarIcon"
import SavingsTabBarIcon from "../components/tabBar/SavingsTabBarIcon"
import SettingsTabBarIcon from "../components/tabBar/SettingsTabBarIcon"
import HomeTabBarLabel from "../components/tabBar/HomeTabBarLabel"
import SavingsTabBarLabel from "../components/tabBar/SavingsTabBarLabel"
import SettingsTabBarLabel from "../components/tabBar/SettingsTabBarLabel"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = (): React.ReactElement => {
    const insets = useSafeAreaInsets()

    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: [styles.tabBarStyle, {
                    paddingBottom: 8 + insets.bottom,
                    height: 64 + insets.bottom
                }],
                tabBarHideOnKeyboard: true,
                tabBarLabelPosition: "below-icon"
            }}
        >
            <BottomTab.Screen
                name="HomeStack"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: HomeTabBarIcon,
                    tabBarLabel: HomeTabBarLabel,
                }}
                />
            <BottomTab.Screen
                name="SavingsStack"
                component={SavingsStackNavigator}
                options={{
                    tabBarIcon: SavingsTabBarIcon,
                    tabBarLabel: SavingsTabBarLabel,
                }}
                />
            <BottomTab.Screen
                name="SettingsStack"
                component={SettingsStackNavigator}
                options={{
                    tabBarIcon: SettingsTabBarIcon,
                    tabBarLabel:  SettingsTabBarLabel,
                }}
            />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 64,
        paddingTop: 8,
        paddingBottom: 8,
    }
})
