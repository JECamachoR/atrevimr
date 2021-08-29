import * as React from "react"
import { StyleSheet } from "react-native"
import { Screen } from "../../components/Themed"
import { darkMode, secondary } from "../../constants/Colors"
import SavingsScreenHeader from "../../components/savings/SavingsScreenHeader"
import TransactionList from "../../components/savings/TransactionList"

const SavingsScreen = (): React.ReactElement => {
    return (
        <Screen
            lightColor={secondary.default}
            darkColor={darkMode.inputBackground}
        >
            <SavingsScreenHeader />
            <TransactionList />
        </Screen>
    )
}

export default SavingsScreen

const styles = StyleSheet.create({
    head: {
        flex: 1,
        backgroundColor: secondary.default
    },
    body: {
        flex: 3,
    }
})
