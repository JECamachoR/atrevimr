import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import React from "react"

type Props = {
    category: string,
    size?: number,
    color?: string,
}

export const IconForCategory = ({category, size: givenSize, color: givenColor}: Props): React.ReactElement => {
    const size = givenSize || 24
    const color = givenColor || "black"
    switch(category) {
        case "gadget-smartphone":
            return <MaterialIcons name="smartphone" size={size} color={color} />
        case "gadteg-wearable":
            return <Ionicons name="watch" size={size} color={color} />
        case "clothes-jacket":
            return <FontAwesome name="question-circle" size={size} color={color} />
        case "clothes-shoes":
            return <MaterialCommunityIcons name="shoe-formal" size={size} color={color} />
        default:
            return <FontAwesome name="question-circle" size={size} color={color} />
    }
}