import React from "react"
import { Image, StyleSheet, Text, Animated, View } from "react-native"
import { RFValue as rf } from "react-native-responsive-fontsize"
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen"
import Button from "./Button"
import StepIndicator from "./StepIndicator"

type Props = {
	type?: string,
	position: number,
	title: string,
	height: Animated.Value,
	opacity?: number,
	onNextPress: () => void,
	onPreviousPress: () => void,
}

export default function StepperSuccess(props: Props): React.ReactElement {
	return (
		<View style={styles.stepperViewWrapper}>
			<View style={styles.stepperView}>
				<StepIndicator
					number={3}
					activated={props.position >= 4 ? true : false}
					completed={props.position > 3 ? true : false}
				/>
				<Text style={styles.stepTitle}>{props.title}</Text>
			</View>
			<Animated.View
				style={{
					height: props.position>=4?props.height:undefined, // Bind opacity to animated value
					opacity: props.opacity,
				}}
			>
				<View
					style={[
						styles.stepperContent,
						{ display: props.position == 4 ? "flex" : "none" },
					]}
				>
					<View>
						<Text style={styles.text}>
              Deserunt et debitis. Aut laboriosam quos{"\n"}eius dolorum. Aut
              ero eligendi quI beatae.
						</Text>
						<View style={styles.successImage}>
							<Image source={require("../../assets/images/createProfileForm/success.png")} style={styles.img} />
						</View>
					</View>

					<View style={styles.btnWrapper}>
						<Button
							title={"Previous"}
							active={false}
							onPress={() => props.onPreviousPress()}
						/>
						<Button
							title={"Continue"}
							active={true}
							onPress={() => props.onNextPress()}
						/>
					</View>
				</View>
			</Animated.View>
		</View>
	)
}

const styles = StyleSheet.create({
	stepperViewWrapper: {
		width: "100%",
		marginTop: 20,
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
	stepperContent: {
		paddingLeft: wp("9.5%"),
		marginTop: 10,
	},

	btnWrapper: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		marginTop: 10,
	},
	text: {
		color: "#4E4B66",
		fontSize: rf(12),
		fontWeight: "400",
		marginLeft: "4%"
	},
	successImage:{
		width: "100%",
		height: hp("25%"),
		alignItems: "center",
		justifyContent: "center",
	},
	img:{
		width: "100%",
		height: "100%",
		resizeMode:"cover"
	}
})
