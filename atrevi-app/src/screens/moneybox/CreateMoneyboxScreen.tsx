import * as React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Row } from "../../components/Layout"
import { Screen, Text, View } from "../../components/Themed"
import { grayscale, success } from "../../constants/Colors"
import i18n from "i18n-js"
import { MaterialIcons } from "@expo/vector-icons"
import { StackScreenProps } from "@react-navigation/stack"
import { NavParamList } from "../../../types"
import { UnsplashPhoto } from "react-native-unsplash"
// import { API, graphqlOperation } from "aws-amplify"
// import { createFund } from "../../graphql/mutations"
// import { CreateFundInput } from "../../../API"
import CreateMoneyboxFormModal from "../../components/moneyboxes/CreateMoneyboxFormModal"

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

    // const handleSubmit = async (g: CreateMoneyboxType) => {
    //     try {
    //         await API.graphql(graphqlOperation(createFund, {input: {
    //             ...g,
    //             unsplashIMG: JSON.stringify(g.unsplashIMG)
    //         } as CreateFundInput}))
    //         setMoneyboxFormModalOpen(false)
    //         navigation.popToTop()
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    const handleSubmit = console.log

    return (
        <Screen style={styles.screen}>

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
                        <MaterialIcons name="arrow-back" size={40} color={grayscale.offWhite} />
                    </TouchableOpacity>
                </View>
                <View style={styles.headCenter}>
                    <Text style={styles.title}>{i18n.t("Create a Goal")}</Text>
                </View>
                <View style={styles.headRight}></View>
            </Row>

            <TouchableOpacity onPress={() => {
                setMoneyboxFormModalOpen(true)
                setMoneybox({category: "", balance: 0})
            }}>
                <View style={styles.custom}></View>
            </TouchableOpacity>
        </Screen>
    )
}

export default CreateMoneyboxScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: success.dark,
    },
    head: {
        height: 48,
        margin: 16,
    },
    headLeft: {
        flex: 1,
        backgroundColor: success.dark,
        alignItems: "center",
        justifyContent: "center",
    },
    headRight: {
        flex: 1,
        backgroundColor: success.dark,
        alignItems: "center",
        justifyContent: "center",
    },
    headCenter: {
        flex: 4,
        backgroundColor: success.dark,
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