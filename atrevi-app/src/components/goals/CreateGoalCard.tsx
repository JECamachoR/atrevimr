import React from "react"
import { StyleSheet } from "react-native"
import { grayscale, secondary } from "../../constants/Colors"
import { Col, Row } from "../Layout"
import { Text, View, useThemeColor } from "../Themed"
import MountainClimbingGuy from "../../assets/icons/goals/MountainClimbingGuy"
import Bullseye from "../../assets/icons/goals/Bullseye"
import Button from "../Button"
import i18n from "i18n-js"

type Props = {
    goToCreateGoal: () => void
}

const CreateGoalCard = ({goToCreateGoal}: Props): React.ReactElement => {
    const backgroundColor = useThemeColor({}, "background")
    const borderColor = useThemeColor({}, "line")
    return (
        <View style={styles.card}>
            <Row style={[styles.head, styles.transparent, {flex: 1}]}>
                <Col style={[styles.transparent, {flex: 1}]}>
                    <Row style={styles.titleContainer}>
                        <Bullseye width={40} height={40} />
                        <Text style={styles.title}>{i18n.t("Goals")}</Text>
                    </Row>
                </Col>
                <Col style={styles.img}>
                    <MountainClimbingGuy height={91} width={118} />
                </Col>
            </Row>

            <View style={[styles.body, {backgroundColor, borderColor}]}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {i18n.t("Do you have a target date?")}
                    </Text>
                    <Text style={styles.text}>
                        {i18n.t("Save and")}<Text style={styles.highlightText}>{i18n.t("reach it on time")}.</Text>
                    </Text>
                </View>
                <Button
                    title={i18n.t("Create a Goal")}
                    onPress={() => {
                        goToCreateGoal()
                    }}
                />
            </View>
        </View>
    )
}

export default CreateGoalCard

const styles = StyleSheet.create({
    card: {
        height: 234,
        backgroundColor: secondary.default,
        marginHorizontal: 24,
        borderRadius: 15,
        overflow: "hidden"
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
        flex: 1,
        marginRight: 16,
        marginTop: 8,
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
        color: secondary.default
    },
})