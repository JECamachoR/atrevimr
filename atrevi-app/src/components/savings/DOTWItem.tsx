import * as React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { daysOfTheWeek } from "../../../types"
import { Text, useThemeColor, View } from "../Themed"

type Props = {
    label: string,
    selected: boolean,
    value: daysOfTheWeek,
    select: (v: daysOfTheWeek) => void
}

const DOTWItem = ({label, value, selected, select}: Props): React.ReactElement => {

	const bg = useThemeColor({colorName: "placeholderTextColor"})
	const selectedColor = useThemeColor({colorName: "link"})
	const body = useThemeColor({colorName: "background"})

	return (
		<TouchableOpacity
			onPress={() => select(value)}
			style={[
				styles.circle,
				{backgroundColor: selected ? selectedColor : bg}
			]}
		>
			<View style={{backgroundColor: "#00000000"}}>
				<Text style={[{color: body}]}>
					{label}
				</Text>
			</View>
		</TouchableOpacity>
	)
}

export default DOTWItem

const styles = StyleSheet.create({
	circle: {
		height: 30,
		width: 30,
		borderRadius: 15,
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center"
	}
})
