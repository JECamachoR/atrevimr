import { MaterialIcons } from "@expo/vector-icons"
import React from "react"
import { StyleSheet } from "react-native"
import { View, useThemeColor } from "../Themed"

const HomeTabBarIcon = ({focused}: {focused: boolean}): React.ReactElement => {
    const color = useThemeColor({colorName: (focused ? "tabIconSelected" : "tabIconDefault")})
    return (
        <View style={styles.bg}>
            <MaterialIcons name="home" size={30} color={color} />
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "#FFFFFF00"
    }
})

export default HomeTabBarIcon