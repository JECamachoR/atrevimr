import * as React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Row } from "../../components/Layout"
import { Screen, Text, useThemeColor, View } from "../../components/Themed"
import { darkMode, grayscale, primary, success } from "../../constants/Colors"
import i18n from "i18n-js"
import { MaterialIcons } from "@expo/vector-icons"
import { StackScreenProps } from "@react-navigation/stack"
import { NavParamList } from "../../../types"
import { UnsplashPhoto } from "react-native-unsplash"
// import { API, graphqlOperation } from "aws-amplify"
// import { createFund } from "../../graphql/mutations"
// import { CreateFundInput } from "../../../API"
import CreateMoneyboxFormModal from "../../components/moneyboxes/CreateMoneyboxFormModal"
import { API, graphqlOperation } from "aws-amplify"
import { CreateFundInput } from "../../API"
import { createFund } from "../../graphql/mutations"
import CreateCustomMoneyboxCard from "../../components/moneyboxes/CreateCustomMoneyboxCard"

export type CreateMoneyboxType = {
    name?: string,
    balance: number,
    recurringAmmount?: number | null,
    category?: string | null,
    unsplashIMG?: UnsplashPhoto["urls"],
}

type Props = StackScreenProps<NavParamList, "CreateGoal">

const CreateMoneyboxScreen = ({navigation}: Props): React.ReactElement => {
	const [moneyboxFormModalOpen, setMoneyboxFormModalOpen] = React.useState(false)
	const [moneybox, setMoneybox] = React.useState<CreateMoneyboxType>({category: "", balance: 0})

	const handleSubmit = async (g: CreateMoneyboxType) => {
		try {
			await API.graphql(graphqlOperation(createFund, {input: {
				...g,
				unsplashIMG: JSON.stringify(g.unsplashIMG)
			} as CreateFundInput}))
			setMoneyboxFormModalOpen(false)
			navigation.popToTop()
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<Screen
			style={styles.screen}
			lightColor={success.dark}
			darkColor={darkMode.background}
		>

			<CreateMoneyboxFormModal
				hideModal={() => setMoneyboxFormModalOpen(false)}
				visible={moneyboxFormModalOpen}
				moneybox={moneybox}
				setMoneybox={setMoneybox}
				handleSubmit={handleSubmit}
			/>

			<Row style={styles.head}>
				<View style={styles.headLeft}>
					<TouchableOpacity onPress={()=>navigation.goBack()}>
						<MaterialIcons name="arrow-back" size={40} color={useThemeColor({colors: {
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
					>{i18n.t("Create a Moneybox")}</Text>
				</View>
				<View style={styles.headRight}></View>
			</Row>

			<CreateCustomMoneyboxCard action={() => {
				setMoneyboxFormModalOpen(true)
				setMoneybox({category: "", balance: 0})
			}}/>
		</Screen>
	)
}

export default CreateMoneyboxScreen

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