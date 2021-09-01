import { t } from "i18n-js"
import * as React from "react"
import { StyleSheet } from "react-native"
import { darkMode, grayscale, secondary, primary } from "../../constants/Colors"
import Button from "../Button"
import { Text, View } from "../Themed"

type Props = {
    action: () => void
}

const CreateCustomGoalCard = ({ action }: Props): React.ReactElement => {
	return (
		<View style={styles.custom}
			darkColor={darkMode.inputBackground}
			lightColor={grayscale.background}
		>
			<View
				style={styles.customTextContainer}
				lightColor={"#F3F3F8"}
				darkColor={"#272727"}
			>
				<Text style={styles.customTextNH}>{t("Create a custom goal")}</Text>
				<Text
					lightColor={secondary.default}
					darkColor={primary.default}
					style={styles.customTextH}
				>{t("For everything you can imagine!")}</Text>
			</View>
			<Button
				title={t("Let's go!")}
				onPress={action}
				darkModeVariant={"primary"}
				lightVariant={"secondary"}
			/>
		</View>
	)
}

export default CreateCustomGoalCard

const styles = StyleSheet.create({
	custom: {
		height: 138,
		marginHorizontal: 16,
		marginBottom: 16,
		paddingVertical: 8,
		borderRadius: 15,
		overflow: "hidden"
	},
	customTextContainer: {
		flex: 1,
		marginTop: 8,
		borderRadius: 8,
		overflow: "hidden",
		alignItems: "center",
		marginHorizontal: 16,
		justifyContent: "center",
	},
	customTextNH: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 13,
	},
	customTextH: {
		fontSize: 13,
	},
})
