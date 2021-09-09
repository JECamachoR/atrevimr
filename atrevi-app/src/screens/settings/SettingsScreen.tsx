import * as React from "react"
import { Linking, StyleSheet } from "react-native"
import { Screen, View, Text } from "../../components/Themed"
import { S3Image } from "aws-amplify-react-native"
import Button from "../../components/Button"
import Auth from "@aws-amplify/auth"
import Tab from "../../components/settings/Tab"
import { t } from "i18n-js"
import UserContext from "../../contexts/UserContext"
import { StackScreenProps } from "@react-navigation/stack"
import { SettingsStackParamList } from "../../../types"
import { StatusBar } from "expo-status-bar"

type Props = StackScreenProps<SettingsStackParamList, "Settings">

const SettingsScreen = ({ navigation }: Props): React.ReactElement => {

	const user = React.useContext(UserContext)

	return (
		<Screen style={styles.screen}>
			<StatusBar style="dark" />
			<View style={styles.head}>
				<View style={styles.imgContainer}>
					<S3Image imgKey={user.phone} style={{
						height: "100%",
						width: "100%",
					}} />
				</View>
				<Text style={styles.name}>{user.name}</Text>
				<Text style={styles.phone}>{user.phone}</Text>
			</View>

			<View style={styles.buttonsContainer}>
				<Tab onPress={() => navigation.navigate("About")} title={t("About Atrevi")} top />
				<Tab onPress={() => Linking.openURL("https://wa.me/message/BFVTMRGDZYIAC1")} title={t("Support")} />
				<Tab onPress={() => navigation.navigate("ReportIssue")} title={t("Report an issue")} />
				<Tab onPress={() => null} title={t("Feedback")} bottom />
			</View>
			<Button title="Log Out" onPress={() => Auth.signOut()}/>
		</Screen>
	)
}

export default SettingsScreen

const styles = StyleSheet.create({
	screen: {
		paddingBottom: 8,
	},
	head: {
		marginVertical: 16,
		alignItems: "center",
		justifyContent: "center",
	},
	imgContainer: {
		height: 160,
		width: 160,
		borderRadius: 80,
		overflow: "hidden",
	},
	buttonsContainer: {
		flex: 1,
		marginHorizontal: 16,
		alignItems: "center",
		justifyContent: "flex-start"
	},
	name: {
		marginTop: 8,
		fontSize: 32,
	},
	phone: {
		fontSize: 12,
	},
})

