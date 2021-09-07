import * as React from "react"
import { GestureResponderEvent, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
import { UnsplashPhoto } from "react-native-unsplash"
import { Fund } from "../../API"
import MoneyboxCardTitle from "./MoneyboxCardTitle"
import UpdateMoneyboxFormModal from "./UpdateMoneyboxFormModal"

interface GoalCardProps {
    moneybox: Fund;
    onPress?: (e: GestureResponderEvent) => void;
    key?: number;
}

const MoneyboxCard = ({ moneybox , onPress }: GoalCardProps): React.ReactElement => {

	const [visible, setVisible] = React.useState(false)

	const photo: UnsplashPhoto["urls"] = JSON.parse(moneybox.unsplashIMG || "")
	return (
		<TouchableOpacity
			onPress={(e) => {
				setVisible(true)
				if (onPress) onPress(e)
			}}
			style={styles.container}
		>

			<UpdateMoneyboxFormModal
				visible={visible}
				hideModal={() => setVisible(false)}
				moneybox={moneybox}
			/>
			<View style={styles.card}>
				<ImageBackground source={{uri: photo.regular}} style={{flex: 1}}>
					<View style={styles.metaHead}></View>
					<MoneyboxCardTitle moneybox={moneybox} />
				</ImageBackground>
			</View>
		</TouchableOpacity>
	)
}

export default MoneyboxCard

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginHorizontal: 16,
		marginVertical:8,
		borderRadius: 16,
	},
	card: {
		height: 184,
		flex: 1,
		borderRadius: 16,
		overflow: "hidden"
	},
	metaHead: {
		height: 92,
		borderRadius: 16,
		padding: 16,
	},
})
