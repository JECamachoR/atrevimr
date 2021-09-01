import React from "react"
import { Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native"
import RoundButton from "./RoundButton"
import i18n from "i18n-js"
import { Row } from "../Layout"
import { Text, useThemeColor, View } from "../Themed"
import Bullseye from "../../assets/icons/goals/Bullseye"
import Piggybank from "../../assets/icons/moneyboxes/Piggybank"
import { darkMode, grayscale, primary, secondary, success } from "../../constants/Colors"
import { useSafeAreaInsets } from "react-native-safe-area-context"


interface Props {
    visible: boolean;
    hideModal: () => void;
    goToCreateGoal: () => void,
    goToCreateMoneybox: () => void,
}

const PlusButtonModal = ({hideModal, goToCreateGoal, goToCreateMoneybox, ...props}: Props): React.ReactElement => {
	const insets = useSafeAreaInsets()
	const goalBG = useThemeColor({colors: {
		light: secondary.default,
		dark: primary.default
	}})
	const mbBG = useThemeColor({colors: {
		light: success.dark,
		dark: primary.default
	}})
	const color = useThemeColor({colors: {
		light: grayscale.offWhite,
		dark: darkMode.background
	}})
	return (
		<Modal
			{...props}
			animationType="fade"
			transparent={true}
		>
			<TouchableOpacity 
				style={[styles.screenBG, {backgroundColor: color + "80"}]} 
				onPress={hideModal}
				activeOpacity={1}
			>
				<TouchableWithoutFeedback>
					<Row style={styles.row}>
						<TouchableOpacity onPress={() => {
							hideModal()
							goToCreateGoal()
						}}>
							<View style={[styles.textContainer, {backgroundColor: goalBG}]}>
								<Text style={[styles.btnText, {color}]}>{i18n.t("Create a Goal")}</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => {
							hideModal()
							goToCreateGoal()
						}}>
							<View style={[styles.iconContainer, {backgroundColor: goalBG}]}>
								<Bullseye color={color} />
							</View>
						</TouchableOpacity>
					</Row>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback>
					<Row style={styles.row}>
						<TouchableOpacity onPress={() => {
							hideModal()
							goToCreateMoneybox()
						}}>
							<View style={[styles.textContainer, {backgroundColor: mbBG}]}>
								<Text style={[styles.btnText, {color}]}>{i18n.t("Create a Moneybox")}</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => {
							hideModal()
							goToCreateMoneybox()
						}}>
							<View style={[styles.iconContainer, {backgroundColor: mbBG}]}>
								<Piggybank color={color} />
							</View>
						</TouchableOpacity>
					</Row>
				</TouchableWithoutFeedback>
				<RoundButton variant="times" 
					onPress={hideModal} style={[
						styles.roundButtonPosition, 
						{marginBottom: 80 + insets.bottom}
					]} />
			</TouchableOpacity>
		</Modal>
	)
}

export default PlusButtonModal

const styles = StyleSheet.create({
	screenBG: {
		flex: 1,
		alignItems: "flex-end",
		justifyContent: "flex-end",
	},
	roundButtonPosition: {
		margin: 16,
	},
	row: {
		backgroundColor: "#FFFFFF00",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 8,
	},
	iconContainer: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 21,
		marginLeft: 16,
		alignItems: "center",
		justifyContent: "center",
	},
	textContainer: {
		height: 32,
		width: 164,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center",
	},
	btnText: {
		fontFamily: "Poppins_600SemiBold",
		height: 24,
	}
})
