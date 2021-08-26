import * as React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Row } from "../../components/Layout"
import { Screen, Text, View } from "../../components/Themed"
import { grayscale, secondary } from "../../constants/Colors"
import i18n from "i18n-js"
import { MaterialIcons } from "@expo/vector-icons"
import { StackScreenProps } from "@react-navigation/stack"
import { NavParamList } from "../../../types"
import CreateGoalFormModal from "../../components/goals/CreateGoalFormModal"
import { UnsplashPhoto } from "react-native-unsplash"
import { API, graphqlOperation } from "aws-amplify"
import { createGoal } from "../../graphql/mutations"

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
        <Screen style={styles.screen}>

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
                        <MaterialIcons name="arrow-back" size={40} color={grayscale.offWhite} />
                    </TouchableOpacity>
                </View>
                <View style={styles.headCenter}>
                    <Text style={styles.title}>{i18n.t("Create a Goal")}</Text>
                </View>
                <View style={styles.headRight}></View>
            </Row>

            <TouchableOpacity onPress={() => {
                setGoalFormModalOpen(true)
                setGoal({category: ""})
            }}>
                <View style={styles.custom}></View>
            </TouchableOpacity>
        </Screen>
    )
}

export default CreateGoalScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: secondary.default,
    },
    head: {
        height: 48,
        margin: 16,
    },
    headLeft: {
        flex: 1,
        backgroundColor: secondary.default,
        alignItems: "center",
        justifyContent: "center",
    },
    headRight: {
        flex: 1,
        backgroundColor: secondary.default,
        alignItems: "center",
        justifyContent: "center",
    },
    headCenter: {
        flex: 4,
        backgroundColor: secondary.default,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 24,
        color: grayscale.offWhite,
    },
    custom: {
        height: 176,
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 15,
        overflow: "hidden"
    }
})