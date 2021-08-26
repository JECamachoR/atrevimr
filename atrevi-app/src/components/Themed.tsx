/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import Constants from "expo-constants"
import * as React from "react"
import { KeyboardAvoidingView as DefaultKeyboardAvoidingView, ScrollView as DefaultScrollView, Text as DefaultText, View as DefaultView } from "react-native"

import Colors from "../constants/Colors"
import useColorScheme from "../hooks/useColorScheme"

export function useThemeColor(
    props: { light?: string | undefined; dark?: string| undefined },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
): string {
    const theme = useColorScheme()
    const colorFromProps = props[theme]

    if (colorFromProps) {
        return colorFromProps
    } else {
        return Colors[theme][colorName]
    }
}

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type ScrollViewProps = ThemeProps & DefaultScrollView["props"];
export type DefaultKeyboardAvoidingViewProps = ThemeProps & DefaultKeyboardAvoidingView["props"];

export function Text(props: TextProps): React.ReactElement {
    const { style, lightColor, darkColor, ...otherProps } = props
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text")

    return <DefaultText style={[{ color }, {fontFamily:"Poppins_400Regular"}, style]} {...otherProps} />
}

export function View(props: ViewProps): React.ReactElement {
    const { style, lightColor, darkColor, ...otherProps } = props
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background")

    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}

export function ScrollView(props: ScrollViewProps): React.ReactElement {
    const { style, lightColor, darkColor, ...otherProps } = props
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background")

    return <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />
}

export function KeyboardAvoidingView(props: DefaultKeyboardAvoidingViewProps): React.ReactElement {
    const { style, lightColor, darkColor, ...otherProps } = props
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background")

    return <DefaultKeyboardAvoidingView style={[{ backgroundColor }, style]} {...otherProps} />
}

export function Screen(props: ViewProps): React.ReactElement {
    const { style, lightColor, darkColor, ...otherProps } = props
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background")

    return <View style={[{ backgroundColor, flex: 1, paddingTop: Constants.statusBarHeight }, style]} {...otherProps} />
}