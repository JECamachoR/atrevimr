import { StyleSheet, TouchableOpacity } from "react-native"
import { Screen, View, useThemeColor } from "../../components/Themed"
import * as React from "react"
import useColorScheme from "../../hooks/useColorScheme"
import HomeLogoDark from "../../assets/icons/HomeLogoDark"
import HomeLogoLight from "../../assets/icons/HomeLogoLight"
import { MaterialIcons } from "@expo/vector-icons"
import CreateGoalCard from "../../components/goals/CreateGoalCard"
import CreateMoneyboxCard from "../../components/moneyboxes/CreateMoneyboxCard"
import RoundButton from "../../components/home/RoundButton"
import PlusButtonModal from "../../components/home/PlusButtonModal"
import { StackScreenProps } from "@react-navigation/stack"
import { NavParamList } from "../../../types"

type Props = StackScreenProps<NavParamList, "Home">

const HomeScreen = ({ navigation }: Props) : React.ReactElement =>  {

    const [plusButtonModalOpen, setPlusButtonModalOpen] = React.useState(false)

    const colorScheme = useColorScheme()
    const iconColor = useThemeColor({colorName: "iconColor"})

    return (
        <Screen>

            <PlusButtonModal 
                visible={plusButtonModalOpen} 
                hideModal={() => setPlusButtonModalOpen(false)} 
                goToCreateGoal={()=> navigation.navigate("CreateGoal")}
                goToCreateMoneybox={()=> navigation.navigate("CreateMoneybox")}
            />

            <View style={styles.titleRow} >
                <View style={styles.logo} >
                    {colorScheme === "dark" ? <HomeLogoDark /> : <HomeLogoLight height={30} width={127} /> }
                </View>
                <View style={styles.rightHalfTitle} >
                    <TouchableOpacity
                        onPress={() => alert("notifications :)")}
                    >
                        <MaterialIcons name="notifications" size={36} color={iconColor} />
                    </TouchableOpacity>
                </View>
            </View>

            <CreateGoalCard goToCreateGoal={() => navigation.navigate("CreateGoal")} />

            <CreateMoneyboxCard goToCreateMoneybox={() => navigation.navigate("CreateMoneybox")} />

            <RoundButton variant="plus" onPress={() => setPlusButtonModalOpen(true)} style={styles.roundButtonPosition}/>
        </Screen>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    titleRow: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    logo: {
        flex: 1,
        alignItems: "flex-start",
    },
    rightHalfTitle: {
        flex: 1,
        justifyContent: "flex-end",
        flexDirection: "row"
    },
    goalList: {
        flex: 1,
        paddingHorizontal: 16,
    },
    roundButtonPosition: {
        position: "absolute",
        right: 16,
        bottom: 16,
    }
})
