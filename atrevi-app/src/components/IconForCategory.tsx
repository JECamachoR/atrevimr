import { AntDesign, FontAwesome, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import React from "react"
import categories from "../assets/goals/categories.json"
import mbCategories from "../assets/moneyboxes/categories.json"
import { useThemeColor } from "./Themed"

type Props = {
    category: typeof categories[number]["name"] | typeof mbCategories[number]["name"],
    size?: number,
    color?: string,
}

export const IconForCategory = ({category, size: givenSize, color: givenColor}: Props): React.ReactElement => {
	const size = givenSize || 24
	const color = useThemeColor({colorName: "text"})

	const usedColor = givenColor || color

	switch(category) {
	case "Travel": 
		return <FontAwesome name="wpexplorer" size={24} color={usedColor} />
	case "Events": 
		return <Foundation name="ticket" size={24} color={usedColor} />
	case "Gadgets": 
		return <MaterialIcons name="devices" size={24} color={usedColor} />
	case "Shopping": 
		return <AntDesign name="shoppingcart" size={24} color={usedColor} />
	case "Education": 
		return <MaterialCommunityIcons name="school-outline" size={24} color={usedColor} />
	case "Home": 
		return <Ionicons name="ios-home-outline" size={24} color={usedColor} />
	case "Transportation": 
		return <MaterialIcons name="emoji-transportation" size={24} color={usedColor} />
	case "Investment": 
		return <MaterialCommunityIcons name="trending-up" size={24} color={usedColor} />
	default:
		return <MaterialIcons name="category" size={24} color={usedColor} />
	}
}