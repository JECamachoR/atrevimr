import * as React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { Text, useThemeColor } from "../../components/Themed"

type Props = {
    top?: boolean,
    bottom?: boolean,
    only?: boolean,
    title: string,
    onPress: () => void,
}

const Tab = ({ top, bottom, only, title, onPress }: Props): React.ReactElement => {

	const body = useThemeColor({colorName: "text"})
	const line = useThemeColor({colorName: "line"})
	const btnBG= useThemeColor({colorName: "inputBackground"})

	return (
		<TouchableOpacity 
			style={[
				styles.btn,
				(bottom || only) && styles.lastBtn,
				(top || only) && styles.firstBtn, 
				{
					borderColor: line,
					backgroundColor: btnBG
				}
			]}
			onPress={onPress}
		>
			<Text style={styles.text}>{title}</Text>
			<MaterialIcons 
				name="keyboard-arrow-right"
				color={body}
				size={30}
			/>
		</TouchableOpacity>
	)
}

export default Tab

const styles = StyleSheet.create({
	btn: {
		height: 44,
		paddingHorizontal: 16,
		alignItems: "center",
		flexDirection: "row",
		borderTopWidth: 1,
		borderBottomWidth: 1,
	},
	firstBtn: {
		borderTopRightRadius: 15,
		borderTopLeftRadius: 15,
		overflow: "hidden",
		borderTopWidth: 0,
	},
	lastBtn: {
		borderBottomRightRadius: 15,
		borderBottomLeftRadius: 15,
		overflow: "hidden",
		borderBottomWidth: 0,
	},
	text: {
		flex: 1
	},
})
