import * as React from "react"
import { Screen } from "../../components/Themed"
import { darkMode, secondary } from "../../constants/Colors"
import SavingsScreenHeader from "../../components/savings/SavingsScreenHeader"
import TransactionList from "../../components/savings/TransactionList"
import CreateTransactionModal from "../../components/savings/CreateTransactionModal"
import { StackScreenProps } from "@react-navigation/stack"
import { SavingsStackParamList } from "../../../types"

type Props = StackScreenProps<SavingsStackParamList, "Savings">

const SavingsScreen = ({ navigation }: Props): React.ReactElement => {

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
			<SavingsScreenHeader 
				openCreateTransactionModal={() => setCreateTransactionModalShown(true)}
				openConfig={() => navigation.navigate("UpdateSavings")}
				getHelp={() => navigation.navigate("Web", {url: "https://help-center-atrevi.webflow.io/article/ahorro"})}
			/>
			
			<TransactionList getHelp={() => navigation.navigate("Web", {url: "https://help-center-atrevi.webflow.io/article/ahorro"})} />
			
		</Screen>
	)
}

export default SavingsScreen