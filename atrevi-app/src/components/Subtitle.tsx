import * as React from "react"
import { StyleSheet, TextStyle } from "react-native"
import { Text, useThemeColor } from "./Themed"

interface Props {
    style?: TextStyle;
    children?: string;
}

const Subtitle = ({style, children} : Props): React.ReactElement => {
    
	const color = useThemeColor({}, "subtitle")

	return <Text style={[styles.text, {color}, style]}>{children}</Text>
}

export default Subtitle

const styles = StyleSheet.create({
	text: {
		alignItems: "flex-start",
		marginHorizontal: 16,
		fontFamily: "Poppins_600SemiBold",
		fontSize: 20,
		lineHeight: 30,
	}
})
