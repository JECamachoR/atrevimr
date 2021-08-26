import * as React from "react"
import { StyleSheet } from "react-native"
import { Text, View, useThemeColor } from "../Themed"

interface LabelProps {
    label?: string;
    lightColor?: string;
    darkColor?: string;
}

const InputLabel = ({ label, lightColor, darkColor} : LabelProps): React.ReactElement => {
    
	const color = useThemeColor({ light: lightColor, dark: darkColor }, "inputLabel")

	if (!label) {
		return <></>
	}
	return (
		<View style={styles.container}>
			<Text style={[{ color }, styles.label]}>{label}</Text>
		</View>
	)
}

export default InputLabel

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 16,
		marginTop: 8,
	},
	label: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 20,
		lineHeight: 30,
	}
})
