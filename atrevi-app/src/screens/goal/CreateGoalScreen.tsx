import * as React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Row } from "../../components/Layout"
import { Screen, Text, useThemeColor, View } from "../../components/Themed"
import { darkMode, grayscale, primary, secondary } from "../../constants/Colors"
import { MaterialIcons } from "@expo/vector-icons"
import { StackScreenProps } from "@react-navigation/stack"
import { NavParamList } from "../../../types"
import CreateGoalFormModal from "../../components/goals/CreateGoalFormModal"
import { UnsplashPhoto } from "react-native-unsplash"
import { API, graphqlOperation } from "aws-amplify"
import { createGoal } from "../../graphql/mutations"
import CreateCustomGoalCard from "../../components/goals/CreateCustomGoalCard"
import { t } from "i18n-js"

export type CreateGoalType = {
    name?: string,
    ammount?: number,
    date?: Date
    category: string,
    unsplashIMG?: UnsplashPhoto["urls"],
}

type Props = StackScreenProps<NavParamList, "CreateGoal">

const CreateGoalScreen = ({navigation}: Props): React.ReactElement => {
	const [goalFormModalOpen, setGoalFormModalOpen] = React.useState(false)
	const [goal, setGoal] = React.useState<CreateGoalType>({category: "", date: new Date()})

	const handleSubmit = async (g: CreateGoalType) => {
		try {
			await API.graphql(graphqlOperation(createGoal, {input: {
				...g, 
				date: g.date?.toISOString().split("T")[0],
				unsplashIMG: JSON.stringify(g.unsplashIMG)
			}}))
			setGoalFormModalOpen(false)
			navigation.popToTop()
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<Screen style={styles.screen}
			lightColor={secondary.default}
			darkColor={darkMode.background}
		>

			<CreateGoalFormModal
				hideModal={() => setGoalFormModalOpen(false)}
				visible={goalFormModalOpen}
				goal={goal}
				setGoal={setGoal}
				handleSubmit={handleSubmit}
			/>

			<Row style={styles.head}>
				<View style={styles.headLeft}>
					<TouchableOpacity onPress={()=>navigation.goBack()}>
						<MaterialIcons name="arrow-back" size={30} color={useThemeColor({colors: {
							light: grayscale.offWhite,
							dark: primary.default,
						}})} />
					</TouchableOpacity>
				</View>
				<View style={styles.headCenter}>
					<Text
						lightColor={grayscale.offWhite}
						darkColor={primary.default}
						style={styles.title}
					>{t("Create a Goal")}</Text>
				</View>
				<View style={styles.headRight}></View>
			</Row>

			<CreateCustomGoalCard action={() => {
				setGoalFormModalOpen(true)
				setGoal({category: ""})
			}}
			/>
			
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