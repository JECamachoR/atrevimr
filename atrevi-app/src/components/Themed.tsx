/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import Constants from "expo-constants"
import * as React from "react"
import { KeyboardAvoidingView as DefaultKeyboardAvoidingView, ScrollView as DefaultScrollView, Text as DefaultText, View as DefaultView } from "react-native"

import Colors from "../constants/Colors"
import useColorScheme from "../hooks/useColorScheme"

export function useThemeColor({colors, colorName} : {
    colors: { light: string ; dark: string },
    colorName?: undefined
}) : string
export function useThemeColor({colors, colorName} : {
    colors?: undefined,
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
}) : string
export function useThemeColor({colors, colorName} : {
    colors?: { light: string ; dark: string } | undefined,
    colorName?: keyof typeof Colors.light & keyof typeof Colors.dark | undefined
}): string {
    const theme = useColorScheme()

    if (colors) {
        return colors[theme]
    } else if (colorName) {
        return Colors[theme][colorName]
    } else return "#FFFFFF"
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
    const bg = lightColor && darkColor ? 
    {colors: { light: lightColor, dark: darkColor }}
    :
    {colorName: "text"}
    const color = useThemeColor(bg)

    return <DefaultText style={[{ color }, {fontFamily:"Poppins_400Regular"}, style]} {...otherProps} />
}

export function View(props: ViewProps): React.ReactElement {
    const { style, lightColor, darkColor, ...otherProps } = props
    const bg = lightColor && darkColor ? 
    {colors: { light: lightColor, dark: darkColor }}
    :
    {colorName: "background"}
    const backgroundColor = useThemeColor(bg)

    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}

export function ScrollView(props: ScrollViewProps): React.ReactElement {
    const { style, lightColor, darkColor, ...otherProps } = props
    const bg = lightColor && darkColor ? 
    {colors: { light: lightColor, dark: darkColor }}
    :
    {colorName: "background"}
    const backgroundColor = useThemeColor(bg)

    return <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />
}

export function KeyboardAvoidingView(props: DefaultKeyboardAvoidingViewProps): React.ReactElement {
    const { style, lightColor, darkColor, ...otherProps } = props
    const bg = lightColor && darkColor ? 
    {colors: { light: lightColor, dark: darkColor }}
    :
    {colorName: "background"}
    const backgroundColor = useThemeColor(bg)

    return <DefaultKeyboardAvoidingView style={[{ backgroundColor }, style]} {...otherProps} />
}

export function Screen(props: ViewProps): React.ReactElement {
    const { style, lightColor, darkColor, ...otherProps } = props
    const bg = lightColor && darkColor ? 
    {colors: { light: lightColor, dark: darkColor }}
    :
    {colorName: "background"}
    const backgroundColor = useThemeColor(bg)

    return <View style={[{ backgroundColor, flex: 1, paddingTop: Constants.statusBarHeight }, style]} {...otherProps} />
}