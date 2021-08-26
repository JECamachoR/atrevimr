import * as React from "react"
import { FlatList } from "react-native"
import { GoalParticipant } from "../../../API"
import { Text, View } from "../../components/Themed"

interface GoalParticipantListProps {
    participants: (GoalParticipant | null)[] | null | undefined
}

const GoalParticipantList = ({ participants }: GoalParticipantListProps): React.ReactElement => {
    return <FlatList data={participants} renderItem={({item: p, index}) => (
        <View key={index}><Text>{p?.participant.phoneNumber}</Text></View>
    )}/>
}

export default GoalParticipantList