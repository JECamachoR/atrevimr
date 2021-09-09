import { t } from "i18n-js"
import * as React from "react"
import { Image, StyleSheet } from "react-native"
import { AtreviSavingsLogo } from "../../assets/icons/savings"
import { primary, secondary } from "../../constants/Colors"
import Button from "../Button"
import { View, Text, useThemeColor } from "../Themed"



const WhatIsSavings = (): React.ReactElement => {

	const line = useThemeColor({colorName: "line"})
	const ph = useThemeColor({colorName: "inputBackground"})
    
	return (
		<View
			style={styles.container}
		>
			{/* <View style={styles.card}> */}
			<View style={styles.metaHead}>
				<View style={styles.headLeft}>
					<AtreviSavingsLogo />
					<Text style={styles.title}>{t("Savings")}</Text>
				</View>
				<Image 
					source={require("../../assets/images/savings/abstract-easy-money.png")}
				/>
			</View>
            
			<View style={[styles.bodyContainer, {borderColor: line}]}>
				<View style={[styles.bodyTextContainer, {backgroundColor: ph}]}>
					<Text>{t("Learn more about our")}</Text>
					<Text
						lightColor={secondary.default}
						darkColor={primary.default}
					>{t("savings record tool")}.</Text>
				</View>
				<Button
					title={t("Read article")}
					onPress={() => null}
					lightVariant="secondaryDark"
				/>
			</View>
			{/* </View> */}
		</View>
	)
}

export default WhatIsSavings

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 16,
		marginVertical:8,
		borderRadius: 15,
		backgroundColor: "#EEBED3",
	},
	// card: {
	// 	flex: 1,
	// 	overflow: "hidden",
	// 	backgroundColor: "#00000000",
	// },
	metaHead: {
		padding: 16,
		backgroundColor: "#00000000",
		alignItems: "center",
		flexDirection: "row"
	},
	headLeft: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "#00000000",
	},
	headRight: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "#00000000",
	},
	bodyContainer: {
		paddingBottom: 8,
		borderRadius: 15, 
		borderWidth: 1, 
	},
	title: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 32,
		paddingHorizontal: 8,
		color: secondary.dark
	},
	bodyTextContainer: {
		marginHorizontal: 16,
		marginTop: 8,
		borderRadius: 8,
		padding: 8,
		alignItems: "center",
		justifyContent: "center",
	},
})
