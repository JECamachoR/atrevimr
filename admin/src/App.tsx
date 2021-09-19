import * as React from "react"
import { Auth } from "aws-amplify"
import { withAuthenticator } from "@aws-amplify/ui-react"
import UserCount from "./components/UserCount"
import GoalCount from "./components/GoalCount"
import MoneyboxCount from "./components/MoneyboxCount"
import TransactionCount from "./components/TransactionCount"

const App = (): React.ReactElement => {

	return (
		<div className="App">
			<UserCount />
			<GoalCount />
			<MoneyboxCount />
			<TransactionCount />
			<button
				onClick={() => {
					Auth.signOut()
				}}
			>sign out</button>
		</div>
	)
}

export default withAuthenticator(App)