import * as React from "react"
import { StyleSheet } from "react-native"
import AuthContext from "../../auth/AuthContext"
import { Screen, View } from "../../components/Themed"
import { S3Image } from "aws-amplify-react-native"
import Button from "../../components/Button"
import Auth from "@aws-amplify/auth"
import Tab from "../../components/settings/Tab"

const Account = (): React.ReactElement => {

	const auth = React.useContext(AuthContext)

	return (
		<Screen>
			<View style={styles.head}>
				<View style={styles.imgContainer}>
					<S3Image imgKey={auth.username} style={{
						height: "100%",
						width: "100%",
					}} />
				</View>
			</View>

			<View style={styles.buttonsContainer}>
				<Tab onPress={() => null} title="Name" top />
				<Tab onPress={() => null} title="Pass" bottom />
			</View>
			<Button title="Log Out" onPress={() => Auth.signOut()}/>
		</Screen>
	)
}

export default Account

const styles = StyleSheet.create({
	head: {
		marginVertical: 16,
		alignItems: "center",
		justifyContent: "center",
	},
	imgContainer: {
		height: 120,
		width: 120,
		borderRadius: 60,
		overflow: "hidden",
	},
	buttonsContainer: {
		flex: 1,
		marginHorizontal: 16,
		alignItems: "center",
		justifyContent: "flex-start"
	},
})

