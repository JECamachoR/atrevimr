import * as React from "react"
import { StyleSheet } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import TransactionsContext from "../../contexts/TransactionsContext"
import { useThemeColor, View } from "../Themed"
import TransactionListHeader from "./TransactionListHeader"
import TransactionListItem from "./TransactionListItem"

const TransactionList = (): React.ReactElement => {

	const transactions = React.useContext(TransactionsContext)

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
