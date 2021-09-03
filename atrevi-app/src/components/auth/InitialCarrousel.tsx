import * as React from "react"
import { StyleSheet, useWindowDimensions, View } from "react-native"
import Carousel, { Pagination } from "react-native-snap-carousel"
import { useThemeColor } from "../Themed"
import CarrouselItem from "./CarrouselItem"

const InitialCarrousel = (): React.ReactElement => {

	const [i, setI] = React.useState(0)
	const {width} = useWindowDimensions()
	const link = useThemeColor({colorName: "link"})

	return (
		<View style={styles.container}>
			<View>
				<Carousel 
					data={[1,2,3]}
					renderItem={(v) => <CarrouselItem itemNumber={v.item}/>}
					onSnapToItem={(i) => setI(i)}
					pagingEnabled={true}
					sliderWidth={width - 32|| 300}
					itemWidth={width - 32 || 300}
				/>
			</View>
        
			<View style={styles.pagContainer}>
				<Pagination
					dotsLength={3}
					activeDotIndex={i}
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
			</View>
		</View>
	)
}

export default InitialCarrousel

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	pagContainer: {
		height: 32,
		flex: 1,
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
		width: 32,
		height: 8,
		borderRadius: 5,
		marginHorizontal: 4,
	},
	inactiveDotStyle: {
		height: 8,
		width: 32,
	}
})
