import { StackScreenProps } from "@react-navigation/stack"
import { StatusBar } from "expo-status-bar"
import { t } from "i18n-js"
import * as React from "react"
import { StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { AuthParamList } from "../../../types"
import { WelcomeLogo } from "../../assets/icons"
import InitialCarrousel from "../../components/auth/InitialCarrousel"
import Button from "../../components/Button"
import { Screen, Text, View } from "../../components/Themed"
import { grayscale, primary, secondary } from "../../constants/Colors"

type Props = StackScreenProps<AuthParamList, "WelcomeScreen">;

const WelcomeScreen = ({ navigation }: Props): React.ReactElement => {

	const insets = useSafeAreaInsets()

	return (
		<Screen style={styles.screen}>
			<StatusBar style="dark" />
			<View style={styles.title}>
				<WelcomeLogo/>
			</View>

			<InitialCarrousel />
            
			<View style={[styles.bottom, {paddingBottom: insets.bottom + 64}]}>
				<View style={styles.btnWrapper}>
					<Button
						title={t("Create account")}
						onPress={() => navigation.navigate("SignUpScreen")}
						darkModeVariant="secondary"
					/>
				</View>
                
				<TouchableOpacity 
					style={styles.navOptions}
					onPress={() => {
						navigation.navigate("SignInScreen")
					}}
				>
					<Text 
						style={{color: grayscale.label}}
					>{t("Already signed up?")}</Text>
					<Text 
						style={{color: secondary.default}}
					> {t("Sign In")}</Text>
				</TouchableOpacity>
			</View>
		</Screen>
	)
}

export default WelcomeScreen

const styles = StyleSheet.create({
	screen: {
		backgroundColor: primary.default
	},
	title: {
		backgroundColor: "#00000000",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 32,
	},
	bottom: {
		backgroundColor: "#00000000",
		marginTop: 32,
		alignItems: "center",
		justifyContent: "center",
	},
	btnWrapper: {
		width: 232,
		marginVertical: 16,
		backgroundColor: "#00000000",
	},
	navOptions: {
		flexDirection: "row",
		marginHorizontal: 16,
		justifyContent: "center",
	},
})
