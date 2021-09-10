import * as React from "react"
import { FlatList, ScrollView, StyleSheet } from "react-native"
import GoalFundContext from "../../contexts/GoalFundContext"
import MoneyboxesContext from "../../contexts/MoneyboxesContext"
import TransactionsContext from "../../contexts/TransactionsContext"
import { useThemeColor, View } from "../Themed"
import TransactionListHeader from "./TransactionListHeader"
import TransactionListItem from "./TransactionListItem"
import WhatIsSavings from "./WhatIsSavings"

const Separator = () => {
	const separatorColor = useThemeColor({colorName: "line"})
	return (
		<View style={[styles.separator, {backgroundColor: separatorColor}]}/>
	)
}

type Props = {
	getHelp: () => void
}

const TransactionList = ({ getHelp }: Props): React.ReactElement => {

	const transactions = React.useContext(TransactionsContext)
	const mbs = React.useContext(MoneyboxesContext)
	const goalFund = React.useContext(GoalFundContext)
	const bg = useThemeColor({colorName: "background"})
	if (!transactions.length){
		console.log("Here")
		return (
			<ScrollView style={[styles.container, {paddingTop: 16, backgroundColor: bg}]}>
				<WhatIsSavings getHelp={getHelp} />
			</ScrollView>
		)
	}
	return (
		<View style={styles.container}>
			<FlatList
				data={
					transactions
						.map((v) => {
							if (v.fundID === goalFund?.id) return {fund: goalFund, ...v}
							return {fund: mbs.find((m) => m.id === v.fundID), ...v}
						})
						.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)
				}
				renderItem={({item}) => <TransactionListItem transaction={item} />}
				keyExtractor={(_, index) => "" + index}
				ListHeaderComponent={TransactionListHeader}
				ItemSeparatorComponent={Separator}
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
