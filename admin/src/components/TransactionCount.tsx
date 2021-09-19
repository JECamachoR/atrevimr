import { API, graphqlOperation } from "aws-amplify"
import * as React from "react"
import { ListTransactionsQuery, Transaction } from "../API"
import { listTransactions } from "../graphql/queries"
import { GraphQLResult } from "@aws-amplify/api-graphql"

const TransactionCount = (): React.ReactElement => {
    
	const [list, setList] = React.useState<(Transaction | null)[]>([])

	React.useEffect(() => {
		(API.graphql(
			graphqlOperation(
				listTransactions
			)
		) as Promise<GraphQLResult<ListTransactionsQuery>>)
			.then((r) => {
				setList(r.data?.listTransactions?.items || [])
			})
			.catch(e => console.error(e))
	}, [])

	return (
		<p>
			{list.length} transactions.
		</p>
	)
}

export default TransactionCount