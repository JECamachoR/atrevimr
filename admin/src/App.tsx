import * as React from "react"
import { API, graphqlOperation } from "aws-amplify"
import { GraphQLResult } from "@aws-amplify/api-graphql"
import { listPremadeGoals } from "./graphql/queries"
import { ListPremadeGoalsQuery, PremadeGoal } from "./API"
import GoalForm from "./components/GoalForm"

const App = (): React.ReactElement => {

	const [list, setList] = React.useState<PremadeGoal[]>([])

	React.useEffect(() => {
		const initialLoad = async () => {
			try {
				const r = await API.graphql(graphqlOperation(
					listPremadeGoals
				)) as GraphQLResult<ListPremadeGoalsQuery>
				if (r.data?.listPremadeGoals?.items ) setList(r.data.listPremadeGoals.items as PremadeGoal[])
			} catch (e) {
				console.error(e)
			}
		}
		initialLoad()

	}, [])

	return (
		<div className="App">
			<GoalForm />
		</div>
	)
}

export default App