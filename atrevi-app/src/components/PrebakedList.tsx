import * as React from "react"
import { ListRenderItemInfo, StyleSheet, useWindowDimensions, Image, TouchableOpacity } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { Bullseye } from "../assets/icons/goals"
import { Piggybank } from "../assets/icons/moneyboxes"
import { Row } from "./Layout"
import { Text, useThemeColor, View } from "./Themed"
import prebakedGoals from "../assets/goals/prebaked.json"
import prebakedMoneyboxes from "../assets/moneyboxes/prebaked.json"

import { t } from "i18n-js"
type Props = {
    variant: "goals" | "moneyboxes",
    choose: (g: typeof prebakedGoals[number]) => void
}

type HeaderProps = {
    variant: "goals" | "moneyboxes"
}

const HeaderComponent = ({ variant }: HeaderProps) => {

	const color = useThemeColor({colorName: "link"})
	const svgColor = useThemeColor({colorName: "background"})
	return (
		<View>
			<Row style={styles.headerContainer}>
				<View style={[styles.headerIconContainer, {backgroundColor: color}]}>
					<View style={styles.svgTransform}>
						{
							variant === "goals" ? 
								<Bullseye color={svgColor} /> : <Piggybank color={svgColor} />
						}
					</View>
				</View>
				<Text style={[styles.title, {color}]}>
					{t("Popular thing", {
						thing: variant === "goals" ? 
							t("Goals"):t("Moneyboxes")
					})}
				</Text>
			</Row>
			<Text style={styles.subtitle}>{
				variant === "goals" ? 
					t("Choose one of our ready-made goals") :
					t("Choose between common objectives")
			}</Text>
		</View>
	)
}

const PrebakedItem = (props: ListRenderItemInfo<typeof prebakedGoals[number]> & {onPress: Props["choose"]}): React.ReactElement => {

	const {width} = useWindowDimensions()
	const iWidth = (width - 48) / 2

	return (
		<TouchableOpacity
			style={styles.itemContainer}
			onPress={() => props.onPress(props.item)}
		>
			<Image
				source={{uri: props.item.unsplashIMG.regular}} 
				style={{
					height: iWidth,
					width: iWidth,
					borderRadius: 15,
					overflow: "hidden",
				}}
			/>
			<Text style={styles.itemName}>{props.item.name}</Text>
		</TouchableOpacity>
	)
}

const PrebakedList = ({ variant, choose }: Props): React.ReactElement => {

	return (
		<FlatList
			data={variant === "goals" ? prebakedGoals : prebakedMoneyboxes}
			renderItem={v => <PrebakedItem onPress={choose} {...v} />}
			ListHeaderComponent={() => <HeaderComponent variant={variant} />}
			keyExtractor={(_, i) => ""+i}
			style={styles.container}
			numColumns={2}
			nestedScrollEnabled
		/>
	)
}

export default PrebakedList

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 16,
	},
	headerContainer: {
		alignItems: "center",
		justifyContent: "flex-start",
	},
	headerIconContainer: {
		width: 32,
		height: 32,
		borderRadius: 16,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
	},
	svgTransform: {
		transform: [
			{scale: 0.55}
		],
		backgroundColor: "#00000000"
	},
	title: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 28,
		paddingHorizontal: 8,
	},
	subtitle: {
		fontSize: 16,
		paddingVertical: 4
	},
	itemContainer: {
		flex: 1,
		alignItems: "center",
	},
	itemName: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 16,
		lineHeight: 28,
	}
})
