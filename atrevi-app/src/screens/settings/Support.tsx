import * as React from "react"
import { Linking, StyleSheet } from "react-native"
import { Screen, View } from "../../components/Themed"
import Tab from "../../components/settings/Tab"

const Support = (): React.ReactElement => {

	return (
		<Screen>

			<View style={styles.buttonsContainer}>
				<Tab onPress={() => {
					Linking.openURL("https://wa.me/5214611147504")
				}} title="WhatsApp" top />
				<Tab onPress={async () => {
					try {
						Linking.openURL("mailto:javier@atrevi.mx")
					} catch (er) {
						console.error(er)
					}
				}} title="Email" bottom />
			</View>
		</Screen>
	)
}

export default Support

const styles = StyleSheet.create({
	buttonsContainer: {
		flex: 1,
		marginHorizontal: 16,
		alignItems: "center",
		justifyContent: "center"
	},
})

