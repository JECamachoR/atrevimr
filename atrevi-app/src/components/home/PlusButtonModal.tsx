import React from "react"
import { Modal, StyleSheet, TouchableOpacity } from "react-native"
import RoundButton from "./RoundButton"
import i18n from "i18n-js"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { Row } from "../Layout"
import { Text, View } from "../Themed"
import Bullseye from "../../assets/icons/goals/Bullseye"
import Piggybank from "../../assets/icons/moneyboxes/Piggybank"
import { grayscale, secondary, success } from "../../constants/Colors"


interface Props {
    visible: boolean;
    hideModal: () => void;
    goToCreateGoal: () => void,
    goToCreateMoneybox: () => void,
}

const PlusButtonModal = ({hideModal, goToCreateGoal, goToCreateMoneybox, ...props}: Props): React.ReactElement => {
    return (
        <Modal
            {...props}
            animationType="fade"
            transparent={true}
        >
            <TouchableOpacity 
                style={styles.screenBG} 
                onPress={hideModal}
                activeOpacity={1}
            >
                <TouchableWithoutFeedback style={{marginVertical: 8}}>
                    <Row style={styles.row}>
                        <TouchableOpacity onPress={() => {
                            hideModal()
                            goToCreateGoal()
                        }}>
                            <View style={[styles.textContainer, {backgroundColor: secondary.default}]}>
                                <Text style={styles.btnText}>{i18n.t("Create a Goal")}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            hideModal()
                            goToCreateGoal()
                        }}>
                            <View style={[styles.iconContainer, {backgroundColor: secondary.default}]}>
                                <Bullseye width={34} height={34} />
                            </View>
                        </TouchableOpacity>
                    </Row>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{marginVertical: 8}}>
                    <Row style={styles.row}>
                        <TouchableOpacity onPress={() => {
                            hideModal()
                            goToCreateMoneybox()
                        }}>
                            <View style={[styles.textContainer, {backgroundColor: success.dark}]}>
                                <Text style={styles.btnText}>{i18n.t("Create a Goal")}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            hideModal()
                            goToCreateMoneybox()
                        }}>
                            <View style={[styles.iconContainer, {backgroundColor: success.dark}]}>
                                <Piggybank width={34} height={34} />
                            </View>
                        </TouchableOpacity>
                    </Row>
                </TouchableWithoutFeedback>
                <RoundButton variant="times" onPress={hideModal} style={styles.roundButtonPosition} />
            </TouchableOpacity>
        </Modal>
    )
}

export default PlusButtonModal

const styles = StyleSheet.create({
    screenBG: {
        backgroundColor: "#FFFFFF80",
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    roundButtonPosition: {
        margin: 16,
        marginBottom: 80,
    },
    row: {
        backgroundColor: "#FFFFFF00",
        justifyContent: "center",
        alignItems: "center"
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 21,
        marginLeft: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    textContainer: {
        height: 32,
        width: 164,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    btnText: {
        fontFamily: "Poppins_600SemiBold",
        height: 24,
        color: grayscale.offWhite
    }
})
