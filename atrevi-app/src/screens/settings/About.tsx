import { StackScreenProps } from "@react-navigation/stack"
import { t } from "i18n-js"
import * as React from "react"
import { StyleSheet } from "react-native"
import { SettingsStackParamList } from "../../../types"
import { HomeLogoDark, HomeLogoLight } from "../../assets/icons"
import Tab from "../../components/settings/Tab"
import { Screen, Text, View } from "../../components/Themed"
import useColorScheme from "../../hooks/useColorScheme"

type Props = StackScreenProps<SettingsStackParamList, "Settings">

const About = ({navigation}: Props): React.ReactElement => {

	const colorScheme = useColorScheme()

	return (
		<Screen style={styles.screen}>
			<View style={styles.logo} >
				{colorScheme === "dark" ? <HomeLogoDark /> : <HomeLogoLight height={30} width={127} /> }
			</View>
			<Text style={styles.version}>Versión 0.1.0</Text>
			<Tab title={t("Privacy notice")} onPress={() => navigation.navigate("PrivacyNotice")} only />
			<Text style={styles.copyright}>© 2021 Atrevi, S.A.P.I. de C.V. - All Rights Reserved</Text>
		</Screen>
	)
}

export default About

const styles = StyleSheet.create({
	screen: {
		alignItems: "center",
		paddingHorizontal: 16,
	},
	logo: {
		transform: [{
			scale: 1.2
		}]
	},
	version: {
		marginVertical: 16,
	},
	copyright: {
		position: "absolute",
		bottom: 8,
		fontSize: 12,
	}
})
