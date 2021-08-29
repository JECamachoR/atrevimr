import * as React from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Text, View } from "../Themed"

const TransactionList = () => {

    const [transactions, setTransactions] = React.useState([])

    return (
        <View style={styles.container}>
            <FlatList
                data={transactions}
                renderItem={() => <Text>Holi</Text>}
            />
        </View>
    )
}

export default TransactionList

const styles = StyleSheet.create({
    container: {
        flex: 2
    }
})
