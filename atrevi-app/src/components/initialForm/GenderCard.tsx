import * as React from "react"
import { StyleSheet, View,  Platform } from "react-native"
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

export default function GenderCard({ value, setValue }: Props): React.ReactElement {

	return (
		<View style={styles.container}>
			<Picker
				selectedValue={value}
				onValueChange={(itemValue) => setValue(itemValue)}
			>
				<Picker.Item label={t("Gender")} value={undefined} />
				<Picker.Item label={t("Man")} value="man" />
				<Picker.Item label={t("Woman")} value="woman" />
				<Picker.Item label={t("Other")} value="other" />
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
