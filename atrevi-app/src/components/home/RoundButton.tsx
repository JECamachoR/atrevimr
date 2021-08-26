import { FontAwesome5 } from "@expo/vector-icons"
import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { grayscale, secondary } from "../../constants/Colors"

type Props = {
    variant: "plus" | "times",
    
} & TouchableOpacity["props"]

const RoundButton = ({variant, style, ...props}: Props): React.ReactElement => {

    return (
        <TouchableOpacity style={[styles.button, style]} {...props} >
            <FontAwesome5 name={variant} size={24} color={grayscale.offWhite} />
        </TouchableOpacity>
    )
}

export default RoundButton

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: secondary.default,
        alignItems: "center",
        justifyContent: "center",
    }
})
