import * as React from "react"
import { NativeSyntheticEvent, StyleSheet, TextInputFocusEventData } from "react-native"
import CurrencyInput from "react-native-currency-input"
import { useThemeColor } from "../Themed"
import { error as errorColor } from "../../constants/Colors"

type Props = {
    value: number | null | undefined,
    handleChange: (v: number) => void,
    handleBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
	error?: string | undefined,
}

const NeededAmmountInput = ({ value, handleBlur, handleChange, error }: Props): React.ReactElement => {

	const line = useThemeColor({colorName: "line"})
	const ph = useThemeColor({colorName: "placeholderTextColor"})
	const color = useThemeColor({colorName: "text"})

	return (
		<CurrencyInput
			value={value || null}
			placeholder="$$$"
			onChangeValue={handleChange}
			onBlur={handleBlur}
			style={[
				styles.currencyInput, 
				{
					borderColor: error ? errorColor.default : line,
					color
				}
			]}
			prefix="$"
			suffix=" MXN"
			separator="."
			delimiter=","
			placeholderTextColor={ph}
		/>
	)
}

export default NeededAmmountInput

const styles = StyleSheet.create({
	currencyInput: {
		height: 48,
		borderWidth: 1,
		borderRadius: 15,
		paddingHorizontal: 16,
		marginTop: 8,
		marginBottom: 8,
		fontFamily: "Poppins_400Regular",
		fontSize: 18,
	},
})
