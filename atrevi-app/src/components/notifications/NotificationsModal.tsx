import { MaterialIcons } from "@expo/vector-icons"
import { t } from "i18n-js"
import React from "react"
import { StyleSheet } from "react-native"
import Modal from "../Modal"
import { Text, useThemeColor, View } from "../Themed"

type Props = {
    visible: boolean,
    hideModal: () => void,
}

const NotificationsModal = ({ hideModal, visible }: Props): React.ReactElement => {

	const ph = useThemeColor({colorName: "placeholderTextColor"})
	const iconColor = useThemeColor({colorName: "background"})
	return (
		<Modal
			visible={visible}
			hideModal={hideModal}
			title={t("Notifications")}
		>
			<View style={styles.container}>
				<View style={[styles.circle, {backgroundColor: ph}]}>
					<MaterialIcons name="notifications" size={77} color={iconColor} />
				</View>
				<Text style={styles.text}>
					{t("You don't have any notifications")}
				</Text>
			</View>
		</Modal>
	)
}

export default NotificationsModal

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
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
	}
})
