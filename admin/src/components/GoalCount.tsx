import { API, graphqlOperation } from "aws-amplify"
import * as React from "react"
import { Goal, ListGoalsQuery } from "../API"
import { listGoals } from "../graphql/queries"
import { GraphQLResult } from "@aws-amplify/api-graphql"

const GoalCount = (): React.ReactElement => {

	const [list, setList] = React.useState<(Goal | null)[]>([])

	React.useEffect(() => {
		(API.graphql(
			graphqlOperation(
				listGoals
			)
		) as Promise<GraphQLResult<ListGoalsQuery>>)
			.then((r) => {
				setList(r.data?.listGoals?.items || [])
			})
			.catch(e => console.error(e))
	}, [])

	return (
		<p>
			{list.length} goals. 
		</p>
	)
}

export default GoalCount