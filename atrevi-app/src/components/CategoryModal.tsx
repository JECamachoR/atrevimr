import * as React from "react"
import Constants from "expo-constants"
import { SectionList, StyleSheet, TouchableOpacity } from "react-native"
import { Text, View, useThemeColor } from "./Themed"
import { Row } from "./Layout"
import { MaterialIcons } from "@expo/vector-icons"
import i18n from "i18n-js"
import { TextInput } from "react-native-gesture-handler"
import categories from "../assets/goals/categories.json"
import { IconForCategory } from "./IconForCategory"
import Modal from "./Modal"

type Props = {
    visible: boolean,
    selectCategory: (c: string) => void,
    hideModal: () => void
}

const CategoryModal = ({ visible, hideModal, selectCategory }: Props): React.ReactElement => {

	const [search, setSearch] = React.useState<string>("")
	const [selectedSection, setSelectedSection] = React.useState<string>("")

	const line = useThemeColor({colorName: "line"})

	return (
		<Modal
			hideModal={hideModal}
			visible={visible}
			title={i18n.t("Categories")}
		>
			<View style={styles.bodyContainer}>
				<Row style={[styles.searchBar, {backgroundColor: line}]}>
					<TextInput
						value={search}
						onChangeText={setSearch}
						style={[styles.searchTextContainer, {backgroundColor: line}]}
					/>
					<View style={[styles.searchLogoContainer, {backgroundColor: line}]}>
						<MaterialIcons name="search" size={24} color="black" />
					</View>
				</Row>
				<View style={styles.listContainer}>
					<SectionList
						sections={categories.map(v => ({
							title: v.group, 
							data: v.categories
						})).filter((val) => {
							if (!search) return val
							if (val.title.toLowerCase().indexOf(search) !== -1){
								return val
							}
							let found = false
							const nVal = {title: val.title, data: []} as typeof val
							val.data.forEach(v => {
								if (v.name.toLowerCase().indexOf(search) != -1) {
									nVal.data.push(v)
									found = true
								}
								if (v.category.toLowerCase().indexOf(search) != -1) {
									nVal.data.push(v)
									found = true
								}
							})
							if (found) return nVal
						})
						}
						keyExtractor={({category}) => category}
						renderSectionHeader={(v) => (
							<TouchableOpacity onPress={() => setSelectedSection(s => {
								if (s === v.section.title) return ""
								else return v.section.title
							})}>
								<View style={[styles.sectionHeaderContainer, {backgroundColor: line}]}>
									<Text style={styles.sectionHeaderText}>{v.section.title}</Text>
								</View>
							</TouchableOpacity>
						)}
						renderItem={({item, section}) => (
							<TouchableOpacity onPress={() => {
								setSelectedSection("")
								selectCategory(item.category)
							}}>
								{
									Boolean(section.title === selectedSection || search) &&
									(
										<Row style={styles.listItem}>
											<IconForCategory category={item.category} size={24} />
											<Text>{item.name}</Text>
										</Row>
									)
								}
							</TouchableOpacity>
						)}
					/>
				</View>
			</View>
		</Modal>
	)
}

export default CategoryModal

const styles = StyleSheet.create({
	bg: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
		backgroundColor: "#FFFFFF00"
	},
	container: {
		flex: 1,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		overflow: "hidden",
	},
	bodyContainer: {
		flex: 1
	},
	searchBar: {
		height: 38,
		marginHorizontal: 16,
		marginVertical: 8,
		borderRadius: 15,
		overflow: "hidden"
	},
	searchTextContainer: {
		flex: 5,
		alignItems: "flex-start",
		justifyContent: "center",
		paddingHorizontal: 16,
	},
	searchLogoContainer: {
		flex: 1,
		paddingHorizontal: 16,
		alignItems: "flex-end",
		justifyContent: "center",
	},
	listContainer: {
		flex: 1,
		marginHorizontal: 16,
	},
	sectionHeaderContainer: {
		height: 48,
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 16,
		borderRadius: 8,
		marginVertical: 8,
	},
	sectionHeaderText: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 16,
	},
	listItem: {
		alignItems: "center",
		margin: 8,
	},
})
