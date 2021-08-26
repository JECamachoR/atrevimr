import React from "react"
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

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = (): React.ReactElement => {
    
    return (
        <BottomTab.Navigator
            tabBarOptions={{
                style: {
                    height: 64,
                    paddingVertical: 8
                },
                tabStyle: {
                    height: 48
                }
            }}
        >
            <BottomTab.Screen
                name="HomeStack"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: HomeTabBarIcon,
                    tabBarLabel: HomeTabBarLabel
                }}
            />
            <BottomTab.Screen
                name="SavingsStack"
                component={SavingsStackNavigator}
                options={{
                    tabBarIcon: SavingsTabBarIcon,
                    tabBarLabel: SavingsTabBarLabel
                }}
            />
            <BottomTab.Screen
                name="SettingsStack"
                component={SettingsStackNavigator}
                options={{
                    tabBarIcon: SettingsTabBarIcon,
                    tabBarLabel:  SettingsTabBarLabel
                }}
            />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator
