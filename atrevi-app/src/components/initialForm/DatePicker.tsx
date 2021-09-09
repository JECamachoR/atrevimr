import * as React from "react"
import {
	StyleSheet,
	View,
	Platform,
} from "react-native"
import {
	heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { Picker } from "@react-native-picker/picker"

type Props = {
  type: "day" | "month" | "year",
  title: string,
  flex: number,
  value: number,
  onSelect: (v: number) => void
}

export default function DatePicker({ type, flex, value, onSelect }: Props): React.ReactElement {
	const [data, setData] = React.useState<(number)[]>([])

	const month = [
		"",
		"Jan",
		"Feb",
		"March",
		"April",
		"May",
		"June",
		"July",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	]

	const setDate = () => {
		const arr = [] as (number)[]
		switch (type) {
		case "day":
			for (let i = 1; i <= 31; i++) {
				arr.push(i)
			}   
			break
		case "month": 
			for (let i = 1; i <= 12; i++) {
				arr.push(i)
			}
			break
		case "year":
			for (let i = 2021; i >= 1910; i--) {
				arr.push(i)
			}
			break
		}
		setData(arr)
	}

	React.useEffect(() => {
		setDate()
	}, [])

	return (
		<View
			style={[
				styles.container,
				{ flex: flex, overflow: Platform.OS == "ios" ? "hidden" : "visible" },
			]}
		>
			<Picker
				selectedValue={value}
				onValueChange={(itemValue) => {
					onSelect(itemValue)
				}}
			>
				{data.map((item, index) => {
					return (
						<Picker.Item
							label={type === "month" ? month[item] : item?.toString()}
							value={type === "year" ? item : index + 1}
							key={index}
						/>
					)
				})}
			</Picker>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: hp("7%"),
		justifyContent: "center",
		borderBottomWidth: 2,
		borderBottomColor: "#e5e5e5",
		marginHorizontal: 4,
	},
})
