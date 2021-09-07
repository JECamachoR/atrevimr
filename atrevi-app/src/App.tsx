import "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar"
import * as React from "react"
import { LogBox } from "react-native"
LogBox.ignoreLogs(["Setting a timer", "VirtualizedLists should never be nested inside plain ScrollViews"])
import useCachedResources from "./hooks/useCachedResources"
import useColorScheme from "./hooks/useColorScheme"
import Navigation from "./navigation"
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_800ExtraBold, useFonts } from "@expo-google-fonts/poppins"

import Amplify from "aws-amplify"
import awsconfig from "./aws-exports"
Amplify.configure(awsconfig)

const App = (): React.ReactElement => {
	const isLoadingComplete = useCachedResources()
	const colorScheme = useColorScheme()
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_600SemiBold,
		Poppins_800ExtraBold,
		Poppins_500Medium,
	})
  
	if (!isLoadingComplete || !fontsLoaded) {
		return <></>
	} else {
		return (
			<>
				<Navigation colorScheme={colorScheme} />
				<StatusBar style="auto"/>
			</>
		)
	}
}
export default App