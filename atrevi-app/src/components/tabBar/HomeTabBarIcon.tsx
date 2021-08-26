import { MaterialIcons } from "@expo/vector-icons"
import React from "react"
import { View, useThemeColor } from "../Themed"

const HomeTabBarIcon = ({focused}: {focused: boolean}): React.ReactElement => {
    const color = useThemeColor({}, (focused ? "tabIconSelected" : "tabIconDefault"))
    return (
        <View>
            <MaterialIcons name="home" size={30} color={color} />
        </View>
    )
}

export default HomeTabBarIcon