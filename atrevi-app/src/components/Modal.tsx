import { MaterialIcons } from "@expo/vector-icons"
import Constants from "expo-constants"
import * as React from "react"
import { Modal as DefaultModal, StyleSheet, TouchableOpacity, View as DefaultView } from "react-native"
import { Row } from "./Layout"
import { useThemeColor, Text, View, ViewProps } from "./Themed"

type Props = {
    hideModal: () => void,
    visible: boolean,
    containerProps?: ViewProps,
    modalProps?: DefaultModal["props"],
    leftComponent?: React.ReactElement,
    rightComponent?: React.ReactElement,
    children?: DefaultView["props"]["children"],
    title?: string
	onClose?: () => void,
}

const Modal = ({
	modalProps, 
	containerProps, 
	hideModal: preHideModal, 
	visible, 
	children, 
	title, 
	leftComponent,
	rightComponent,
	onClose,
}: Props): React.ReactElement => {

	const hideModal = () => {
		preHideModal()
		if (onClose) {
			onClose()
		}
	}

	return (
		<DefaultModal
			transparent={true}
			visible={visible}
			onRequestClose={hideModal}
			animationType="slide"
			onDismiss={hideModal}
			{...modalProps}
		>
			{/* <TouchableOpacity 
				activeOpacity={1}
				onPress={hideModal}
				style={{flex: 1}}
			> */}
			<View style={styles.bg}>
				{/* <TouchableWithoutFeedback> */}
				<View
					style={styles.container}
					{...containerProps}
				>
					<Row style={[styles.headRow, {borderBottomColor: useThemeColor({colorName: "line"})}]}>
						<View style={styles.headLeft}>
							{leftComponent || <TouchableOpacity onPress={hideModal}>
								<MaterialIcons name="keyboard-arrow-down" size={28} color={useThemeColor({colorName: "link"})} />
							</TouchableOpacity>}
						</View>
						<View style={styles.headCenter}>
							<Text style={styles.title}>{title}</Text>
						</View>
						<View style={styles.headRight}>
							{rightComponent}
						</View>
					</Row>
					{children}
				</View>
				{/* </TouchableWithoutFeedback> */}
			</View>
			{/* </TouchableOpacity> */}
		</DefaultModal>
	)
}

export default Modal

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
	headRow:{
		height: 44,
		borderBottomWidth: 1,
		paddingHorizontal: 16,
	},
	title: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 16,
	},
	headLeft: {
		flex: 1,
		alignItems: "flex-start",
		justifyContent: "center",
	},
	headRight: {
		flex: 1,
		alignItems: "flex-end",
		justifyContent: "center",
	},
	headTitle: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 16
	},
	headCenter: {
		flex: 2,
		alignItems: "center",
		justifyContent: "center",
	},
})
