import * as React from "react"
import { SectionList, StyleSheet, TouchableOpacity } from "react-native"
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
		>
			<SectionList
				sections={sections}
				renderSectionHeader={(v) => (
					<TouchableOpacity onPress={() => {
						if (v.section.item) {
							pickFund(v.section.item)
							hideModal()
						}
					}}>
						<View><Text>{v.section.title}</Text></View>
					</TouchableOpacity>
				)}
				renderItem={(v) => (
					<TouchableOpacity onPress={() => {
						pickFund(v.item)
						hideModal()
					}}
					>
						<View><Text>{v.item.name}</Text></View>
					</TouchableOpacity>
				)}
			/>
		</Modal>
	)
}

export default FundPickerModal

const styles = StyleSheet.create({

})
