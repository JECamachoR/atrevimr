import { API, graphqlOperation } from "aws-amplify"
import * as React from "react"
import { ListUsersQuery, User } from "../API"
import { listUsers } from "../graphql/queries"
import { GraphQLResult } from "@aws-amplify/api-graphql"

const UserCount = (): React.ReactElement => {
    
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
	}, [])

	return (
		<p>
			{list.length} users.
		</p>
	)
}

export default UserCount