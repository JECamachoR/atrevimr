import { Formik } from "formik"
import * as React from "react"
import UserContext from "../../contexts/UserContext"
import { StyleSheet, TouchableOpacity } from "react-native"
import {  Text, View } from "../../components/Themed"
import DOTWPicker from "../../components/savings/DOTWPicker"
import { daysOfTheWeek } from "../../../types"
import FrequencyItem from "../../components/savings/FrequencyItem"
import { t } from "i18n-js"

const UpdateSavings = (): React.ReactElement => {
	const user = React.useContext(UserContext)

	return (
		<Formik
			initialValues={{
				DOTW: user.DOTW as daysOfTheWeek,
				frequency: user.frequency
			}}
			onSubmit={console.log}
		>
			{({values, setFieldValue}) => {
				console.log(values)
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
})