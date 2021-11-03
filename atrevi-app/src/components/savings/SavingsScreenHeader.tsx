/* eslint-disable @typescript-eslint/ban-types */
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
import UserContext from "../../contexts/UserContext"
import GoalsContext from "../../contexts/GoalsContext"
import TransactionsContext from "../../contexts/TransactionsContext"
import getSavingDate from "../../../functions/getSavingDate"
import { daysOfTheWeek, frequencies } from "../../../../types"

type Props = {
    openCreateTransactionModal: () => void,
	openConfig: () => void,
	getHelp: () => void
}

const SavingsScreenHeader = ({ openCreateTransactionModal, openConfig, getHelp }: Props): React.ReactElement => {

	const user = React.useContext(UserContext)
    const transactions = React.useContext(TransactionsContext)
	const goalList = React.useContext(GoalsContext)

	const [goalsProgress, setGoalsProgress] = React.useState<number>(0)
	const [goalsExpected, setGoalsExpected] = React.useState<number>(0)

    const today = new Date()

    React.useEffect(() => {
        setGoalsExpected(goalList.reduce((p, c) => {
            return p + c.installments
        }, 0))
    }, [goalList])

    React.useEffect(() => {
        setGoalsProgress(transactions
            .filter(v => v.createdAt > getSavingDate(
                today, 
                user.frequency as frequencies, 
                user.DOTW as daysOfTheWeek))
            .reduce((p, c) => {
                return p + c.ammount
            }, 0)
        )
    }, [transactions])

	const divColor = useThemeColor({colors: {light: "#5B6BC0", dark: "#3E3E3F"}})
	const unfilledColor = useThemeColor({colors: {
		light: "#7381C9",
		dark: "#5A5A5B",
	}})
	const f = (n: number) => formatNumber(n, {
		delimiter: ",",
		precision: 2,
		separator: ".",
	})

	const towards = i18n.t("Towards")
	const goals = i18n.t("Goals")

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
				<Row style={styles.right}>
					<TouchableOpacity style={{marginLeft: 8}} onPress={getHelp}>
						<MaterialIcons name="help" size={30} color={grayscale.offWhite} />
					</TouchableOpacity>
					<TouchableOpacity style={{marginLeft: 8}} onPress={openConfig}>
						<MaterialIcons name="settings" size={30} color={grayscale.offWhite} />
					</TouchableOpacity>
				</Row>
			</Row>
			<Row style={[styles.balanceRow, {borderColor: divColor}]}>
				<View style={styles.left}>
					<Text style={styles.balanceLabel}>{i18n.t("Total Balance")}</Text>
					<Text style={styles.balance}>
						{formatNumber(user.balance || 0, {prefix: "$", delimiter: ",", separator: ".", precision: 2})}
					</Text>
				</View>
				<TouchableOpacity
					onPress={() => {
						if (goalList.length) {
							openCreateTransactionModal()
						}
					}}
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
				<Text style={styles.plannedLabel}>{i18n.t("savings.savingsLabel", {period: i18n.t("period.28day")})}</Text>
				<Row style={styles.transparent}>
					{ Boolean(goalsExpected) && 
					<View
						style={styles.progress}
						lightColor="#5B6BC0"
						darkColor="#3E3E3F"
					>
						<View style={styles.progressLabelContainer}>
							<Text style={styles.progressLabel}>{towards} {goals}</Text>
						</View>
						<View style={styles.progressDataContainer}>
							<Text style={styles.progressAccum}>${f(goalsProgress)}<Text style={styles.progressGoal}>/{f(goalsExpected)}</Text></Text>
							<Bar 
								progress={goalsProgress / goalsExpected} 
								width={null} 
								height={8} 
								color={grayscale.offWhite} 
								unfilledColor={unfilledColor}
								borderColor={divColor}
								borderRadius={8}
								borderWidth={1}

							/>
						</View>
					</View>
					}
	
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
		alignItems: "center",
		justifyContent: "flex-end",
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
	separator: {
		width: 16,
		backgroundColor: "#00000000",
	},
	transparent: {
		backgroundColor: "#00000000",
	}
})