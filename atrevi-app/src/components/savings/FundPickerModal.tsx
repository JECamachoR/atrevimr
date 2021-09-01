import { t } from "i18n-js"
import * as React from "react"
import { SectionList, StyleSheet, TouchableOpacity } from "react-native"
import { darkMode, grayscale } from "../../constants/Colors"
import Modal from "../Modal"
import { Text, View } from "../Themed"

type Props = {
    visible: boolean,
    hideModal: () => void,
    pickFund: (fund: {name: string, id: string}) => void,
}

const sections = [
	{title: "Goals", data: [], item: {name: "goals", id: "goals"}},
	{title: "Moneyboxes", data: [
		{name: "emergencias", id: "mb1"},
		{name: "pan", id: "mb2"}
	]}
]

const FundPickerModal = ({ visible, hideModal, pickFund }: Props): React.ReactElement => {

	return (
		<Modal
			visible={visible}
			hideModal={hideModal}
			title={t("Choose Fund")}
		>
			<SectionList
				sections={sections}
				renderSectionHeader={(v) => (
					<TouchableOpacity onPress={() => {
						if (v.section.item) {
							pickFund(v.section.item)
							hideModal()
						}
					}}
					activeOpacity={v.section.item ? 0.2 : 1}
					>
						<View style={styles.headerStyle}
							lightColor={grayscale.inputBackground}
							darkColor={darkMode.inputBackground}><Text>{v.section.title}</Text></View>
					</TouchableOpacity>
				)}
				renderItem={(v) => (
					<TouchableOpacity onPress={() => {
						pickFund(v.item)
						hideModal()
					}}
					>
						<View
							style={styles.itemStyle}
							lightColor={grayscale.inputBackground}
							darkColor={darkMode.inputBackground}
						><Text>{v.item.name}</Text></View>
					</TouchableOpacity>
				)}
				style={{marginTop: 8}}
				ListHeaderComponent={() => (
					<View style={styles.head}><Text>Your funds</Text></View>
				)}
			/>
		</Modal>
	)
}

export default FundPickerModal

const styles = StyleSheet.create({
	head: {
		height: 32,
		justifyContent: "center",
		margin: 16,
	},
	headerStyle: {
		height: 48,
		marginTop: 8,
		marginHorizontal: 16,
		borderRadius: 15,
		overflow: "hidden",
		justifyContent: "center",
		paddingHorizontal: 16,
	},
	itemStyle: {
		marginRight: 16,
		marginLeft: 32,
		marginTop: 8,
		borderRadius: 15,
		overflow: "hidden",
		justifyContent: "center",
		paddingHorizontal: 16,
		height: 48,
	}
})