import * as React from "react"
import { StyleSheet, View,Platform } from "react-native"
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen"
import { Picker } from "@react-native-picker/picker"
import { t } from "i18n-js"

type Props = {
  value: string | undefined,
  setValue: (v: string | undefined) => void
}

export default function OccupationCard({ value, setValue }: Props): React.ReactElement {

	return (
		<View style={styles.container}>
			<Picker
				selectedValue={value}
				onValueChange={(itemValue) => setValue(itemValue)}
				mode="dialog"
			>
				<Picker.Item label={t("Occupation")} value={undefined} />
				<Picker.Item label={t("Student")} value="Student" />
				<Picker.Item label={t("Employee")} value="Employee" />
				<Picker.Item label={t("Study and work")} value="Study and work" />
				<Picker.Item label={t("Own business")} value="Own business" />
				<Picker.Item label={t("Freelance")} value="Freelance" />
				<Picker.Item label={t("Without Ocupation")} value="Without Ocupation" />
			</Picker>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: wp("90%"),
		height: hp("8%"),
		justifyContent: "center",
		borderBottomWidth: 2,
		borderBottomColor: "#e5e5e5",
		overflow:Platform.OS=="ios"? "hidden":"visible",
	},
})
