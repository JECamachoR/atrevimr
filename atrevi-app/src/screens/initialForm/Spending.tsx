import * as React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, Keyboard } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"
import { RFValue as rf } from "react-native-responsive-fontsize"
import IncomeCard from "../../components/initialForm/IncomeCard"
import Buttons from "../../components/initialForm/Buttons"
import { StackScreenProps } from "@react-navigation/stack"
import { InitialFormParamList } from "../../../types"
import InitialFormContext from "../../contexts/InitialFormContext"
import { StatusBar } from "expo-status-bar"
import { t } from "i18n-js"

type Props = StackScreenProps<InitialFormParamList, "Spending">

export default function Spending({ navigation }: Props): React.ReactElement {

	const formik = React.useContext(InitialFormContext)

	return (
		<TouchableOpacity
			style={styles.container}
			activeOpacity={1}
			onPress={Keyboard.dismiss}
		>
			<StatusBar style="light" />
			{/* Heading */}
			<View style={styles.Heading}>
				<Text style={styles.headingFont}>{t("Spending")}</Text>
				<Text style={{ fontSize: rf(14), color: "#fff" }}>1/3</Text>
			</View>
			{/* Heading */}
			{/* IncomeDetails */}
			<View style={styles.IncomeDetail}>
				<Text style={styles.DetailsFont}>{t("What is your monthly income?")}</Text>
			</View>
			{/* IncomeDetails */}
			{/* Cards */}
			<View style={styles.Card}>
				<IncomeCard 
					value={formik.values.monthlyIncome}
					handleChange={(v) => {
						formik.setFieldValue("monthlyIncome", v)
					}}
					autoFocus
				/>
			</View>
			{/* Cards */}
			{/* SpendDetails */}
			<View style={styles.SpendDetail}>
				<Text style={styles.DetailsFont}>{t("How much do you spend in a month?")}</Text>
				<Text style={{ fontSize: rf(12), color: "#fff" }}>{
					t("Only take into account your fixed expenses")+"\n("+
                    t("rent")+", " + t("car")+", " + t("food")+", etc.)"
				}</Text>
			</View>
			{/* SpendDetails */}
			{/* Cards */}
			<View style={styles.Card}>
				<IncomeCard 
					value={formik.values.monthlySpend} 
					handleChange={(v) => {
						formik.setFieldValue("monthlySpend", v)
					}}
				/>
			</View>
			{/* Cards */}

			{/* Picture */}
			<View style={styles.Pic}>
				<Image
					style={{ width: "100%", height: "100%" }}
					source={require("../../assets/images/initialForm/PaymentPic.png")}
					resizeMode="cover"
				/>
			</View>
			{/* Picture */}
			{/* Button */}
			<View style={styles.BtnRow}>
				<Buttons text={t("Previous")} onPress={() => navigation.goBack()} />
				<Buttons text={t("Next")} onPress={() => {
					if (
						typeof formik.values.monthlySpend === "undefined" ||
                        typeof formik.values.monthlyIncome === "undefined"
					) return
					navigation.navigate("Savings")}
				} />
			</View>
			{/* Button */}


		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#3F51B5",
		alignItems: "center",
	},
	Heading: {
		width: wp("90%"),
		height: hp("11%"),
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end"

	},
	IncomeDetail: {
		width: wp("90%"),
		height: hp("7%"),
		justifyContent: "flex-end"
	},
	Card: {
		width: wp("90%"),
		height: hp("11%"),
		justifyContent: "center"
	},
	SpendDetail: {
		width: wp("90%"),
		height: hp("9%"),
		justifyContent: "space-evenly"
	},
	headingFont: {
		fontSize: rf(20),
		fontWeight: "700",
		color: "#fff"
	},
	DetailsFont: {
		fontSize: rf(16),
		color: "#fff",
		fontWeight: "700"
	},
	Pic: {
		width: wp("90%"),
		height: hp("33%"),

	},
	BtnRow: {
		width: wp("90%"),
		height: hp("15%"),
		alignItems: "center",
		flexDirection: "row",
	}

})
