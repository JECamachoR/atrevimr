import * as React from "react"
import { StyleSheet, useWindowDimensions } from "react-native"
import MoneyboxCard from "./MoneyboxCard"
import Carousel, { Pagination } from "react-native-snap-carousel"
import { Text, useThemeColor, View } from "../Themed"
import { Fund } from "../../API"
import { Row } from "../Layout"
import { t } from "i18n-js"
import { Piggybank } from "../../assets/icons/moneyboxes"

interface MoneyboxListProps {
    moneyboxes: Fund[];
}

const MoneyboxList = ({ moneyboxes } : MoneyboxListProps): React.ReactElement => {

	const [index, setIndex] = React.useState(0)

	const link = useThemeColor({colorName: "link"})
	const bg = useThemeColor({colorName: "background"})
	const {width} = useWindowDimensions()

	return (
		<View style={styles.container}>

			<Row style={styles.row}>
				<View style={[styles.svgBG, {backgroundColor: link}]}>
					<View style={styles.svgContainer}>
						<Piggybank color={bg} />
					</View>
				</View>
				<Text style={[styles.title, {color: link}]}> {t("Moneyboxes")}</Text>
			</Row>
			<View style={styles.carouselContainer}>
				<Carousel 
					data={moneyboxes}
					renderItem={({item}) => <MoneyboxCard moneybox={item} />}
					sliderWidth={width - 32|| 300}
					itemWidth={width - 32 || 300}
					onSnapToItem={(index) => setIndex(index)}
				/>{moneyboxes.length > 1 &&
				<View style={styles.pagContainer}>
					<Pagination
						dotsLength={moneyboxes.length}
						activeDotIndex={index}
						containerStyle={styles.pagContainer}
						dotStyle={[
							styles.dotStyle,
							{ backgroundColor: link }
						]}
						inactiveDotStyle={styles.inactiveDotStyle}
						dotContainerStyle={styles.dotContainer}
						inactiveDotOpacity={0.4}
						inactiveDotScale={0.6}
					/>
				</View>}
			</View>
		</View>
	)
}

export default MoneyboxList

const styles = StyleSheet.create({
	container: {
		// height: 232,
		marginHorizontal: 16,
	},
	svgBG: {
		height: 32,
		width: 32,
		borderRadius: 16,
		alignItems: "center",
		justifyContent: "center",
	},
	svgContainer: {
		transform: [
			{ scale: 0.55 }
		],
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#00000000",
	},
	row: {
		alignItems: "center",
	},
	title: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 28,
	},
	carouselContainer: {
		// height: 208
	},
	pagContainer: {
		// height: 32,
		// flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	dotContainer: {
		height: 8,
		margin: 0,
		padding: 0,
		backgroundColor: "#00000000",
	},
	dotStyle: {
		height: 8,
		width: 32,
		borderRadius: 5,
		marginHorizontal: 4,
	},
	inactiveDotStyle: {
		height: 8,
		width: 32,
	}
})
