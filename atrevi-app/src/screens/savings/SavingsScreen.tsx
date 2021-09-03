import * as React from "react"
import { Screen } from "../../components/Themed"
import { darkMode, secondary } from "../../constants/Colors"
import SavingsScreenHeader from "../../components/savings/SavingsScreenHeader"
import TransactionList from "../../components/savings/TransactionList"
import CreateTransactionModal from "../../components/savings/CreateTransactionModal"

const SavingsScreen = (): React.ReactElement => {

	const [createTransactionModalShown, setCreateTransactionModalShown] = React.useState(false)

	return (
		<Screen
			lightColor={secondary.default}
			darkColor={darkMode.inputBackground}
		>
			<CreateTransactionModal 
				visible={createTransactionModalShown}
				hideModal={() => setCreateTransactionModalShown(false)}
			/>
			<SavingsScreenHeader openCreateTransactionModal={() => setCreateTransactionModalShown(true)} />
			<TransactionList />
		</Screen>
	)
}

export default SavingsScreen