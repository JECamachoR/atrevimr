import { t } from "i18n-js"
import React from "react"
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Animated
} from "react-native"
import { RFValue as rf } from "react-native-responsive-fontsize"
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen"
import Button from "./Button"
import StepIndicator from "./StepIndicator"

type Props = {
	activeDay: string,
	type?: string,
	frequency: string,
	position: number,
	title: string,
	height: Animated.Value,
	opacity?: number,
	onWeekDayPress: (s: string) => void,
	onRadioPress: (s: string) => void,
	onNextPress: () => void,
	onPreviousPress: () => void,
}

export default function StepperFrequency(props: Props): React.ReactElement {
	type WeekDayProps = {
		onPress: () => void,
		type: string,
		title: string,
	}
	const WeekDay = ({ onPress, type, title }: WeekDayProps) => {
		return (
			<TouchableOpacity
				style={[
					styles.weekDay,
					{
						backgroundColor:
              props.activeDay == type ? "#3F51B5" : "transparent",
					},
				]}
				onPress={onPress}
			>
				<Text
					style={[
						styles.weekDayText,
						{ color: props.activeDay == type ? "#fff" : "#4E4B66" },
					]}
				>
					{title}
				</Text>
			</TouchableOpacity>
		)
	}

	type FrequencyTypeProps = {
		type: string,
		title: string,
		onPress: ( ) => void
	}
	const FrequencyType = ({ type, title, onPress }: FrequencyTypeProps) => (
		<TouchableOpacity
			style={styles.frequencyTypeWrapper}
			onPress={onPress}
		>
			<View
				style={[
					styles.frequencyTypeRadio,
					{
						backgroundColor: props.frequency == type ? "#fff" : "#D9DBE9",
						borderWidth: props.frequency == type ? 7 : 0,
					},
				]}
			></View>
			<View>
				<Text style={styles.frequencyText}>{title}</Text>
			</View>
		</TouchableOpacity>
	)

	return (
		<View style={styles.stepperViewWrapper}>
			<View style={styles.stepperView}>
				<StepIndicator
					number={2}
					activated={props.position >= 2 ? true : false}
					completed={props.position > 2 ? true : false}
				/>
				<Text style={styles.stepTitle}>{props.title}</Text>
			</View>
			<Animated.View
				style={{
					height: props.position>=2?props.height:undefined, // Bind opacity to animated value
					opacity:props.position>=2? props.opacity:undefined,
				}}
			>
				<View
					style={[
						styles.stepperContent,
						{ display: props.position==2 ? "flex" : "none" },
					]}
				>
					<View style={styles.cont2}>
						<Text
							style={[styles.dowText, { fontWeight: "300", lineHeight: 20 }]}
						>
							<Text style={styles.dowText}>{t("Day of the week")}</Text>: Aut
              laboriosam quos eius dolorum. Aut ero eligendi quI beatae.
						</Text>
					</View>
					<View style={styles.weekDaysWrapper}>
						<WeekDay
							title={t("DOTWinitialMonday")}
							type="monday"
							onPress={() => props.onWeekDayPress("monday")}
						/>
						<WeekDay
							title={t("DOTWinitialTuesday")}
							type="tuesday"
							onPress={() => props.onWeekDayPress("tuesday")}
						/>
						<WeekDay
							title={t("DOTWinitialWednesday")}
							type="wednesday"
							onPress={() => props.onWeekDayPress("wednesday")}
						/>
						<WeekDay
							title={t("DOTWinitialThursday")}
							type="thursday"
							onPress={() => props.onWeekDayPress("thursday")}
						/>
						<WeekDay
							title={t("DOTWinitialFriday")}
							type="friday"
							onPress={() => props.onWeekDayPress("friday")}
						/>
						<WeekDay
							title={t("DOTWinitialSaturday")}
							type="saturday"
							onPress={() => props.onWeekDayPress("saturday")}
						/>
						<WeekDay
							title={t("DOTWinitialSunday")}
							type="sunday"
							onPress={() => props.onWeekDayPress("sunday")}
						/>
					</View>
					<View style={styles.cont2}>
						<Text
							style={[styles.dowText, { fontWeight: "300", lineHeight: 20 }]}
						>
							<Text style={styles.dowText}>{t("Frequency")}</Text>: Aut laboriosam quos
              eius dolorum. Aut ero eligendi quI beatae.
						</Text>
					</View>

					<FrequencyType
						title={t("Monthly")}
						type="28day"
						onPress={() => props.onRadioPress("28day")}
					/>
					<FrequencyType
						title={t("BiWeekly")}
						type="14day"
						onPress={() => props.onRadioPress("14day")}
					/>
					<FrequencyType
						title={t("Weekly")}
						type="7day"
						onPress={() => props.onRadioPress("7day")}
					/>
					<View style={styles.cont2}>
						<Text
							style={[styles.dowText, { fontWeight: "300", lineHeight: 20 }]}
						>
              E.g. Lorem ipsum aut laboriosam quos eius dolorum. Aut ero
              eligendi quI beatae.
						</Text>
					</View>
					<View style={styles.btnWrapper}>
						<Button
							title={t("Previous")}
							active={true}
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
	cont2: {
		marginLeft: wp("4%"),
		marginTop: 10,
	},
	dowText: {
		color: "#4E4B66",
		fontSize: rf(12),
		fontWeight: "600",
	},
	weekDaysWrapper: {
		width: "100%",
		height: hp("7%"),
		borderRadius: 20,
		backgroundColor: "#EFF0F6",
		marginTop: 10,
		padding: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	weekDay: {
		width: wp("10%"),
		height: wp("10%"),
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 100,
	},
	weekDayText: {
		fontSize: wp("5%"),
		color: "#fff",
	},
	frequencyTypeWrapper: {
		width: "100%",
		height: hp("7%"),
		borderRadius: 15,
		backgroundColor: "#EFF0F6",
		marginTop: 10,
		padding: 5,
		flexDirection: "row",
		alignItems: "center",
	},
	frequencyTypeRadio: {
		width: wp("6%"),
		height: wp("6%"),
		borderRadius: 100,
		backgroundColor: "#fff",
		borderWidth: 7,
		borderColor: "#3F51B5",
		marginHorizontal: "3%",
	},
	frequencyText: {
		fontSize: rf(14),
		color: "#3F51B5",
		marginHorizontal: 7,
		fontWeight: "400",
	},
	btnWrapper: {
		width: "100%",
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
		marginTop: 10,
	},
})
