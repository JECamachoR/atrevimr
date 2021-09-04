import { MaterialIcons } from "@expo/vector-icons"
import { t } from "i18n-js"
import * as React from "react"
import { ImageBackground, NativeSyntheticEvent, StyleSheet, TextInput, TextInputFocusEventData, TouchableOpacity } from "react-native"
import { UnsplashPhoto } from "react-native-unsplash"
import { darkMode, grayscale, primary, secondary, success, error as errorColor } from "../../constants/Colors"
import { Row } from "../Layout"
import PicturePicker from "../PicturePicker"
import { Text, useThemeColor, View } from "../Themed"
import ErrorText from "./ErrorText"

type Props = {
    name: string | undefined,
    unsplashIMG: UnsplashPhoto["urls"] | undefined,
    handleTextChange: (s: string) => void,
    handleBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
    changeIMG: (img: UnsplashPhoto["urls"]) => void,
    variant: "goals" | "moneybox",
	nameError?: string | undefined,
	imgError?: string | undefined,
}

const NameAndIMG = ({ unsplashIMG, name, changeIMG, handleTextChange, handleBlur, variant, nameError, imgError }: Props): React.ReactElement => {

	const [unsplashOpen, setUnsplashOpen] = React.useState(false)
	const line = useThemeColor({colorName: "line"})
	const border = nameError ? errorColor.default : line
	const ph = useThemeColor({colorName: "placeholderTextColor"})
	const imgInviteColor = imgError ? errorColor.default : ph
	const link = useThemeColor({colors: {
		light: grayscale.offWhite,
		dark: darkMode.background
	}})
	return (
		<>
			<ImageBackground
				style={[styles.card, {backgroundColor: useThemeColor({colorName: "inputBackground"})}]}
				source={{uri: unsplashIMG?.regular}}
			>
				<PicturePicker 
					choosePic={changeIMG}
					closeUnsplash={() => setUnsplashOpen(false)}
					unsplashOpen={unsplashOpen}
				/>

				{ unsplashIMG ?
					<Row style={[styles.cardIMG, {alignItems: "flex-start", justifyContent: "flex-end"}]}>
						<TouchableOpacity
							onPress={() => setUnsplashOpen(true)}
						>
							<View 
								lightColor={variant === "goals" ? secondary.default : success.dark}
								darkColor={primary.default}
								style={{
									width: 30,
									height: 30,
									alignItems: "center",
									justifyContent: "center",
									borderRadius: 15,
								}}
							>
								<MaterialIcons name="edit" size={19} color={link} />
							</View>
						</TouchableOpacity>
					</Row>
					:
					<TouchableOpacity style={{flex: 1}} onPress={() => setUnsplashOpen(true)}>
						<Row style={styles.cardIMG}>
							<MaterialIcons name="image" size={24} color={imgInviteColor} />
							<Text style={[styles.cardIMGText, {color: imgInviteColor}]}>
								{t("Choose a photo")}
							</Text>
						</Row>
					</TouchableOpacity>
				}
				<View style={[styles.cardTitleContainer, {borderColor: border}]}>
					<TextInput
						placeholder={t(variant === "goals" ? "Name your goal" : "Name your moneybox")}
						placeholderTextColor={ph}
						value={name || ""}
						onChangeText={handleTextChange}
						onBlur={handleBlur}
						style={[styles.cardTitle, {color: useThemeColor({colorName: "link"})}]}
					/>
				</View>
			</ImageBackground>
			<ErrorText error={nameError} style={styles.errorText} />
		</>
	)
}

export default NameAndIMG

const styles = StyleSheet.create({
	card: {
		flex: 1,
		height: 152,
		borderRadius: 15,
		overflow: "hidden",
	},
	cardIMG: {
		flex: 1,
		backgroundColor: "#FFFFFF00",
		alignItems: "center",
		justifyContent: "center",
		padding: 16,
	},
	cardIMGText: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 16,
		lineHeight: 24,
		fontWeight: "700",
	},
	cardTitleContainer: {
		height: 60,
		flex: 1,
		borderRadius: 15,
		borderWidth: 1,
		justifyContent: "center",
		paddingHorizontal: 16,
	},
	cardTitle: {
		flex: 1,
		marginVertical: 15,
		fontFamily: "Poppins_600SemiBold",
		fontWeight: "bold",
		fontSize: 20,
	},
	errorText :{
		marginTop: 8,
	}
})
