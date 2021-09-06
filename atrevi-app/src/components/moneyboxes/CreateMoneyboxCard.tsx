import React from "react"
import { StyleSheet } from "react-native"
import { darkMode, grayscale, primary, success } from "../../constants/Colors"
import { Col, Row } from "../Layout"
import { Text, View, useThemeColor } from "../Themed"
import DudeWithCheck from "../../assets/icons/moneyboxes/DudeWithCheck"
import Piggybank from "../../assets/icons/moneyboxes/Piggybank"
import Button from "../Button"
import i18n from "i18n-js"

type Props = {
    goToCreateMoneybox: () => void,
}

const CreateMoneyboxCard = ({goToCreateMoneybox}: Props): React.ReactElement => {
	const backgroundColor = useThemeColor({colorName: "background"})
	const borderColor = useThemeColor({colorName: "line"})
	return (
		<View style={styles.card}
			darkColor={primary.default}
			lightColor={success.dark}
		>
			<Row style={[styles.head, styles.transparent, {flex: 1}]}>
				<Col style={[styles.transparent, {flex: 1}]}>
					<Row style={styles.titleContainer}>
						<Piggybank height={40} width={40} color={backgroundColor} />
						<Text style={[styles.title, {color: backgroundColor}]}>{i18n.t("Moneybox")}</Text>
					</Row>
				</Col>
				<Col style={styles.img}>
					<DudeWithCheck height={78} width={78} />
				</Col>
			</Row>

			<View style={[styles.body, {backgroundColor, borderColor}]}>
				<View style={styles.textContainer}
					lightColor={grayscale.background}
					darkColor={darkMode.textBG}
				>
					<Text style={styles.text}
						lightColor={grayscale.body}
						darkColor={primary.default}
					>
						{i18n.t("Save")} <Text 
							lightColor={success.dark}
							darkColor={primary.default}
						>{i18n.t("without a timeframe")}.</Text>
					</Text>
				</View>
				<Button
					title={i18n.t("Create a Moneybox")}
					onPress={() => {
						goToCreateMoneybox()
					}}
					lightVariant="successDark"
					darkModeVariant="primary"
				/>
			</View>
		</View>
	)
}

export default CreateMoneyboxCard

const styles = StyleSheet.create({
	card: {
		height: 234,
		marginHorizontal: 24,
		borderRadius: 15,
		overflow: "hidden",
		marginTop: 16,
	},
	head: {
		height: 96,
	},
	body: {
		height: 138,
		borderWidth: 1,
		borderRadius: 15,
		paddingBottom: 8,
	},
	title: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 32,
		lineHeight: 48,
		color: "white"
	},
	titleContainer: {
		flex: 1,
		marginLeft: 16,
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0)",
	},
	img: {
		marginRight: 16,
		marginTop: 16,
		width: 94,
		alignItems: "flex-end",
		justifyContent: "flex-end",
		backgroundColor: "rgba(0, 0, 0, 0)",
	},
	textContainer: {
		flex: 1,
		margin: 16,
		marginBottom: 0,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontFamily: "Poppins_400Regular",
		fontSize: 13,
		lineHeight: 19
	},
	transparent: {
		backgroundColor: "rgba(0, 0, 0, 0)"
	},
})