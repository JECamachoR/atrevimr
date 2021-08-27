import React from "react"
import { StyleSheet } from "react-native"
import { darkMode, grayscale, primary, secondary } from "../../constants/Colors"
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
    const backgroundColor = useThemeColor({colorName: "background"})
    const borderColor = useThemeColor({colorName: "line"})
    return (
        <View style={styles.card} 
        darkColor={primary.default}
        lightColor={secondary.default}>
            <Row style={[styles.head, styles.transparent, {flex: 1}]}>
                <Col style={[styles.transparent, {flex: 1}]}>
                    <Row style={styles.titleContainer}>
                        <Bullseye width={40} height={40} color={backgroundColor} />
                        <Text style={[styles.title, {color: backgroundColor}]}>{i18n.t("Goals")}</Text>
                    </Row>
                </Col>
                <Col style={styles.img}>
                    <MountainClimbingGuy />
                </Col>
            </Row>

            <View 
                style={[styles.body, {borderColor}]}
                lightColor={grayscale.offWhite}
                darkColor={darkMode.inputBackground}
            >
                <View style={styles.textContainer}
                    lightColor={grayscale.background}
                    darkColor={darkMode.textBG}
                >
                    <Text style={styles.text}
                        lightColor={grayscale.body}
                        darkColor={primary.default}
                    >
                        {i18n.t("Do you have a target date?")}
                    </Text>
                    <Text style={styles.text}
                        lightColor={grayscale.body}
                        darkColor={primary.default}
                    >
                        {i18n.t("Save and")}<Text
                        lightColor={grayscale.body}
                        darkColor={primary.default}>{i18n.t("reach it on time")}.</Text>
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
        alignItems: "flex-start",
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0)",
        transform: [
            {scaleX: -1}
        ]
    },
    textContainer: {
        flex: 1,
        margin: 16,
        marginBottom: 0,
        borderRadius: 8,
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
})