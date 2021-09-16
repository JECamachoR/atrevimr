import "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar"
import * as React from "react"
import { LogBox } from "react-native"
LogBox.ignoreLogs(["Setting a timer", "VirtualizedLists should never be nested inside plain ScrollViews"])
import useCachedResources from "./hooks/useCachedResources"
import useColorScheme from "./hooks/useColorScheme"
import Navigation from "./navigation"
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_800ExtraBold, useFonts } from "@expo-google-fonts/poppins"
import * as Notifications from "expo-notifications"

import Amplify from "aws-amplify"
import awsconfig from "./aws-exports"
Amplify.configure(awsconfig)

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
})

const App = (): React.ReactElement => {
	// const [expoPushToken, setExpoPushToken] = React.useState<string | undefined>("")
	// const [notification, setNotification] = React.useState<Notifications.Notification>()
	// const notificationListener = React.useRef<any>()
	// const responseListener = React.useRef<any>()
  
	// React.useEffect(() => {
	// 	registerForPushNotificationsAsync().then(token => setExpoPushToken(token))
  
	// 	notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
	// 		setNotification(notification)
	// 	})
  
	// 	responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
	// 		console.log(response)
	// 	})
  
	// 	return () => {
	// 		Notifications.removeNotificationSubscription(notificationListener.current)
	// 		Notifications.removeNotificationSubscription(responseListener.current)
	// 	}
	// }, [])

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

// async function registerForPushNotificationsAsync() {
// 	try {
// 		let token
// 		if (Constants.isDevice) {
// 			const { status: existingStatus } = await Notifications.getPermissionsAsync()
// 			let finalStatus = existingStatus
// 			if (existingStatus !== "granted") {
// 				const { status } = await Notifications.requestPermissionsAsync()
// 				finalStatus = status
// 			}
// 			if (finalStatus !== "granted") {
// 				alert("Failed to get push token for push notification!")
// 				return
// 			}
// 			token = (await Notifications.getExpoPushTokenAsync()).data
// 			console.log(token)
// 		} else {
// 			alert("Must use physical device for Push Notifications")
// 		}
      
// 		if (Platform.OS === "android") {
// 			Notifications.setNotificationChannelAsync("default", {
// 				name: "default",
// 				importance: Notifications.AndroidImportance.MAX,
// 				vibrationPattern: [0, 250, 250, 250],
// 				lightColor: "#FF231F7C",
// 			})
// 		}
      
// 		return token
// 	} catch (er) {
// 		console.error(er)
// 	}
// }