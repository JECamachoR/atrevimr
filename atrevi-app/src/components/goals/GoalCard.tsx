import * as React from "react"
import { GestureResponderEvent, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
import { Goal } from "../../../API"
import GoalTitle from "./GoalTitle"

interface GoalCardProps {
    goal: Goal;
    onPress?: (e: GestureResponderEvent) => void;
    key?: number;
}

const defIMGURI = "https://images.unsplash.com/photo-1560425946-7d5830202765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTY2MDF8MHwxfHNlYXJjaHwxfHxsb3V2cmV8ZW58MHx8fHwxNjI2MzgyNjE3&ixlib=rb-1.2.1&q=80&w=1080"


const GoalCard = ({ goal , onPress }: GoalCardProps): React.ReactElement => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <View style={styles.card}>
                <ImageBackground source={{uri: goal.imgURL || defIMGURI}} style={{flex: 1}}>
                    <View style={styles.metaHead}></View>
                    <GoalTitle goal={goal} />
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

export default GoalCard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical:8,
        borderRadius: 16,
    },
    card: {
        height: 184,
        flex: 1,
        borderRadius: 16,
        overflow: "hidden"
    },
    metaHead: {
        height: 92,
        borderRadius: 16,
        padding: 16,
    },
})
