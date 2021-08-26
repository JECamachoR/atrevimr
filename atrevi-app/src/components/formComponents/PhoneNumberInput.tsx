import * as React from "react"
import { NativeSyntheticEvent, StyleSheet, TextInputFocusEventData, TextInputSubmitEditingEventData, View, useColorScheme } from "react-native"
import { Country, CountryCode } from "react-native-country-picker-modal"
import PhoneInput from "react-native-phone-number-input"
import Colors from "../../constants/Colors"
import { Text } from "../Themed"
import InputLabel from "./InputLabel"
interface PhoneNumberInputProps {
    value: string;
    placeholder?: string;
    label?: string;
    defaultCode: CountryCode;
    onChangeText?: (e: string | React.ChangeEvent<any>) => void;
    onChangeFormattedText?: (text: string | React.ChangeEvent<any>) => void;
    onChangeCountry?: (country: Country) => void;
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>)  => void;
    returnKeyType?: "done" | "go" | "next" | "search" | "send"; 
    error?: string;
    blurOnSubmit?: boolean;
    passRef?: any;
}

const PhoneNumberInput = ({label, error, onBlur, onSubmitEditing, passRef, ...otherProps} : PhoneNumberInputProps): React.ReactElement => {
    
    const colorScheme = useColorScheme()

    const placeholderTextColor=(
        colorScheme === "dark" ?
            Colors.dark.placeholderTextColor
            :
            Colors.light.placeholderTextColor
    )
    return (
        <>
            <InputLabel label={label} />
            <View style={[
                styles.container
            ]}>
                <PhoneInput
                    {...otherProps}
                    containerStyle={[
                        (colorScheme === "dark" ? styles.darkTheme : styles.lightTheme), 
                        styles.container2,
                        (error ? {borderColor: "red"} : {}),
                    ]}
                    textInputProps={{
                        style: [
                            (colorScheme === "dark" ? styles.darkTheme : styles.lightTheme), 
                            styles.common, 
                            styles.input,
                        ],
                        placeholderTextColor: placeholderTextColor,
                        onBlur: onBlur,
                        onSubmitEditing: onSubmitEditing
                    }}
                    textContainerStyle={styles.textContainerStyle}
                    codeTextStyle={[
                        (colorScheme === "dark" ? styles.darkTheme : styles.lightTheme), 
                        styles.common,
                        styles.codeText,
                    ]}
                    disableArrowIcon={true}
                    layout="second"
                    countryPickerProps={{
                        theme: {
                            backgroundColor: colorScheme === "dark" ? styles.darkTheme.backgroundColor : styles.lightTheme.backgroundColor,
                            onBackgroundTextColor: colorScheme === "dark" ? styles.darkTheme.color : styles.lightTheme.color,
                            primaryColorVariant: colorScheme === "dark" ? styles.darkTheme.borderColor : styles.lightTheme.borderColor,
                            fontFamily: "Poppins_400Regular",
                        },
                    }}
                    countryPickerButtonStyle={[
                        styles.codePicker,
                    ]}
                    ref={passRef}
                />
            </View>
        
            <View style={styles.container}>
                {error ? <Text style={styles.errorText}>{error}</Text> : <></>}
            </View>
        </>
    )
}

export default PhoneNumberInput

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 40,
    },
    container2: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 16,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 24,
        fontSize: 20,
        lineHeight: 30,
        height: 48,
    },
    textContainerStyle: {
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderRadius: 24,
    },
    common: {
        flex: 1,
        fontSize: 20,
        lineHeight: 30,
        fontFamily: "Poppins_400Regular",
        height: 46,
    },
    input: {
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
    },
    codeText: {
        backgroundColor: "rgba(0,0,0,0)",
        paddingTop: 8,
    },
    codePicker: {
        paddingLeft: 8,
        paddingVertical: 8,
        borderRadius: 24,
        width: 80,
    },
    darkTheme: {
        backgroundColor: Colors.dark.inputBackground,
        borderColor: Colors.dark.line,
        color: Colors.dark.inputText
    },
    lightTheme: {
        backgroundColor: Colors.light.inputBackground,
        borderColor: Colors.light.line,
        color: Colors.light.inputText
    },
    label: {
        flex: 1,
        alignItems: "flex-start",
        marginHorizontal: 16,
        marginTop: 8,
        fontSize: 16,
        lineHeight: 24,
    },
    errorText: {
        marginHorizontal: 16,
        marginBottom: 8,
        color: "red",
    }
})
