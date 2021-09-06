import { Formik } from "formik"
import * as React from "react"
import UserContext from "../../contexts/UserContext"
import { StyleSheet } from "react-native"
import {  Text, View } from "../../components/Themed"
import DOTWPicker from "../../components/savings/DOTWPicker"
import { daysOfTheWeek, frequencies, SavingsStackParamList } from "../../../types"
import FrequencyItem from "../../components/savings/FrequencyItem"
import { t } from "i18n-js"
import Button from "../../components/Button"
import MoneyboxesContext from "../../contexts/MoneyboxesContext"
import GoalFundContext from "../../contexts/GoalFundContext"
import timeForFrequency from "../../../functions/timeForFrequency"
import API from "@aws-amplify/api"
import { graphqlOperation } from "aws-amplify"
import { updateFund, updateUser } from "../../graphql/mutations"
import { UpdateFundInput, UpdateUserInput } from "../../API"
import GoalsContext from "../../contexts/GoalsContext"
import shortPlan from "../../../functions/shortPlan"
import getSavingDate from "../../../functions/getSavingDate"
import Submitting from "../../components/Submitting"
import { StackScreenProps } from "@react-navigation/stack"

type Props = StackScreenProps<SavingsStackParamList, "UpdateSavings">

const UpdateSavings = ({ navigation }: Props): React.ReactElement => {
	const user = React.useContext(UserContext)
	const mbs = React.useContext(MoneyboxesContext)
	const goals = React.useContext(GoalsContext)
	const gf = React.useContext(GoalFundContext)
	const ptff = timeForFrequency(user.frequency as frequencies)

	return (
		<Formik
			initialValues={{
				DOTW: user.DOTW as daysOfTheWeek,
				frequency: user.frequency as frequencies,
			}}
			onSubmit={async (v) => {
				console.log("submitted")
				try {
					await API.graphql(graphqlOperation(
						updateUser,
						{input: {
							id: user.id,
							frequency: v.frequency,
							DOTW: v.DOTW
						} as UpdateUserInput}
					))

					const ntff = timeForFrequency(v.frequency)
					
					mbs.map(async (f) => {
						await API.graphql(graphqlOperation(
							updateFund,
							{input: {
								id: f.id,
								recurringAmmount: (f.recurringAmmount || 0) * ntff / ptff
							} as UpdateFundInput}
						))
					})

					const [goalsRA] = shortPlan(
						goals.map(g => ({ammount: g.ammount, date: new Date(g.date)})), 
						v.frequency, 
						v.DOTW, {
							ammount: gf?.balance || 0,
							savingDate: getSavingDate(new Date(), v.frequency, v.DOTW)
						}
					)

					await API.graphql(graphqlOperation(
						updateFund,
						{input: {
							id: gf?.id,
							recurringAmmount: goalsRA
						} as UpdateFundInput}
					))
					
					navigation.goBack()
				} catch (er) {
					console.error(er)
				}
			}}
		>
			{({values, setFieldValue, submitForm, isSubmitting}) => {
				if (isSubmitting) return <Submitting />
				// console.log("\nTo save every", values.frequency)
				// console.log("instead of every", user.frequency)
				// const ntff = timeForFrequency(values.frequency)
				// console.log("user must save", ntff/ptff, "times what he used to save")
				return (
					<View style={styles.screen}>
						<Text><Text style={styles.bold}>Day of the week:</Text> Aut laboriosam quos eius dolorum. Aut ero eligendi quI beatae.</Text>

						<DOTWPicker selected={values.DOTW} onSelect={d => setFieldValue("DOTW", d)}/>
                        
						<Text><Text style={styles.bold}>Frequency:</Text> Aut laboriosam quos eius dolorum. Aut ero eligendi quI beatae.</Text>

						<FrequencyItem 
							label={t("Monthly")} 
							value={"28day"} 
							handleClick={v => setFieldValue("frequency", v)}
							selected={values.frequency === "28day"}
						/>
						<FrequencyItem 
							label={t("BiWeekly")} 
							value={"14day"} 
							handleClick={v => setFieldValue("frequency", v)}
							selected={values.frequency === "14day"}
						/>
						<FrequencyItem 
							label={t("Weekly")} 
							value={"7day"} 
							handleClick={v => setFieldValue("frequency", v)}
							selected={values.frequency === "7day"}
						/>

						<View style={styles.bottom}>
							<Button 
								title={t("Submit")}
								onPress={() => {
									if (
										values.DOTW !== user.DOTW ||
										values.frequency !== user.frequency
									) submitForm()
								}}
								inactive={!(
									values.DOTW !== user.DOTW ||
									values.frequency !== user.frequency
								)}
							/>
						</View>

					</View>
				)
			}}
		</Formik>
	)
}

export default UpdateSavings


const styles = StyleSheet.create({
	screen: {
		paddingHorizontal: 32,
		paddingVertical: 16,
		flex: 1
	},
	bold: {
		fontFamily: "Poppins_600SemiBold"
	},
	bottom: {
		flex: 1,
		justifyContent: "flex-end"
	}
})