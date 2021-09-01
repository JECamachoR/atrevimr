import * as React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker"
import InputLabel from "./InputLabel"
import { useThemeColor } from "../Themed"
import { t } from "i18n-js"
import ErrorText from "./ErrorText"
import { primary, secondary, success } from "../../constants/Colors"

interface DateInputProps {
    field: string;
    setDate: (field: string, value: Date | null | undefined, shouldValidate?: boolean | undefined) => void;
    date: Date | string | null | undefined;
    label?: string;
    text?: string;
    maxDate?: Date;
	error?: string | undefined,
	variant?: "secondary" | "successDark"
}

const DateInput = ({ date: passedDate, setDate, field, label, text, maxDate, error, variant } : DateInputProps): React.ReactElement => {
    
	const [show, setShow] = React.useState<boolean>(false)

	const showDatePicker = () => setShow(true)
	const hideDatePicker = () => setShow(false)

	const today = new Date()

	const backgroundColor = useThemeColor({colors: {
		dark: primary.default,
		light: variant === "secondary" ? secondary.default : success.dark
	}})
	const color = useThemeColor({colorName: "background"})

	let date : Date | null | undefined
	if (!passedDate) {
		date = new Date()
	}else if (typeof passedDate === "string") {
		date = new Date(passedDate)
	} 
	else {
		date = passedDate
	}

	return (
		<>
			<InputLabel label={label} />
			<TouchableOpacity style={[styles.dateButton, {backgroundColor}]}
				onPress={showDatePicker}
			>
				<View style={{flex: 1, justifyContent: "center"}}>
					<Text style={[styles.text, {color}]}>{text || t("Date")}</Text>
				</View>
				<View style={{flex: 1, alignItems: "flex-end",  justifyContent: "center"}}>
					<Text style={[styles.text, {color}]}>{date instanceof Date ? date.toDateString() : today}</Text>
				</View>
			</TouchableOpacity>
			<ErrorText error={error} />
			{show && <DateTimePicker
				testID="dateTimePicker"
				value={date instanceof Date ? date : today}
				mode={"date"}
				display="default"
				minimumDate={today}
				onChange={(_: unknown, d: Date | undefined) => {
					hideDatePicker()
					setDate(field, d || date)
				}}
				maximumDate={maxDate}
			/>}
		</>
	)
}

export default DateInput

const styles = StyleSheet.create({
	text: {
		fontFamily: "Poppins_400Regular",
		fontSize: 16,
		lineHeight: 28,
	},
	dateButton: {
		flexDirection: "row",
		height: 48,
		marginTop: 8,
		marginBottom: 16,
		paddingHorizontal: 16,
		borderRadius: 15,
	}
})
