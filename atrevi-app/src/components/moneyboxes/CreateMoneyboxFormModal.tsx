import * as React from "react"
import Constants from "expo-constants"
import { ImageBackground, Modal, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native"
import { Text, View, useThemeColor } from "../Themed"
import { Row } from "../Layout"
import { MaterialIcons } from "@expo/vector-icons"
import i18n from "i18n-js"
import { grayscale, secondary, success } from "../../constants/Colors"
import FormView from "../formComponents/FormView"
import { IconForCategory } from "../IconForCategory"
import CurrencyInput from "react-native-currency-input"
import { Formik } from "formik"
import CategoryModal from "../CategoryModal"
import UnsplashKeys from "../../../UnsplashKeys"
import UnsplashSearch from "react-native-unsplash"
import { CreateMoneyboxType } from "../../screens/moneybox/CreateMoneyboxScreen"

type Props = {
    visible: boolean,
    hideModal: () => void,
    moneybox: CreateMoneyboxType,
    handleSubmit: (g: CreateMoneyboxType) => void,
    setMoneybox: React.Dispatch<React.SetStateAction<CreateMoneyboxType>>
}

const CreateMoneyboxFormModal = ({ visible, hideModal, moneybox, handleSubmit }: Props): React.ReactElement => {
    
    const line = useThemeColor({}, "line")
    const bg = useThemeColor({}, "background")
    const link = useThemeColor({}, "link")

    return (
        <Formik
            initialValues={moneybox}
            onSubmit={handleSubmit}
        >
            {({values, handleChange, handleBlur, setFieldValue, submitForm}) => {
    
                const [categoryModalOpen, setCategoryModalOpen] = React.useState(false)
                const [unsplashOpen, setUnsplashOpen] = React.useState(false)

                return (
                    <Modal
                        transparent={true}
                        visible={visible}
                        onRequestClose={hideModal}
                        animationType="slide"
                    >
                        <CategoryModal
                            hideModal={() => setCategoryModalOpen(false)}
                            visible={categoryModalOpen}
                            selectCategory={(category) => {
                                setFieldValue("category", category)
                                setCategoryModalOpen(false)
                            }}
                        />
                        <Modal
                            visible={unsplashOpen}
                            animationType="slide"
                            onRequestClose={() => setUnsplashOpen(false)}
                            transparent={true}
                        >
                            <TouchableOpacity style={{height: 24}} onPress={() => setUnsplashOpen(false)}>
                            </TouchableOpacity>
                            <UnsplashSearch
                                style={[{line}, styles.container]}
                                accessKey={UnsplashKeys.accessKey} 
                                onPhotoSelect={(v) => {
                                    setUnsplashOpen(false)
                                    setFieldValue("unsplashIMG", v.urls)
                                }}
                                titleLabelStyle={{fontSize: 16, height: 24}}
                                searchBarStyle={[styles.searchBar, {line}]}
                                searchInputProps={{style: styles.searchTextContainer}}
                                headerLeftComponent={() => (
                                    <TouchableOpacity
                                        style={[styles.headLeft, {marginLeft: 16, backgroundColor: "#FFFFFF00"}]}
                                        onPress={() => setUnsplashOpen(false)}    
                                    >
                                        <MaterialIcons name="keyboard-arrow-down" size={28} color={secondary.default} />
                                    </TouchableOpacity>
                                )}

                            />
                        </Modal>
                        <TouchableOpacity 
                            activeOpacity={1}
                            onPress={hideModal}
                            style={{flex: 1}}
                        >
                            <View style={styles.bg}>
                                <TouchableWithoutFeedback>
                                    <View style={styles.container}>
                                        <Row style={[styles.headRow, {borderBottomColor: line}]}>
                                            <View style={styles.headLeft}>
                                                <TouchableOpacity onPress={hideModal}>
                                                    <MaterialIcons name="keyboard-arrow-down" size={28} color={secondary.default} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.headCenter}>
                                                <Text>{i18n.t("Create a Goal")}</Text>
                                            </View>
                                            <TouchableOpacity style={styles.headRight} onPress={submitForm}>
                                                <Text>{i18n.t("Save")}</Text>
                                            </TouchableOpacity>
                                        </Row>
                                        <View style={styles.bodyContainer}>
                                            <FormView style={styles.formView}>
                                                <ImageBackground
                                                    style={styles.card}
                                                    source={{uri: values.unsplashIMG?.regular}}
                                                >
                                                    { values.unsplashIMG ?
                                                        <Row style={[styles.cardIMG, {alignItems: "flex-start", justifyContent: "flex-end"}]}>
                                                            <TouchableOpacity
                                                                onPress={() => setUnsplashOpen(true)}
                                                            >
                                                                <View style={{
                                                                    backgroundColor: success.dark,
                                                                    width: 30,
                                                                    height: 30,
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    borderRadius: 15,
                                                                }}>
                                                                    <MaterialIcons name="edit" size={19} color={grayscale.offWhite} />
                                                                </View>
                                                            </TouchableOpacity>
                                                        </Row>
                                                        :
                                                        <TouchableOpacity style={{flex: 1}} onPress={() => setUnsplashOpen(true)}>
                                                            <Row style={styles.cardIMG}>
                                                                <MaterialIcons name="image" size={24} color={grayscale.placeholder} />
                                                                <Text style={styles.cardIMGText}>
                                                                    {i18n.t("Choose a photo")}
                                                                </Text>
                                                            </Row>
                                                        </TouchableOpacity>
                                                    }
                                                    <View style={[styles.cardTitleContainer, {borderColor: line}]}>
                                                        <TextInput
                                                            placeholder={i18n.t("Name your goal")}
                                                            value={values.name || ""}
                                                            onChangeText={handleChange("name")}
                                                            onBlur={handleBlur("name")}
                                                            style={styles.cardTitle}
                                                        />
                                                    </View>
                                                </ImageBackground>
                                                <TouchableOpacity onPress={() => setCategoryModalOpen(true)}>
                                                    {
                                                        values.category ? 
                                                            (
                                                                <Row style={[styles.changeCategory, {backgroundColor: success.dark}]}>
                                                                    <IconForCategory category={values.category} color={bg} />
                                                                    <View style={styles.chooseCategoryTextContainer}>
                                                                        <Text style={[styles.chooseCategoryText, {color: bg}]}>  {values.category}</Text>
                                                                    </View>
                                                                    <MaterialIcons name="keyboard-arrow-right" size={28} color={line} />
                                                                </Row>
                                                            )
                                                            :(
                                                                <Row style={[styles.chooseCategory, {borderColor: line}]}>
                                                                    <View style={styles.chooseCategoryTextContainer}>
                                                                        <Text style={[styles.chooseCategoryText, {color: line}]}>
                                                                            {i18n.t("Choose a category")}
                                                                        </Text>
                                                                    </View>
                                                                    <MaterialIcons name="keyboard-arrow-right" size={28} color={line} />
                                                                </Row>
                                                            )}
                                                </TouchableOpacity>
                                                <View>
                                                    <Text style={styles.subtitle}>{i18n.t("Savings")}</Text>
                                                    <Text style={styles.label}>{i18n.t("How much do you need?")}</Text>
                                                    <CurrencyInput
                                                        value={values.recurringAmmount || 0}
                                                        onChangeValue={(v) => setFieldValue("recurringAmmount", v)}
                                                        onBlur={handleBlur("recurringAmmount")}
                                                        style={[styles.currencyInput, {borderColor: line}]}
                                                        prefix="$ "
                                                        suffix=" MXN"
                                                        separator="."
                                                    />
                                                </View>

                                                <View style={[styles.estimateCard, {borderColor: line}]}></View>
                                            </FormView>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </TouchableOpacity>
                    </Modal>
    
                )
            }}
        </Formik>)
}

export default CreateMoneyboxFormModal

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: "#FFFFFF00"
    },
    container: {
        flex: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: "hidden",
    },
    headRow:{
        height: 44,
        borderBottomWidth: 1,
        paddingHorizontal: 16,
    },
    headLeft: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
    },
    headRight: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
    },
    headTitle: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 16
    },
    headCenter: {
        flex: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    bodyContainer: {
        flex: 1
    },
    searchBar: {
        height: 38,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 15,
        overflow: "hidden"
    },
    searchTextContainer: {
        flex: 5,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    searchLogoContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    listContainer: {
        flex: 1,
        marginHorizontal: 16,
    },
    sectionHeaderContainer: {
        height: 48,
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 16,
        borderRadius: 8,
        marginVertical: 8,
    },
    sectionHeaderText: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 16,
    },
    listItem: {
        alignItems: "center",
        margin: 8,
    },
    formView: {
        marginTop: 16,
        marginHorizontal: 24,
    },
    card: {
        flex: 1,
        height: 152,
        borderRadius: 15,
        overflow: "hidden",
        backgroundColor: grayscale.inputBackground
    },
    cardIMG: {
        flex: 1,
        backgroundColor: "#FFFFFF00",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    cardIMGText: {
        color: grayscale.placeholder,
        fontFamily: "Poppins_600SemiBold",
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "700",
    },
    cardTitleContainer: {
        height: 60,
        flex: 1,
        borderRadius: 15,
        borderWidth: 1,
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    cardTitle: {
        flex: 1,
        marginVertical: 15,
    },
    chooseCategory: {
        flex: 1,
        height: 44,
        borderRadius: 15,
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 16,
        overflow: "hidden",
        marginVertical: 16,
    },
    chooseCategoryTextContainer: {
        flex: 5,
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#FFFFFF00",
    },
    chooseCategoryText: {
    },
    changeCategory: {
        flex: 1,
        height: 44,
        borderRadius: 15,
        paddingVertical: 8,
        paddingHorizontal: 16,
        overflow: "hidden",
        marginVertical: 16,
        borderWidth: 0,
    },
    changeCategoryTextContainer: {
        flex: 5,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    changeCategoryText: {},
    subtitle: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 20,
    },
    label: {
        fontSize: 16,
        lineHeight: 28,
    },
    currencyInput: {
        height: 48,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 16,
        marginTop: 8,
        marginBottom: 16,
    },
    estimateCard: {
        height: 132,
        flex: 1,
        marginVertical: 16,
        borderRadius: 15,
        borderWidth: 1,
    },
})