import { MaterialIcons } from "@expo/vector-icons"
import { t } from "i18n-js"
import * as React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { primary, secondary, success, error as errorColor } from "../../constants/Colors"
import CategoryModal from "../CategoryModal"
import { IconForCategory } from "../IconForCategory"
import { Row } from "../Layout"
import { Text, useThemeColor, View } from "../Themed"
import ErrorText from "./ErrorText"

type Props = {
    category: string | null | undefined,
    selectCategory: (c: string) => void,
    variant?: "goals" | "moneybox",
	error?: string | undefined,
}

const CategoryPicker = ({ category, selectCategory, variant, error }: Props): React.ReactElement => {

	const [categoryModalOpen, setCategoryModalOpen] = React.useState(false)
	const line = useThemeColor({colorName: "line"})
	const border = error ? errorColor.default : line
	const bg = useThemeColor({colorName: "background"})
	const ph = useThemeColor({colorName: "placeholderTextColor"})
	const btnColor = useThemeColor({colors: {
		light: variant === "goals" ? secondary.default : success.dark,
		dark: primary.default,
	}})

	return (
		<TouchableOpacity onPress={() => setCategoryModalOpen(true)}>

			<CategoryModal
				visible={categoryModalOpen}
				hideModal={() => setCategoryModalOpen(false)}
				selectCategory={(c) => {
					selectCategory(c)
					setCategoryModalOpen(false)
				}}
			/>
			{
				category ? 
					(
						<Row style={[styles.changeCategory, {backgroundColor: btnColor}]}>
							<IconForCategory category={category} color={bg} />
							<View style={styles.chooseCategoryTextContainer}>
								<Text style={[styles.chooseCategoryText, {color: bg}]}>  {category}</Text>
							</View>
							<MaterialIcons name="keyboard-arrow-right" size={28} color={bg} />
						</Row>
					)
					:(
						<Row style={[styles.chooseCategory, {borderColor: border}]}>
							<View style={styles.chooseCategoryTextContainer}>
								<Text style={[styles.chooseCategoryText, {color: ph}]}>
									{t("Choose a category")}
								</Text>
							</View>
							<MaterialIcons name="keyboard-arrow-right" size={28} color={ph} />
						</Row>
					)
			}
			<ErrorText error={error} style={styles.errorText} />
		</TouchableOpacity>
	)
}

export default CategoryPicker

const styles = StyleSheet.create({
	chooseCategory: {
		flex: 1,
		height: 44,
		borderRadius: 15,
		borderWidth: 1,
		paddingVertical: 8,
		paddingHorizontal: 16,
		overflow: "hidden",
		marginVertical: 16,
	},
	chooseCategoryTextContainer: {
		flex: 5,
		alignItems: "flex-start",
		justifyContent: "center",
		backgroundColor: "#FFFFFF00",
	},
	chooseCategoryText: {
		fontFamily: "Poppins_600SemiBold",
		fontWeight: "500",
		fontSize: 16,
	},
	changeCategory: {
		flex: 1,
		height: 44,
		borderRadius: 15,
		paddingVertical: 8,
		paddingHorizontal: 16,
		overflow: "hidden",
		marginVertical: 16,
		borderWidth: 0,
	},
	changeCategoryTextContainer: {
		flex: 5,
		alignItems: "flex-start",
		justifyContent: "center"
	},
	changeCategoryText: {},
	errorText: {
		marginBottom: 8,
		marginTop: -8
	}
})
