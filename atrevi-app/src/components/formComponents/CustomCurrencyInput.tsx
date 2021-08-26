import * as React from "react"
import { StyleSheet, View, useColorScheme } from "react-native"
import Colors from "../../constants/Colors"
import CurrencyInput from "react-native-currency-input"
import InputLabel from "./InputLabel"

interface CustomCurrencyInputProps {
    label?: string;
    delimiter?: string;
    maxValue?: number;
    minValue?: number;
    precision?: number;
    separator?: string;
    prefix?: string;
    suffix?: string;
    value: number | null;
    showPositiveSign?: boolean;
    signPosition?: "beforePrefix" | "afterPrefix";
    placeholder?: string;
    onChangeValue: (e: any) => void;
    onBlur: (e: any) => void;
    passRef?: any;
}

const CustomCurrencyInput = ({onChangeValue, label, passRef, ...otherProps} : CustomCurrencyInputProps ): React.ReactElement => {
    const colorScheme = useColorScheme()
    
    return (
        <>
            <InputLabel label={label} />
            <View style={styles.container}>
                <CurrencyInput
                    onChangeValue={v => onChangeValue({target: {value: v}})}
                    prefix="$"
                    delimiter=","
                    separator="."
                    precision={2}
                    {...otherProps}
                    style={[
                        (colorScheme === "dark" ? styles.darkTheme : styles.lightTheme), 
                        styles.common,
                    ]}
                    placeholderTextColor={
                        colorScheme === "dark" ?
                            Colors.dark.placeholderTextColor
                            :
                            Colors.light.placeholderTextColor
                    }
                    ref={passRef}
                />
            </View>
        </>
    )
}

export default CustomCurrencyInput

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    common: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 16,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 24,
        fontSize: 20,
        fontFamily: "Poppins_400Regular",
        lineHeight: 30,
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
        fontSize: 16,
        lineHeight: 24,
        marginTop: 8,
    }
})
