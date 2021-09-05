import * as React from "react"
import {
	StyleSheet,
	View
} from "react-native"
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen"
import { Picker } from "@react-native-picker/picker"
import { t } from "i18n-js"

type Props = {
    value: string | undefined;
    handleChange: (v: string | undefined) => void
}

export default function AccountCard({ value, handleChange }: Props): React.ReactElement {

	return (
		<View style={styles.container}>
			<Picker
				mode="dropdown"
				selectedValue={value}
				onValueChange={(itemValue) => handleChange(itemValue)}
			>
				<Picker.Item label={t("Choose one")} value={undefined} />
				<Picker.Item label={t("Bank")} value="Bank" />
				<Picker.Item label={t("HBL")} value="HBL" />
			</Picker>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: wp("90%"),
		height: hp("7%"),
		borderRadius: 100,
		backgroundColor: "#fff",
		paddingHorizontal: "5%",
		justifyContent: "center",
	},
})
