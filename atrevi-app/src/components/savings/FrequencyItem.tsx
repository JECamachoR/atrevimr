import * as React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { frequencies } from "../../../types"
import { Row } from "../Layout"
import { useThemeColor, View, Text } from "../Themed"

type Props = {
    selected: boolean,
    value: frequencies,
    label: string,
    handleClick: (f: frequencies) => void
}

const FrequencyItem = ({ label, selected, value, handleClick }: Props): React.ReactElement => {

	const inputBG = useThemeColor({colorName: "inputBackground"})
	const link = useThemeColor({colorName: "link"})
	const ph = useThemeColor({colorName: "placeholderTextColor"})

	return (
		<TouchableOpacity onPress={() => handleClick(value)}>
			<Row style={[styles.thing, {backgroundColor: inputBG}]}>
				<View
					style={[
						styles.circleThing,
						{backgroundColor: selected ? link : ph}
					]}
				></View>
				<Text style={[styles.text, {color: selected ? link : ph}]}>{label}</Text>
			</Row>
		</TouchableOpacity>
	)
}

export default FrequencyItem

const styles = StyleSheet.create({
	thing: {
		height: 46,
		marginTop: 8,
		borderRadius: 15,
		overflow: "hidden",
		paddingHorizontal: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	circleThing: {
		height:22,
		width: 22,
		borderRadius: 11,
		marginRight: 16,
	},
	text: {
		fontSize: 18,
	}
})
