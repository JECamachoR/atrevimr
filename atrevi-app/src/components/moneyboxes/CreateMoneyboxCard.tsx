import React from "react"
import { StyleSheet } from "react-native"
import { grayscale, success } from "../../constants/Colors"
import { Col, Row } from "../Layout"
import { Text, View, useThemeColor } from "../Themed"
import DudeWithCheck from "../../assets/svg/moneyboxes/DudeWithCheck.svg"
import Piggybank from "../../assets/svg/moneyboxes/Piggybank.svg"
import Button from "../Button"
import i18n from "i18n-js"

type Props = {
    goToCreateMoneybox: () => void,
}

const CreateMoneyboxCard = ({goToCreateMoneybox}: Props): React.ReactElement => {
    const backgroundColor = useThemeColor({}, "background")
    const borderColor = useThemeColor({}, "line")
    return (
        <View style={styles.card}>
            <Row style={[styles.head, styles.transparent, {flex: 1}]}>
                <Col style={[styles.transparent, {flex: 1}]}>
                    <Row style={styles.titleContainer}>
                        <Piggybank height={40} width={40} />
                        <Text style={styles.title}>{i18n.t("Moneybox")}</Text>
                    </Row>
                </Col>
                <Col style={styles.img}>
                    <DudeWithCheck height={78} width={78} />
                </Col>
            </Row>

            <View style={[styles.body, {backgroundColor, borderColor}]}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {i18n.t("Save")} <Text style={styles.highlightText}>{i18n.t("without a timeframe")}.</Text>
                    </Text>
                </View>
                <Button
                    title={i18n.t("Create a Moneybox")}
                    onPress={() => {
                        goToCreateMoneybox()
                    }}
                    variant="successDark"
                />
            </View>
        </View>
    )
}

export default CreateMoneyboxCard

const styles = StyleSheet.create({
    card: {
        height: 234,
        backgroundColor: success.dark,
        marginHorizontal: 24,
        borderRadius: 15,
        overflow: "hidden",
        marginTop: 16,
    },
    head: {
        height: 96,
    },
    body: {
        height: 138,
        borderWidth: 1,
        borderRadius: 15,
        paddingBottom: 8,
    },
    title: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 32,
        lineHeight: 48,
        color: "white"
    },
    titleContainer: {
        flex: 1,
        marginLeft: 16,
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0)",
    },
    img: {
        marginRight: 16,
        marginTop: 16,
        width: 94,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0)",
    },
    textContainer: {
        flex: 1,
        margin: 16,
        marginBottom: 0,
        borderRadius: 8,
        backgroundColor: grayscale.background,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontFamily: "Poppins_400Regular",
        fontSize: 13,
        lineHeight: 19
    },
    transparent: {
        backgroundColor: "rgba(0, 0, 0, 0)"
    },
    highlightText: {
        color: success.dark
    },
})