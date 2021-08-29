import { t } from 'i18n-js'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { grayscale, secondary } from '../../constants/Colors'
import { Text, View } from "../Themed"


const TransactionListHeader = () => {
    return (
        <View style={styles.header}>
            <Text
                style={styles.headerText}
                lightColor={secondary.default}
                darkColor={grayscale.offWhite}
            >{t("Activity")}</Text>
        </View>
    )
}

export default TransactionListHeader
const styles = StyleSheet.create({
    container: {
        flex: 2
    },
    header: {
        margin: 16,
        marginBottom: 0,
    },
    headerText: {
        fontSize: 16,
        fontWeight: "bold",
    }
})
