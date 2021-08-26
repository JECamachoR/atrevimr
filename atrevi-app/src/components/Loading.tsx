import * as React from "react"
import { StyleSheet } from "react-native"
import { Text, View } from "./Themed"

const Loading = (): React.ReactElement => {
	return (
		<View style={styles.container}>
			<Text>Loading...</Text>
		</View>
	)
}

export default Loading

const styles = StyleSheet.create({
	container: {flex:1, alignItems: "center", justifyContent:"center"}
})
