import * as React from "react"
import { TextInput as DefaultTextInput, TextInputProps as DefaultTextInputProps, StyleSheet, View, useColorScheme } from "react-native"
import Colors from "../../constants/Colors"
import { Text } from "../Themed"
import InputLabel from "./InputLabel"

interface TextInputProps {
    label?: string;
    error?: string;
    passRef?: any;
}

const TextInput = ({label, error, passRef, style, ...otherProps} : TextInputProps & DefaultTextInputProps): React.ReactElement => {
	const colorScheme = useColorScheme()

	return (
		<>
			<InputLabel label={label} />
			<View style={[
				styles.container,
			]}>
				<DefaultTextInput
					{...otherProps}
					style={[
						(colorScheme === "dark" ? styles.darkTheme : styles.lightTheme), 
						styles.common,
						(error ? { borderColor: "red" } : {}),
						style
					]}
					placeholderTextColor={
						colorScheme === "dark" ?
							Colors.dark.placeholderTextColor
							:
							Colors.light.placeholderTextColor
					}
					ref={passRef}
				/>
			</View>
			<View style={styles.container}>
				{error ? <Text style={styles.errorText}>{error}</Text> : <></>}
			</View>
		</>
	)
}

export default TextInput

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	common: {
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-start",
		paddingHorizontal: 16,
		marginHorizontal: 16,
		marginTop: 8,
		marginBottom: 16,
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 40,
		fontFamily: "Poppins_400Regular",
		fontSize: 20,
		lineHeight: 30,
		paddingVertical: 8,
	},
	darkTheme: {
		backgroundColor: Colors.dark.inputBackground,
		borderColor: Colors.dark.line,
		color: Colors.dark.inputText
	},
	lightTheme: {
		backgroundColor: Colors.light.inputBackground,
		borderColor: Colors.light.line,
		color: Colors.light.inputText,
	},
	label: {
		flex: 1,
		alignItems: "flex-start",
		marginHorizontal: 16,
		fontSize: 16,
		marginTop: 8,
		lineHeight: 24,
	},
	errorText: {
		marginHorizontal: 16,
		marginBottom: 8,
		color: "red",
	}
})
