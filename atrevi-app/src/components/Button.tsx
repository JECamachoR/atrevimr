import * as React from "react"
import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native"
import { error, grayscale, primary, secondary, success } from "../constants/Colors"
import { useThemeColor } from "./Themed"

interface ButtonProps {
    title: string;
    lightVariant?: "primary" | "secondary" | "secondaryDark" | "error" | "success" | "successDark" //| "info" | "default";
    darkModeVariant?: ButtonProps["lightVariant"]
    onPress: () => void;
	inactive?: boolean,
}

const Button = ({onPress, title, lightVariant, darkModeVariant, inactive} : ButtonProps): React.ReactElement => {

	const colorScheme = useColorScheme()
	const inactiveColors = {
		backgroundColor: useThemeColor({colorName: "inputBackground"}),
		color: useThemeColor({colorName: "background"})
	}
	const colorsForVariant = () => {
		if (inactive) {
			return inactiveColors
		}
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
			activeOpacity={!inactive ? 0.2 : 1}
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
		backgroundColor: error.default,
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
	secondaryDark: {
		backgroundColor: secondary.dark,
		color: grayscale.offWhite,
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
