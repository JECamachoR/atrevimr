import { MaterialIcons } from "@expo/vector-icons"
import { StyleSheet } from "react-native"
import React from "react"
import { View, useThemeColor } from "../Themed"

const SettingsTabBarIcon = ({focused}: {focused: boolean}): React.ReactElement => {
    const color = useThemeColor({colorName: (focused ? "tabIconSelected" : "tabIconDefault")})
    return (
        <View style={styles.bg}>
            <MaterialIcons 
                name="settings"
                size={30} 
                color={color}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "#FFFFFF00"
    }
})

export default SettingsTabBarIcon