import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import * as React from "react"
import { ColorSchemeName } from "react-native"
import AuthContext, { AuthContextType } from "../auth/AuthContext"

import NotFoundScreen from "../screens/NotFoundScreen"
import { RootStackParamList } from "../../types"
import AuthStackNavigator from "./AuthStackNavigator"
import { API, Auth, graphqlOperation, Hub } from "aws-amplify"
import Loading from "../components/Loading"
import BottomTabNavigator from "./BottomTabNavigator"
import i18n from "i18n-js"
import * as Localization from "expo-localization"
import en from "../assets/lang/en.json"
import es from "../assets/lang/es.json"
import { getQuestions } from "../graphql/queries"
import { GraphQLResult } from "@aws-amplify/api-graphql"
import { GetQuestionsQuery } from "../API"
import InitialFormStackNavigator from "./InitialFormStackNavigator"

i18n.translations = {
	en,
	es 
}
i18n.locale = Localization.locale
i18n.fallbacks = true

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) : React.ReactElement{
	return (
		<NavigationContainer
			theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<RootStackNavigator />
		</NavigationContainer>
	)
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>()

function RootStackNavigator() {

	const [user, setUser] = React.useState<AuthContextType | null>(null)
	const [loading, setLoading] = React.useState(true)
	const [initialForm, setInitialForm] = React.useState<boolean>(false)

	React.useEffect(() => {
		(async () => {
			if (user && user?.username) {
				try {
					const q = await API.graphql(graphqlOperation(
						getQuestions,
						{
							id: user.username
						}
					)) as GraphQLResult<GetQuestionsQuery>
					if (q.data?.getQuestions?.id) {
						setInitialForm(true)
					}
				} catch (err) {
					console.error(err)
				}
			}
		})()
	}, [user])

	React.useEffect(() => {
		const updateUser = async () => {
			try {
				const user = await Auth.currentAuthenticatedUser()
				setUser(user)
			} catch {
				setUser(null)
				setLoading(false)
			}
		}
		Hub.listen("auth", updateUser) // listen for login/signup events
		updateUser() // check manually the first time because we won't get a Hub event
		return () => Hub.remove("auth", updateUser) // cleanup
	}, [])

	if (loading) {
		return <Loading />
	}

	return (
		<AuthContext.Provider value={user || {username: ""}}>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{
					user ?
						initialForm ? 
							<Stack.Screen name="Main" component={BottomTabNavigator} />
							:
							<Stack.Screen name="InitialForm" component={InitialFormStackNavigator} />
						:
						<Stack.Screen name="Auth" component={AuthStackNavigator} />
				}
				<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
			</Stack.Navigator>
		</AuthContext.Provider>
	)
}
