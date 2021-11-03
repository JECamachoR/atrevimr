import { t } from "i18n-js"
import * as React from "react"
import { SectionList, StyleSheet, TouchableOpacity } from "react-native"
import { darkMode, grayscale } from "../../constants/Colors"
import GoalsContext from "../../contexts/GoalsContext"
import Modal from "../Modal"
import { Text, View } from "../Themed"

type Props = {
    visible: boolean,
    hideModal: () => void,
    pickGoal: (goal: {name: string, id: string}) => void,
}

const GoalPickerModal = ({ visible, hideModal, pickGoal }: Props): React.ReactElement => {

    const goals = React.useContext(GoalsContext)

	const data = goals.map(v => ({title: v.name, data: [], item: v}))

	return (
		<Modal
			visible={visible}
			hideModal={hideModal}
			title={t("Choose Fund")}
		>
			<SectionList
				sections={data}
				renderSectionHeader={(v) => (
					<TouchableOpacity onPress={() => {
						if (v.section.item) {
							pickGoal(v.section.item)
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
						pickGoal(v.item)
						hideModal()
					}}
					>
						<View
							style={styles.itemStyle}
							lightColor={grayscale.inputBackground}
							darkColor={darkMode.inputBackground}
						><Text>{"hello"}</Text></View>
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

export default GoalPickerModal

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
