import { MaterialIcons } from "@expo/vector-icons"
import Constants from "expo-constants"
import * as React from "react"
import { Modal as DefaultModal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View as DefaultView } from "react-native"
import { secondary } from "../constants/Colors"
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
}

const Modal = ({
	modalProps, 
	containerProps, 
	hideModal, 
	visible, 
	children, 
	title, 
	leftComponent,
	rightComponent
}: Props): React.ReactElement => {
	return (
		<DefaultModal
			transparent={true}
			visible={visible}
			onRequestClose={hideModal}
			animationType="slide"
			onDismiss={hideModal}
			{...modalProps}
		>
			<TouchableOpacity 
				activeOpacity={1}
				onPress={hideModal}
				style={{flex: 1}}
			>
				<View style={styles.bg}>
					<TouchableWithoutFeedback>
						<View
							style={styles.container}
							{...containerProps}
						>
							<Row style={[styles.headRow, {borderBottomColor: useThemeColor({colorName: "line"})}]}>
								<View style={styles.headLeft}>
									{leftComponent || <TouchableOpacity onPress={hideModal}>
										<MaterialIcons name="keyboard-arrow-down" size={28} color={secondary.default} />
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
					</TouchableWithoutFeedback>
				</View>
			</TouchableOpacity>
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
