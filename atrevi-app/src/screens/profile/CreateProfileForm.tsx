import * as React from "react"
import {
	Animated,
	Easing,
	Platform,
	StyleSheet,
	Text,
	View,
} from "react-native"
import { RFValue as rf } from "react-native-responsive-fontsize"
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen"
import StepperFrequency from "../../components/profileForm/StepperFrequency"
import StepperNotification from "../../components/profileForm/StepperNotification"
import StepperProfile from "../../components/profileForm/StepperProfile"
import StepperSuccess from "../../components/profileForm/StepperSuccess"
import * as ImagePicker from "expo-image-picker"
import { Formik } from "formik"
import Storage from "@aws-amplify/storage"
import AuthContext from "../../auth/AuthContext"
import API from "@aws-amplify/api"
import { graphqlOperation } from "aws-amplify"
import { createUser } from "../../graphql/mutations"

export default function CreateProfileForm(): React.ReactElement {

	const auth = React.useContext(AuthContext)

	const uploadProfilePic = async (uri: string) => {
		try {
			const img = await fetch(uri)
			const blob = await img.blob()
			await Storage.put(auth.username, blob)
		} catch (er) {
			console.error(er)
		}
	} 

	return (
		<Formik
			initialValues={{
				name: "",
				img: undefined as string | undefined,
				DOTW: "monday" as string,
				frequency: "7day" as string,
			}}
			onSubmit={async (v) => {
				const {img, ...user} = v
				if (img) uploadProfilePic(img)
				await API.graphql(graphqlOperation(
					createUser,
					{
						input: {
							id: auth.username,
							phone: auth.username,
							...user
						}
					}
				))
			}}
		>
			{({values, setFieldValue, submitForm}) => {
				const height1 = React.useRef(new Animated.Value(300)).current
				const height2 = React.useRef(new Animated.Value(550)).current
				const height3 = React.useRef(new Animated.Value(300)).current
				const height4 = React.useRef(new Animated.Value(500)).current
				const opacity = React.useRef(new Animated.Value(1)).current
				const [position, setPosition] = React.useState(1)

				React.useEffect(() => {
					(async () => {
						if (Platform.OS !== "web") {
							const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync()
							if (status !== "granted") {
								alert("Sorry, we need camera roll permissions to make this work!")
							}
						}
					})()
				}, [])

				const pickImage = async () => {
					const result = await ImagePicker.launchImageLibraryAsync({
						mediaTypes: ImagePicker.MediaTypeOptions.Images,
						allowsEditing: true,
						aspect: [4, 4],
						quality: 1,
					})

					if (!result.cancelled) {
						setFieldValue("img", result.uri)
					}
				}

				const hideContent = () => {
					Animated.timing(
						position == 1
							? height1
							: position == 2
								? height2
								: position == 3
									? height3
									: height4,
						{
							toValue: 0,
							duration: 250,
							easing: Easing.linear,
							useNativeDriver: false, // <-- neccessary
						}
					).start()
				}
				const showContent = (type: number) => {
					Animated.timing(
						type == 1 ? height1 : type == 2 ? height2 : type == 3 ? height3 : height4,
						{
							toValue:
          type == 1 ? 280 : type == 2 ? 530 : type == 3 ? 280 : type == 4? 500: 100,
							duration: 250,
							easing: Easing.linear,
							useNativeDriver: false, // <-- neccessary
						}
					).start(() => {
						Animated.timing(opacity, {
							toValue: 1,
							duration: 50,
							easing: Easing.linear,
							useNativeDriver: false, // <-- neccessary
						}).start()
					})
				}

				return (
					<View style={styles.container}>
						<Text style={styles.headTitle}>A few more steps:</Text>
						<View style={styles.stepperMainWrapper}>
							<View style={{ overflow: "hidden" }}>
								<StepperProfile

									title={
										position > 1
											? "Done, what a beautiful human"
											: "Customize your profile"
									}
									onNameChange={(val: string) => setFieldValue("name", val)}
									name={values.name}
									onNextPress={() => {
										setPosition(2)
										hideContent()
									}}
									height={height1}
									position={position}
									onSelectImg={() => {pickImage()}}
									selectedImg={values.img}
								/>
								<StepperFrequency
									title={position > 2 ? "Great choice" : "Choose a saving frequency"}
									activeDay={values.DOTW}
									onWeekDayPress={(val) => setFieldValue("DOTW", val)}
									onRadioPress={(val) => setFieldValue("frequency", val)}
									frequency={values.frequency}
									onPreviousPress={() => {
										setPosition(1)
										showContent(1)
									}}
									onNextPress={() => {
										setPosition(3)
										hideContent()
									}}
									position={position}
									height={height2}
								/>
								<StepperNotification
									title={position > 3 ? "Lorem ipsum" : "Customize notifications"}
									onPreviousPress={() => {
										setPosition(2)
										showContent(2)
									}}
									onNextPress={() => {
										setPosition(4)
										hideContent()
									}}
									position={position}
									height={height3}
								/>
								<StepperSuccess
                    
									title={"Success!"}
									onPreviousPress={() => {
										setPosition(3)
										showContent(3)
									}}
									onNextPress={submitForm}
									position={position}
									height={height4}
								/>

								{/* vertical Line */}
								<View style={styles.divider}></View>
								{/* vertical Line */}
							</View>
						</View>
					</View>
				)

			}}
		</Formik>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		padding: 20,
		paddingTop: hp("7%"),
		flex: 1,
	},
	headTitle: {
		fontSize: rf(16),
		marginTop: 10,
		fontWeight: "400",
		color: "#4E4B66",
	},
	stepperMainWrapper: {
		flex: 1,
		position: "relative",
		marginTop: 20,
	},
	stepperViewWrapper: {
		width: "100%",
	},
	stepperView: {
		flexDirection: "row",
		alignItems: "center",
	},
	stepIndicator: {
		width: wp("8%"),
		height: wp("8%"),
		borderRadius: 100,
		backgroundColor: "#3F51B5",
		alignItems: "center",
		justifyContent: "center",
	},
	stepIndicatorWrapper: {
		width: wp("9.5%"),
		height: wp("9.5%"),
		borderRadius: 100,
		backgroundColor: "#CDEAFE",
		alignItems: "center",
		justifyContent: "center",
	},
	stepIndicatorText: {
		fontSize: wp("4.5%"),
		color: "#fff",
	},
	stepTitle: {
		color: "#4E4B66",
		fontSize: rf(16),
		left: 15,
	},
	divider: {
		width: wp("0.5%"),
		height: "90%",
		backgroundColor: "#D9DBE9",
		position: "absolute",
		top: wp("9.5%"),
		left: wp("4.5"),
		zIndex: -1,
	},
	stepperContent: {
		paddingLeft: wp("9.5%"),
	},
	fadingContainer: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		backgroundColor: "powderblue",
	},
})
