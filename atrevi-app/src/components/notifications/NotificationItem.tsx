import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import * as Notifications from "expo-notifications"

const NotificationItem = (props: Notifications.Notification): React.ReactElement => {
	return (
		<View style={styles.container}>
			<Text
				style={styles.title}
			>{props.request.content.title}</Text>
			<Text>{props.request.content.body}</Text>
		</View>
	)
}

export default NotificationItem

const styles = StyleSheet.create({
	container: {
		paddingVertical: 16,
	},
	title: {
		fontSize: 14,
		fontFamily: "Poppins_600SemiBold",
	}
})
