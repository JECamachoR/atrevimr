import { t } from "i18n-js"
import * as React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

export default function CarrouselItem1(): React.ReactElement {

	return (
		<View style={styles.container}>
			<View style={styles.PicWrapper}>
				<Image
					source={require("../../assets/images/carrousel/Saly.png")}
					style={{
						height: "100%",
						width: "100%",
					}}
					resizeMode="contain"
				/>
			</View>
			<View style={styles.TextWrapper}>
				<Text style={styles.title}>{t("Reach your goals")}</Text>
				<Text style={styles.subtitle}>{t("Lorem ipsum dolor")}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
	},
	PicWrapper: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		flexWrap: "wrap",
	},
	TextWrapper: {
		alignItems: "center",
		justifyContent: "center",
		paddingBottom: 16
	},
	title: {
		fontSize: 33,
		fontFamily: "Poppins_600SemiBold",
		lineHeight: 50,
	},
	subtitle: {
		lineHeight: 21,
	},
	ProgressBarWrapper: {
		alignItems: "center",
		justifyContent: "center",
	},
	ProgressBarContainer: {
		height: "20%",
		width: "30%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	ProgressBarBody: {
		height: "100%",
		width: "25%",
		backgroundColor: "#fff",
		borderRadius: 30,
	},
	CreateBtnWrapper: {
		alignItems: "center",
		justifyContent: "center",
	},
	LoginTxtWrapper: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
	},
})
