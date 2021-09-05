import { t } from "i18n-js"
import * as React from "react"
import { StyleSheet, Text, Animated, Switch, View } from "react-native"
import { RFValue as rf } from "react-native-responsive-fontsize"
import {
	widthPercentageToDP as wp,
} from "react-native-responsive-screen"
import Button from "./Button"
import StepIndicator from "./StepIndicator"

type Props = {
  position: number,
  opacity?: number,
  title: string,
	height: Animated.Value,
	onNextPress: () => void,
	onPreviousPress: () => void,
}

export default function StepperNotification(props: Props): React.ReactElement {
	const [isEnabled, setIsEnabled] = React.useState(false)
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

	const [isEnabled2, setIsEnabled2] = React.useState(false)
	const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState)

	return (
		<View style={styles.stepperViewWrapper}>
			<View style={styles.stepperView}>
				<StepIndicator
					number={3}
					activated={props.position >= 3 ? true : false}
					completed={props.position > 3 ? true : false}
				/>
				<Text style={styles.stepTitle}>{props.title}</Text>
			</View>
			<Animated.View
				style={[
					{
						height: props.position>=3?props.height:undefined, // Bind opacity to animated value
						opacity: props.opacity,
					},
				]}
			>
				<View
					style={[
						styles.stepperContent,
						{ display: props.position == 3 ? "flex" : "none" },
					]}
				>
					<View style={styles.cont1}>
						<View style={styles.textWrapper}>
							<Text style={styles.text1}>{t("Essential")}</Text>
							<Text style={styles.text2}>
                Deserunt et debitis, ut, labori,{"\n"}quos eius dolorum.{" "}
							</Text>
						</View>
						<View>
							<Switch
								trackColor={{ false: "#787880", true: "#3F51B5" }}
								thumbColor={isEnabled ? "#fff" : "#fff"}
								ios_backgroundColor="#787880"
								onValueChange={toggleSwitch}
								value={isEnabled}
							/>
						</View>
					</View>
					<View style={styles.cont1}>
						<View style={styles.textWrapper}>
							<Text style={styles.text1}>{t("Motivational")}</Text>
							<Text style={styles.text2}>
                Deserunt et debitis, ut, labori,{"\n"}quos eius dolorum.{" "}
							</Text>
						</View>
						<View>
							<Switch
								trackColor={{ false: "#787880", true: "#3F51B5" }}
								thumbColor={isEnabled2 ? "#fff" : "#fff"}
								ios_backgroundColor="#787880"
								onValueChange={toggleSwitch2}
								value={isEnabled2}
							/>
						</View>
					</View>

					<View style={styles.btnWrapper}>
						<Button
							title={t("Previous")}
							active={false}
							onPress={() => props.onPreviousPress()}
						/>
						<Button
							title={t("Next")}
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
		justifyContent: "flex-start",
		flexDirection: "row",
		marginTop: 10,
	},
	cont1: {
		flexDirection: "row",
		marginLeft: "4%",
		marginVertical: 10,
	},
	text1: {
		color: "#4E4B66",
		fontSize: rf(20),
		fontWeight: "600",
	},
	text2: {
		color: "#4E4B66",
		fontSize: rf(12),
		fontWeight: "400",
		lineHeight: 18,
		marginTop: 5,
	},
	textWrapper: {
		flex: 1,
	},
})
