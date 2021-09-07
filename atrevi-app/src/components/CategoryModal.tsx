import * as React from "react"
import Constants from "expo-constants"
import { FlatList, StyleSheet, TouchableOpacity } from "react-native"
import { Text, View, useThemeColor } from "./Themed"
import { Row } from "./Layout"
import { MaterialIcons } from "@expo/vector-icons"
import i18n from "i18n-js"
import categories from "../assets/goals/categories.json"
import { IconForCategory } from "./IconForCategory"
import Modal from "./Modal"

type Props = {
    visible: boolean,
    selectCategory: (c: string) => void,
    hideModal: () => void
}

const CategoryModal = ({ visible, hideModal, selectCategory }: Props): React.ReactElement => {

	// const [search, setSearch] = React.useState<string>("")

	const line = useThemeColor({colorName: "line"})
	const color = useThemeColor({colorName: "text"})
	return (
		<Modal
			hideModal={hideModal}
			visible={visible}
			title={i18n.t("Categories")}
		>
			<View style={styles.bodyContainer}>
				{/* <Row style={[styles.searchBar, {backgroundColor: line}]}>
					<TextInput
						value={search}
						onChangeText={setSearch}
						style={[styles.searchTextContainer, {backgroundColor: line}]}
					/>
					<View style={[styles.searchLogoContainer, {backgroundColor: line}]}>
						<MaterialIcons name="search" size={24} color="black" />
					</View>
				</Row> */}

				<FlatList
					data={categories}
					renderItem={(v) => (
						<TouchableOpacity onPress={() => selectCategory(v.item.name)}>
							<Row style={[styles.listItem, {backgroundColor: line}]}>
								<IconForCategory category={v.item.name} />
								<Text style={styles.sectionHeaderText}>   {v.item.name}</Text>
								<MaterialIcons name="keyboard-arrow-right" size={30} color={color} />
							</Row>
						</TouchableOpacity>
					)}
					keyExtractor={(_, index) => "" + index}
					style={styles.listContainer}
				/>
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
		flex: 1
	},
	listItem: {
		alignItems: "center",
		margin: 8,
		padding: 16,
		borderRadius: 15,
		overflow: "hidden",
	},
})
