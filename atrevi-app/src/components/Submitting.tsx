import * as React from "react"
import { StyleSheet } from "react-native"
import { Text, View } from "./Themed"

const Submitting = (): React.ReactElement => {
	return (
		<View style={styles.container}>
			<Text>
                Enviando
			</Text>
		</View>
	)
}

export default Submitting

const styles = StyleSheet.create({
	container: {
		flex:1, alignItems: "center", justifyContent:"center"
	}
})
