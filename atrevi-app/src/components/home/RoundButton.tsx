import { FontAwesome5 } from "@expo/vector-icons"
import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { darkMode, grayscale, primary, secondary } from "../../constants/Colors"
import { useThemeColor } from "../Themed"

type Props = {
    variant: "plus" | "times",
    
} & TouchableOpacity["props"]

const RoundButton = ({variant, style, ...props}: Props): React.ReactElement => {
    const bg = useThemeColor({colors: {
        light: secondary.default,
        dark: primary.default
    }})    
    const color = useThemeColor({colors: {
        light: grayscale.offWhite,
        dark: darkMode.background
    }})
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: bg}, style]} {...props} >
            <FontAwesome5 name={variant} size={24} color={color} />
        </TouchableOpacity>
    )
}

export default RoundButton

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    }
})
