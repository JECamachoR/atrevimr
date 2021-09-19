import { API, graphqlOperation } from "aws-amplify"
import * as React from "react"
import { Fund, ListFundsQuery } from "../API"
import { listFunds } from "../graphql/queries"
import { GraphQLResult } from "@aws-amplify/api-graphql"

const MoneyboxCount = (): React.ReactElement => {

	const [list, setList] = React.useState<(Fund | null)[]>([])

	React.useEffect(() => {
		(API.graphql(
			graphqlOperation(
				listFunds
			)
		) as Promise<GraphQLResult<ListFundsQuery>>)
			.then((r) => {
				setList(r.data?.listFunds?.items || [])
			})
			.catch(e => console.error(e))
	}, [])

	return (
		<p>
			{list.filter(v => v?.name !== "goals").length} moneyboxes. 
		</p>
	)
}

export default MoneyboxCount