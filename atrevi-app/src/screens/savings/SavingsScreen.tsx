import * as React from "react"
import { StyleSheet } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { Screen, Text, View } from "../../components/Themed"
import { secondary } from "../../constants/Colors"
import { Counted, GetCounterQuery, ListCountedsQuery } from "../../../API"
import Button from "../../components/Button"
import { API, Auth, graphqlOperation } from "aws-amplify"
import { getCounter, listCounteds } from "../../graphql/queries"
import { GraphQLResult } from "@aws-amplify/api-graphql"
import { createCounted } from "../../graphql/mutations"

const SavingsScreen = (): React.ReactElement => {

    const [counted, setCounted] = React.useState<(Counted | null)[]>([])
    const [refreshCounted, setRefreshCounted] = React.useState(0)
    const [count, setCount] = React.useState<number | null>()
    const loadCounted = async () => {
        try {
            const {data} = await API.graphql(graphqlOperation(listCounteds, {input:{}})) as GraphQLResult<ListCountedsQuery>
            if (data?.listCounteds?.items) setCounted(data.listCounteds.items)
        } catch (err) {
            console.error(err)
        }
    }

    React.useEffect(() => {
        loadCounted()
    }, [refreshCounted])

    return (
        <Screen>
            <View style={styles.head}>
                <Text>{count}</Text>
                <Button
                    title="addCounted"
                    onPress={async () => {
                        const {username} = await Auth.currentAuthenticatedUser()
                        const c = await API.graphql(graphqlOperation(getCounter, {id: username})) as GraphQLResult<GetCounterQuery>
                        setCount(c.data?.getCounter?.count)
                    }}
                />
            </View>
            <View style={styles.body}>
                <FlatList
                    data={counted}
                    numColumns={2}
                    renderItem={() => (
                        <View><Text>HI</Text></View>
                    )}
                />
                <Button
                    title="addCounted"
                    onPress={async () => {
                        try {
                            await API.graphql(graphqlOperation(createCounted, {input: {}}))
                        } catch (err) {
                            console.error(err)
                        }
                    }}
                />
                <Button
                    title="refresh"
                    onPress={async () => {
                        setRefreshCounted(c => c+1)
                    }}
                />
            </View>
        </Screen>
    )
}

export default SavingsScreen

const styles = StyleSheet.create({
    head: {
        flex: 1,
        backgroundColor: secondary.default
    },
    body: {
        flex: 3,
    }
})
