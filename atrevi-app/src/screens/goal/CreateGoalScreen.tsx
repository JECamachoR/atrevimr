import * as React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Row } from "../../components/Layout"
import { Screen, ScrollView, Text, useThemeColor, View } from "../../components/Themed"
import { darkMode, grayscale, primary, secondary } from "../../constants/Colors"
import { MaterialIcons } from "@expo/vector-icons"
import { StackScreenProps } from "@react-navigation/stack"
import { NavParamList } from "../../../types"
import { daysOfTheWeek, frequencies } from "../../../../types"
import GoalForm from "../../components/goals/GoalForm"
import { UnsplashPhoto } from "react-native-unsplash"
import { API, graphqlOperation } from "aws-amplify"
import { createGoal } from "../../graphql/mutations"
import CreateCustomGoalCard from "../../components/goals/CreateCustomGoalCard"
import { t } from "i18n-js"
import getNextSavingDate from "../../../functions/getNextSavingDate"
import UserContext from "../../contexts/UserContext"
import PrebakedList from "../../components/PrebakedList"

export type CreateGoalType = {
    name?: string,
    total?: number,
    date?: Date
    category: string,
    unsplashIMG?: UnsplashPhoto["urls"],
	installments: number
}

type Props = StackScreenProps<NavParamList, "CreateGoal">

const CreateGoalScreen = ({navigation}: Props): React.ReactElement => {
	const user = React.useContext(UserContext)
	const [goalFormModalOpen, setGoalFormModalOpen] = React.useState(false)
	const [goal, setGoal] = React.useState<CreateGoalType>({
		category: "", 
		date: new Date(
			getNextSavingDate(
				new Date(),
			user.frequency as frequencies, 
			user.DOTW as daysOfTheWeek
			)
		), 
		installments: 0,
		total: 0,
	})
	const handleSubmit = async (g: CreateGoalType) => {
		try {
			await API.graphql(graphqlOperation(createGoal, {input: {
				...g, 
				date: g.date?.toISOString().split("T")[0],
				unsplashIMG: JSON.stringify(g.unsplashIMG),
                type: "1",
                frequency: user.frequency
			}}))
			setGoalFormModalOpen(false)
			navigation.popToTop()
		} catch (err) {
			console.error(err)
		}
	}
	const iconColor = useThemeColor({colors: {
		light: grayscale.offWhite,
		dark: primary.default,
	}})
	return (
		<Screen style={styles.screen}
			lightColor={secondary.default}
			darkColor={darkMode.background}
		>

			<GoalForm
				hideModal={() => setGoalFormModalOpen(false)}
				visible={goalFormModalOpen}
				goal={goal}
				handleSubmit={handleSubmit}
			/>

			<Row style={styles.head}>
				<View style={styles.headLeft}>
					<TouchableOpacity onPress={()=>navigation.goBack()}>
						<MaterialIcons name="arrow-back" size={30} color={iconColor} />
					</TouchableOpacity>
				</View>
				<View style={styles.headCenter}>
					<Text
						lightColor={grayscale.offWhite}
						darkColor={primary.default}
						style={styles.title}
					>{t("Create a Goal")}</Text>
				</View>
				<TouchableOpacity
					style={styles.headRight}
					onPress={() => navigation.navigate("Web", {
						url: "https://help-center-atrevi.webflow.io/article/metas-y-alcancias"
					})}
				>
					<MaterialIcons name="help" size={30} color={iconColor} />
				</TouchableOpacity>
			</Row>

			<ScrollView style={{flex: 1, backgroundColor: "#00000000"}}>

				<CreateCustomGoalCard action={() => {
					setGoalFormModalOpen(true)
					setGoal({category: "", installments: 0, date: new Date()})
				}}
				/>

				<PrebakedList
					variant="goals"
					choose={async (g) => {
						await setGoal(v => ({
                            name: g.name,
                            category: g.category,
                            unsplashIMG: g.unsplashIMG,
							date: v.date,
							installments: 0,
                            total: g.ammount
						}) as CreateGoalType)
						setGoalFormModalOpen(true)
					}}
				/>
			
			</ScrollView>
		</Screen>
	)
}

export default CreateGoalScreen

const styles = StyleSheet.create({
	screen: {
	},
	head: {
		height: 48,
		margin: 16,
		backgroundColor: "#00000000",
	},
	headLeft: {
		flex: 1,
		backgroundColor: "#00000000",
		alignItems: "flex-start",
		justifyContent: "center",
	},
	headRight: {
		flex: 1,
		backgroundColor: "#00000000",
		alignItems: "center",
		justifyContent: "center",
	},
	headCenter: {
		flex: 4,
		backgroundColor: "#00000000",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 24,
	},
})