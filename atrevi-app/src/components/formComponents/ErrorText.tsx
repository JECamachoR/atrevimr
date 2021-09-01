import * as React from "react"
import { StyleSheet, Text as DefaultText } from "react-native"
import { error } from "../../constants/Colors"
import { Text } from "../Themed"

type Props = {
    error: string | undefined,
    style?: DefaultText["props"]["style"],
}

export default function ErrorText({ error, style }: Props): React.ReactElement | null {
	if (error) return <Text style={[styles.style, style]}>{error}</Text>
	else return null
}

const styles = StyleSheet.create({
	style: {
		marginBottom: 8,
		color: error.default,
	}
})