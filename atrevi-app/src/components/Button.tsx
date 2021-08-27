import * as React from "react"
import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native"
import { error, grayscale, primary, secondary, success } from "../constants/Colors"

interface ButtonProps {
    title: string;
    lightVariant?: "primary" | "secondary" | "error" | "success" | "successDark" //| "info" | "default";
    darkModeVariant?: ButtonProps["lightVariant"]
    onPress: () => void;
}

const Button = ({onPress, title, lightVariant, darkModeVariant} : ButtonProps): React.ReactElement => {

    const colorScheme = useColorScheme()

    const colorsForVariant = () => {
        if (lightVariant && colorScheme === "light") {
            return styles[lightVariant]
        } else if (colorScheme === "dark" && darkModeVariant) {
            return styles[darkModeVariant]
        } else {
            switch (colorScheme) {
                case "light":
                    return styles.secondary
                default:
                    return styles.primary
            }
        }
    }

    const colors = colorsForVariant()

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <View 
                style={[styles.row, colors]}>
                <Text style={[styles.common, colors, styles.textBG]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    row: {
        flex: 1,
        height: 48,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 24,
    },
    primary: {
        backgroundColor: primary.default,
        color: "#000",
    },
    secondary: {
        backgroundColor: secondary.default,
        color: primary.lighter,
    },
    error: {
        backgroundColor: error.error,
        color: grayscale.offWhite,
    },
    success: {
        backgroundColor: success.default,
        color: grayscale.offWhite
    },
    successDark: {
        backgroundColor: success.dark,
        color: grayscale.offWhite
    },
    common: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 16,
        lineHeight: 28,
    },
    textBG: {
        backgroundColor: "rgba(0, 0, 0, 0)"
    }
})
