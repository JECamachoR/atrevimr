import { MaterialIcons } from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { t } from "i18n-js"
import React from "react"
import { FlatList, StyleSheet } from "react-native"
import Modal from "../Modal"
import { Text, useThemeColor, View } from "../Themed"
import * as Notifications from "expo-notifications"
// import Button from "../Button"
import NotificationItem from "./NotificationItem"

type Props = {
    visible: boolean,
    hideModal: () => void,
}

const NotificationsModal = ({ hideModal, visible }: Props): React.ReactElement => {

	const [notifications, setNotifications] = React.useState<Notifications.Notification[]>([])

	const ph = useThemeColor({colorName: "placeholderTextColor"})
	const iconColor = useThemeColor({colorName: "background"})
	const line = useThemeColor({colorName: "line"})

	React.useEffect(() => {
		const load = async () => {
			try {
				const notifications = await AsyncStorage.getItem("atrevi-notification-list")
				console.log(notifications)
				setNotifications(JSON.parse(notifications || "[]"))
			} catch (e) {
				console.error(e)
			}
		}
		load()
		const s = Notifications.addNotificationReceivedListener(v => setNotifications(p => [...p, v]))

		return () => s.remove()
	}, [])

	return (
		<Modal
			visible={visible}
			hideModal={hideModal}
			title={t("Notifications")}
		>
			<FlatList
				data={notifications.sort((a, b) => a.date - b.date)}
				renderItem={({item}) => <NotificationItem {...item} />}
				keyExtractor={(v, i) => "" + i + v.date}
				ListEmptyComponent={() => (
					<View style={styles.container}>
						<View style={[styles.circle, {backgroundColor: ph}]}>
							<MaterialIcons name="notifications" size={77} color={iconColor} />
						</View>
						<Text style={styles.text}>
							{t("You don't have any notifications")}
						</Text>
					</View>
				)}
				style={styles.list}
				ItemSeparatorComponent={() => <View style={[styles.separator, {borderColor: line}]} />}
			/>
			{/* <Button
				title="send"
				onPress={() => {
					Notifications.scheduleNotificationAsync({
						content: {
							title: "Title",
							body: "body"
						},
						trigger: {
							seconds: 5
						}
					})
				}}
			/> */}
		</Modal>
	)
}

export default NotificationsModal

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 124,
	},
	circle: {
		alignItems: "center",
		justifyContent: "center",
		height: 127,
		width: 127,
		borderRadius: 65,
	},
	text: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 20,
		lineHeight: 30,
		textAlign: "center",
		margin: 24,
		paddingHorizontal: 24,
	},
	list: {
		marginHorizontal: 24,
	},
	separator: {
		height: 0,
		borderWidth: 1,
		borderColor: "red"
	}
})
