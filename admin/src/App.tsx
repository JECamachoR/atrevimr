import * as React from "react"
import { Auth, API, graphqlOperation } from "aws-amplify"
import { GraphQLResult } from "@aws-amplify/api-graphql"
import { listUsers } from "./graphql/queries"
import { ListUsersQuery, User } from "./API"
import { withAuthenticator } from "@aws-amplify/ui-react"

const App = (): React.ReactElement => {

	const [list, setList] = React.useState<(User | null)[]>([])

	React.useEffect(() => {
		(API.graphql(
			graphqlOperation(
				listUsers
			)
		) as Promise<GraphQLResult<ListUsersQuery>>)
			.then((r) => {
				setList(r.data?.listUsers?.items || [])
			})
			.catch(e => console.error(e))
		Auth.currentAuthenticatedUser().then(console.log)
	}, [])

	// React.useEffect(() => {
	// 	const initialLoad = async () => {
	// 		try {
	// 			const r = await API.graphql(graphqlOperation(
	// 				listPremadeGoals
	// 			)) as GraphQLResult<ListPremadeGoalsQuery>
	// 			if (r.data?.listPremadeGoals?.items ) setList(r.data.listPremadeGoals.items as PremadeGoal[])
	// 		} catch (e) {
	// 			console.error(e)
	// 		}
	// 	}
	// 	initialLoad()

	// }, [])

	return (
		<div className="App">
			{/* <GoalForm /> */}
			<ul>
				{list.map((v, i) => <li key={v?.id || i}>{v?.phone}</li>)}
			</ul>
			<button
				onClick={() => {
					Auth.signOut()
				}}
			>sign out</button>
		</div>
	)
}

export default withAuthenticator(App)