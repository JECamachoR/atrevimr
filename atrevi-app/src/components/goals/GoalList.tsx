import { StackNavigationProp } from "@react-navigation/stack"
import * as React from "react"
import { FlatList, StyleSheet } from "react-native"
import { GoalParticipant } from "../../../API"
import { MainStackParamList } from "../../../types"
import GoalCard from "./GoalCard"

interface GoalListProps {
    goals: (GoalParticipant | null)[];
    onRefresh?: (() => void) | null | undefined;
    refreshing: boolean;
    navigation: StackNavigationProp<MainStackParamList, "Home">;
}

const GoalList = ({goals, onRefresh, refreshing, navigation} : GoalListProps): React.ReactElement => {
    return (
        <FlatList
            style={styles.container}
            data={goals}
            renderItem={({item} : {item: GoalParticipant | null}) => {
                if (item) {
                    return <GoalCard goal={item.goal} onPress={() => navigation.navigate("DetailGoal", {
                        goal: item.goal,
                        goalParticipantID: item.id
                    })}/>
                } else {
                    return <></>
                }
            }}
            onRefresh={onRefresh}
            refreshing={refreshing}
        />
    )
}

export default GoalList

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
