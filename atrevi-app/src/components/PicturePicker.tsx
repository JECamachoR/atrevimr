import { MaterialIcons } from "@expo/vector-icons"
import * as React from "react"
import { Modal, StyleSheet, TouchableOpacity } from "react-native"
import UnsplashSearch, { UnsplashPhoto } from "react-native-unsplash"
import UnsplashKeys from "../../UnsplashKeys"
import { secondary } from "../constants/Colors"
import { useThemeColor } from "./Themed"

type Props = {
    unsplashOpen: boolean,
    closeUnsplash: () => void,
    choosePic: (photo: UnsplashPhoto["urls"]) => void
}

const PicturePicker = ({ unsplashOpen, closeUnsplash, choosePic }: Props): React.ReactElement => {

	const line = useThemeColor({colorName: "line"})

	return (
		<Modal
			visible={unsplashOpen}
			animationType="slide"
			onRequestClose={closeUnsplash}
			transparent={true}
		>
			<TouchableOpacity style={{height: 24}} onPress={closeUnsplash}>
			</TouchableOpacity>
			<UnsplashSearch
				style={[{line}, styles.container]}
				accessKey={UnsplashKeys.accessKey} 
				onPhotoSelect={(v) => {
					closeUnsplash()
					choosePic(v.urls)
				}}
				titleLabelStyle={{fontSize: 16, height: 24}}
				searchBarStyle={[styles.searchBar, {line}]}
				searchInputProps={{style: styles.searchTextContainer}}
				headerLeftComponent={() => (
					<TouchableOpacity
						style={[styles.headLeft, {marginLeft: 16, backgroundColor: "#FFFFFF00"}]}
						onPress={closeUnsplash}    
					>
						<MaterialIcons name="keyboard-arrow-down" size={28} color={secondary.default} />
					</TouchableOpacity>
				)}

			/>
		</Modal>
	)
}

export default PicturePicker

const styles = StyleSheet.create({
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
		flex: 4,
		alignItems: "center",
		justifyContent: "center",
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
		alignItems: "center",
		justifyContent: "center",
	},
})
