import { MaterialIcons } from "@expo/vector-icons"
import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import { formatNumber } from "react-native-currency-input"
import { Transaction } from "../../API"
import { Bullseye } from "../../assets/icons/goals"
import { Piggybank } from "../../assets/icons/moneyboxes"
import { darkMode, error, grayscale, secondary, success } from "../../constants/Colors"
import { Row } from "../Layout"
import { useThemeColor } from "../Themed"

export type Props = {
    transaction: Transaction
}

type IconProps = {
    transaction: Transaction
}
const Icon = ({ transaction }: IconProps) => {
	if (transaction.ammount <= 0) return <MaterialIcons name="money-off" size={22} color={error.default} />
	switch(transaction.fund?.name) {
	case "goals":
		return <View style={{backgroundColor: "#00000000", transform: [{scale: 0.55}]}}><Bullseye color={secondary.default} /></View>
	default:
		return <View style={{backgroundColor: "#00000000", transform: [{scale: 0.55}]}}><Piggybank color={success.dark} /></View>
	}
}

const TransactionListItem = ({ transaction }: Props): React.ReactElement => {

	const backgroundColor = transaction.ammount <= 0 ? 
		error.default+"0F" : transaction.fund?.name === "goals" ? 
			secondary.default+"0F" : success.dark+"0F"

	const subtitleColor = useThemeColor({colorName: "placeholderTextColor"})
	const line = useThemeColor({colorName: "line"})
	const color = useThemeColor({colorName: "text"})

	return (
		<Row
			lightColor={grayscale.offWhite}
			darkColor={darkMode.background}
			style={[styles.container, {borderBottomColor: line}]}
		>
			<View style={[[styles.left, {backgroundColor}]]}>
				<Icon transaction={transaction} />
			</View>
			<View style={styles.center}>
				<Text style={[styles.concept, {color}]}>{transaction.concept}</Text>
				<Text style={[styles.subtitle, {color: subtitleColor}]}>{transaction.fund?.name || ""}</Text>
			</View>
			<View style={styles.right}>
				<Text style={transaction.ammount >= 0 ? styles.positive : styles.negative}>{formatNumber(transaction.ammount, {
					delimiter: ",",
					precision: 2,
					prefix: "$",
					separator: ".",
					showPositiveSign: true,
					signPosition: "beforePrefix",
				})}</Text>
				<Text style={[styles.subtitle, {color: subtitleColor}]}>{transaction.createdAt}</Text>
			</View>
		</Row>
	)
}

export default TransactionListItem

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 16,
		marginBottom: 0,
		paddingBottom: 16,
		alignItems: "center",
		// borderBottomWidth: 1,
	},
	left: {
		height: 38,
		width: 38,
		borderRadius: 10,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
	},
	center: {
		flex: 2,
		paddingHorizontal: 8,
	},
	right: {
		flex: 1,
		alignItems: "flex-end"
	},
	positive: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 14,
		color: success.dark,
	},
	negative: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 14,
		color: error.default,
	},
	subtitle: {
		fontSize: 14,
	},
	concept: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 14,
	},
})