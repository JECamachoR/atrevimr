import * as React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { darkMode, grayscale, secondary } from "../../constants/Colors"
import { Text, useThemeColor, View } from "../Themed"
import * as i18n from "i18n-js"
import { Row } from "../Layout"
import { MaterialIcons } from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar"
import { formatNumber } from "react-native-currency-input"
import { Bar } from "react-native-progress"

type Props = {
    openCreateTransactionModal: () => void
}

const SavingsScreenHeader = ({ openCreateTransactionModal }: Props): React.ReactElement => {

	const [totalBalance, setTotalBalance] = React.useState(5000)

	const divColor = useThemeColor({colors: {light: "#5B6BC0", dark: "#3E3E3F"}})

	return (
		<View
			style={styles.container}
			lightColor={secondary.default}
			darkColor={darkMode.inputBackground}
		>
			<StatusBar style="light" />
			<Row style={styles.transparent}>
				<View style={styles.left}>
					<Text style={styles.title}>{i18n.t("Savings")}</Text>
				</View>
				<View style={styles.right}>
					<TouchableOpacity>
						<MaterialIcons name="settings" size={30} color={grayscale.offWhite} />
					</TouchableOpacity>
				</View>
			</Row>
			<Row style={[styles.balanceRow, {borderColor: divColor}]}>
				<View style={styles.left}>
					<Text style={styles.balanceLabel}>{i18n.t("Total Balance")}</Text>
					<Text style={styles.balance}>
						{formatNumber(totalBalance, {prefix: "$", delimiter: ",", separator: ".", precision: 2})}
					</Text>
				</View>
				<TouchableOpacity
					onPress={openCreateTransactionModal}
				>
					<View 
						style={styles.nrContainer}
						lightColor="#5B6BC0"
						darkColor="#3E3E3F"
					>
						<Text style={styles.nrText}>{i18n.t("New record")}</Text>
						<View
							style={styles.plusButton}
							lightColor="#7381C9"
							darkColor="#5A5A5B"
						>
							<MaterialIcons name="add" size={26} color={grayscale.offWhite} />
						</View>
					</View>
				</TouchableOpacity>
			</Row>
			<View style={styles.transparent}>
				<Text style={styles.plannedLabel}>This month planned savings</Text>
				<Row style={styles.transparent}>
					<View
						style={[styles.progress, styles.goals]}
						lightColor="#5B6BC0"
						darkColor="#3E3E3F"
					>
						<View style={styles.progressLabelContainer}>
							<Text style={styles.progressLabel}>{i18n.t("Towards")} {i18n.t("Goals")}</Text>
						</View>
						<View style={styles.progressDataContainer}>
							<Text style={styles.progressAccum}>$2,500<Text style={styles.progressGoal}>/5,000</Text></Text>
							<Bar 
								progress={0.5} 
								width={null} 
								height={8} 
								color={grayscale.offWhite} 
								unfilledColor={useThemeColor({colors: {
									light: "#7381C9",
									dark: "#5A5A5B",
								}})}
								borderColor={divColor}
								borderRadius={8}
								borderWidth={1}

							/>
						</View>
					</View>
					<View
						style={styles.progress}
						lightColor="#5B6BC0"
						darkColor="#3E3E3F"
					>
						<View style={styles.progressLabelContainer}>
							<Text style={styles.progressLabel}>{i18n.t("Towards")} {i18n.t("Moneybox")}</Text>
						</View>
						<View style={styles.progressDataContainer}>
							<Text style={styles.progressAccum}>$2,500<Text style={styles.progressGoal}>/5,000</Text></Text>
							<Bar 
								progress={0.5} 
								width={null} 
								height={8} 
								color={grayscale.offWhite} 
								unfilledColor={useThemeColor({colors: {
									light: "#7381C9",
									dark: "#5A5A5B",
								}})}
								borderColor={divColor}
								borderRadius={8}
								borderWidth={1}

							/>
						</View>
					</View>
				</Row>
			</View>
		</View>
	)
}

export default SavingsScreenHeader

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		padding: 16,
	},
	right: {
		flex: 1,
		alignItems: "flex-end",
		justifyContent: "center",
		backgroundColor: "#00000000",
	},
	left: {
		flex: 1,
		alignItems: "flex-start",
		justifyContent: "center",
		backgroundColor: "#00000000",
	},
	title: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 28,
		lineHeight: 42,
		color: grayscale.offWhite
	},
	balanceRow: {
		marginTop: 16,
		paddingBottom: 2,
		borderBottomWidth: 1,
		backgroundColor: "#00000000",
		alignItems: "center",
	},
	balanceLabel: {
		fontSize: 12,
		lineHeight: 18,
		color: grayscale.offWhite,
	},
	balance: {
		color: grayscale.offWhite,
		fontFamily: "Poppins_600SemiBold",
		fontSize: 24,
		lineHeight: 36,
	},
	nrContainer: {
		flexDirection: "row",
		height: 34,
		borderRadius: 10,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
	},
	plusButton: {
		height: 34, 
		width: 34,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	nrText: {
		fontSize: 12, 
		paddingHorizontal: 8,
		color: grayscale.offWhite
	},
	plannedLabel: {
		fontSize: 14,
		lineHeight: 36,
		color: grayscale.offWhite,
	},
	progress: {
		height: 86,
		flex: 1,
		borderRadius: 15,
		paddingHorizontal: 16,
		marginBottom: 8,
	},
	progressLabelContainer: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#00000000",
	},
	progressDataContainer: {
		flex: 1,
		marginBottom: 8,
		backgroundColor: "#00000000",
	},
	progressLabel: {
		fontSize: 12,
		lineHeight: 18,
		color: grayscale.offWhite,
	},
	progressAccum: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 16,
		color: grayscale.offWhite,
	},
	progressGoal: {
		fontFamily: "Poppins_400Regular",
		fontSize: 12,
		fontWeight: "400",
		color: grayscale.offWhite,
	},
	goals: {
		marginRight: 16,
	},
	transparent: {
		backgroundColor: "#00000000"
	}
})