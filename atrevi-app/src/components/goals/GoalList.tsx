import * as React from "react"
import { StyleSheet, useWindowDimensions } from "react-native"
import GoalCard from "./GoalCard"
import Carousel, { Pagination } from "react-native-snap-carousel"
import { Text, useThemeColor, View } from "../Themed"
import { Goal } from "../../API"
import { Row } from "../Layout"
import { grayscale, secondary } from "../../constants/Colors"
import { Bullseye } from "../../assets/icons/goals"
import { t } from "i18n-js"

interface GoalListProps {
    goals: Goal[];
}

const GoalList = ({ goals } : GoalListProps): React.ReactElement => {

	const [index, setIndex] = React.useState(0)

	const link = useThemeColor({colorName: "link"})
	const bg = useThemeColor({colorName: "background"})
	const {width} = useWindowDimensions()

	return (
		<View style={styles.container}>

			<Row style={styles.row}>
				<View style={[styles.svgBG, {backgroundColor: link}]}>
					<View style={styles.svgContainer}>
						<Bullseye color={bg} />
					</View>
				</View>
				<Text style={[styles.title, {color: link}]}> {t("Goals")}</Text>
			</Row>
			<View style={styles.carouselContainer}>
				<Carousel 
					data={goals}
					renderItem={({item}) => <GoalCard goal={item} />}
					sliderWidth={width - 32|| 300}
					itemWidth={width - 32 || 300}
					onSnapToItem={(index) => setIndex(index)}
				/>
				<View style={styles.pagContainer}>
					<Pagination
						dotsLength={goals.length}
						activeDotIndex={index}
						containerStyle={styles.pagContainer}
						dotStyle={{
							width: 32,
							height: 8,
							borderRadius: 5,
							marginHorizontal: 4,
							backgroundColor: link
						}}
						inactiveDotStyle={{
							width: 16,
						}}
						dotContainerStyle={styles.dotContainer}
						inactiveDotOpacity={0.4}
						inactiveDotScale={0.6}
					/>
				</View>
			</View>
		</View>
	)
}

export default GoalList

const styles = StyleSheet.create({
	container: {
		height: 260,
		margin: 16,
	},
	svgBG: {
		backgroundColor: secondary.default,
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
		height: 224
	},
	pagContainer: {
		height: 32,
		backgroundColor: "#00000000",
	},
	dotContainer: {
		height: 8,
		margin: 0,
		padding: 0,
		backgroundColor: "#00000000",
	}
})
