import React from "react"
import { StyleSheet } from "react-native"
import { Text, useThemeColor } from "../Themed"
import i18n from "i18n-js"

const SettingsTabBarLabel = ({focused}: {focused: boolean}): React.ReactElement => {
    const color = useThemeColor({}, (focused ? "tabIconSelected" : "tabIconDefault"))
    return <Text style={[styles.text, {color}]}>{i18n.t("Settings")}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 12,
        lineHeight: 18
    }
})

export default SettingsTabBarLabel