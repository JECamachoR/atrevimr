import React from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParamList } from "../../types"
import WebView from "react-native-webview"

type Props = StackScreenProps<RootStackParamList, "Web">

const WebScreen = ({ route: { params: { url }} }: Props): React.ReactElement => {
	return <WebView source={{uri: url}} />
}

export default WebScreen

// const styles = StyleSheet.create({})
