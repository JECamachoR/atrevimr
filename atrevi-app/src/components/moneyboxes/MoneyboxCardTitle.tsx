import * as React from "react"
import { StyleSheet } from "react-native"
import { Fund } from "../../API"
import { Text, View, ViewProps, useThemeColor } from "../../components/Themed"

interface MoneyboxCardTitleProps {
    moneybox: Fund; 
    containerStyle?: ViewProps["style"];
}

const MoneyboxCardTitle = ({moneybox, containerStyle}: MoneyboxCardTitleProps): React.ReactElement => {

	const linkColor = useThemeColor({colorName: "link"})
	const backgroundColor = useThemeColor({colorName: "background"})
	const borderColor = useThemeColor({colorName: "line"})
    
	return (
		<View style={[styles.goalText, {backgroundColor, borderColor}, containerStyle]}>
			<View style={styles.transparent}>
				<Text style={[styles.name, {color: linkColor}]}>
					{moneybox.name}
				</Text>
			</View>
			<View style={styles.transparent}>
				<Text style={[styles.date, {color: linkColor}]}>
					{}
				</Text>
			</View>
		</View>
	)
}

export default MoneyboxCardTitle

const styles = StyleSheet.create({
	name: {
		fontFamily: "Poppins_800ExtraBold",
		fontSize: 20,
		lineHeight: 30,
	},
	numbers: {
		marginTop: 8,
	},
	date: {
		fontFamily: "Poppins_500Medium",
		fontSize: 14,
		lineHeight: 28,
	},
	goalAmmount: {
		fontFamily: "Poppins_400Regular",
		fontSize: 16,
		lineHeight: 28,
	},
	goalText: {
		height: 92,
		borderRadius: 16,
		padding: 16,
		borderWidth: 1,
	},
	transparent: {
		backgroundColor: "#00000000",
	}
})
