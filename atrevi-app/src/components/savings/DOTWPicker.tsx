import { t } from "i18n-js"
import * as React from "react"
import { StyleSheet } from "react-native"
import { daysOfTheWeek } from "../../../types"
import { darkMode, grayscale } from "../../constants/Colors"
import { View } from "../Themed"
import DOTWItem from "./DOTWItem"

type Props = {
    selected: daysOfTheWeek,
    onSelect: (d: daysOfTheWeek) => void
}

const DOTWPicker = ({ selected, onSelect }: Props): React.ReactElement => {

	const data = [
		{label: t("DOTWinitialSunday"), value: "sunday"},
		{label: t("DOTWinitialMonday"), value: "monday"},
		{label: t("DOTWinitialTuesday"), value: "tuesday"},
		{label: t("DOTWinitialWednesday"), value: "wednesday"},
		{label: t("DOTWinitialThursday"), value: "thursday"},
		{label: t("DOTWinitialFriday"), value: "friday"},
		{label: t("DOTWinitialSaturday"), value: "saturday"},
	] as {label: string, value: daysOfTheWeek}[]

	return (
		<View
			darkColor={darkMode.inputBackground}
			lightColor={grayscale.inputBackground}
			style={styles.dotwRow}
		>
			{data.map(v => (
				<View 
					key={v.value} 
					style={styles.spacer}
				>
					<DOTWItem 
						selected={v.value === selected}
						select={onSelect}
						{...v} 
					/>
				</View>
			))}
		</View>
	)
}

export default DOTWPicker

const styles = StyleSheet.create({
	dotwRow: {
		height: 46,
		marginTop: 16,
		marginBottom: 32,
		borderRadius: 15,
		overflow: "hidden",
		paddingHorizontal: 20,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	spacer: {
		flex: 1,
		backgroundColor: "#00000000"
	}
})
