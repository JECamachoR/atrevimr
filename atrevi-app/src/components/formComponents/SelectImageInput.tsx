import * as React from "react"
import { ImageBackground, StyleSheet, TouchableOpacity} from "react-native"
import UnsplashSearch, { UnsplashPhoto } from "react-native-unsplash"
import UnsplashKeys from "../../../UnsplashKeys"
import { Text,useThemeColor } from "../Themed"
import { MaterialIcons } from "@expo/vector-icons"

interface Props {
  imgURI?: string;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
  field: string;
  placeholder?: string;
} 

const SelectImageInput = ({ imgURI, setFieldValue, field, placeholder }: Props): React.ReactElement => {
	const [modalShown, setModalShown] = React.useState(false)
  
	const showModal = () => setModalShown(true)
  
	const onOnlinePhotoSelect = (photo: UnsplashPhoto) => {
		setModalShown(false)
		setFieldValue(field, photo.urls.regular)
	}
  
	const borderColor = useThemeColor({}, "line")
	const body = useThemeColor({}, "text")

	return (
		<>
			<TouchableOpacity 
				style={[styles.touchable, {borderColor}]}
				onPress={showModal}
			>
				<ImageBackground source={{uri: imgURI}}
					style={styles.bgImg}
				>
					{!imgURI && <><MaterialIcons name="image" size={32} color={body} />
						<Text style={[styles.text, {color: body}]}>{placeholder || " Seleccionar Imagen"}</Text></>}
				</ImageBackground>

			</TouchableOpacity>

			{modalShown && <UnsplashSearch
				style={[{borderColor}, styles.container]}
				accessKey={UnsplashKeys.accessKey} 
				onPhotoSelect={onOnlinePhotoSelect}
				titleLabelStyle={{fontSize: 8, height: 10}}
				searchBarStyle={[styles.searchBar, {borderColor}]}
				searchInputProps={{style: styles.searchInput}}
				modal={true}
			/>}
		</>
	)
}

export default SelectImageInput

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 8,
		marginHorizontal: 16,
		borderWidth: 1,
		borderTopRightRadius: 15,
		borderTopLeftRadius: 15,
	},
	searchBar: {
		flex: 1,
		flexDirection: "row",
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 40,
		marginBottom: 16,
	},
	searchInput: {
		fontFamily: "Poppins_400Regular",
		fontSize: 20,
		marginBottom: -5,
	},
	touchable: {
		margin: 16, 
		height: 200, 
		borderRadius: 15, 
		overflow: "hidden", 
		borderWidth: 1,
	},
	bgImg: {
		flex: 1, 
		alignItems: "center", 
		justifyContent: "center", 
		flexDirection: "row",
	},
	text: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 20,
	}
})
