import * as React from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Transaction } from '../../API'
import { grayscale } from '../../constants/Colors'
import { Text, useThemeColor, View } from "../Themed"
import TransactionListHeader from './TransactionListHeader'
import TransactionListItem from './TransactionListItem'


const boilerplateMB = {__typename: "Transaction", fund: {
    id: "",
    name: "goals"
}} as Transaction
const boilerplateGoals = {__typename: "Transaction", fund: {
    id: "",
    name: "Emergency"
}} as Transaction

const TransactionList = () => {
    const [transactions, setTransactions] = React.useState<Transaction[]>([
        {...boilerplateGoals, ammount: 15500, createdAt: "2021-08-15", updatedAt: "2021-08-15", concept: "Quincena"},
        {...boilerplateGoals, ammount: 500, createdAt: "2021-08-22", updatedAt: "2021-08-22", concept: "Domingo de mi tía"},
        {...boilerplateMB, ammount: 500, createdAt: "2021-08-22", updatedAt: "2021-08-22", concept: "Domingo de mi tía"},
        {...boilerplateGoals, ammount: 100, createdAt: "2021-08-20", updatedAt: "2021-08-20", concept: "Encontré en la mochila"},
        {...boilerplateGoals, ammount: -500, createdAt: "2021-08-29", updatedAt: "2021-08-29", concept: "Restaurante"},
    ])

    const separatorColor = useThemeColor({colorName: "line"})

    return (
        <View style={styles.container}>
            <FlatList
                data={transactions.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)}
                renderItem={({item}) => <TransactionListItem transaction={item} />}
                keyExtractor={(_, index) => "" + index}
                ListHeaderComponent={TransactionListHeader}
                ItemSeparatorComponent={() => <View style={[styles.separator, {backgroundColor: separatorColor}]}/>}
            />
        </View>
    )
}

export default TransactionList

const styles = StyleSheet.create({
    container: {
        flex: 2
    },
    separator: {
        height: 1,
        flex: 1,
        marginHorizontal: 16
    }
})
