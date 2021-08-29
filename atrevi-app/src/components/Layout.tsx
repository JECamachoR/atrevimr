import * as React from "react"
import { View, ViewProps, useThemeColor } from "./Themed"

export const Col = (props : ViewProps): React.ReactElement => {
	const {style, ...otherProps} = props
	return <View style={[{flexDirection: "column"}, style]} {...otherProps} />
}

export function Row(props: ViewProps): React.ReactElement {
	const { style, lightColor, darkColor, ...otherProps } = props
    const bg = lightColor && darkColor ? 
    {colors: { light: lightColor, dark: darkColor }}
    :
    {colorName: "background"}
    const backgroundColor = useThemeColor(bg)
  
	return <View style={[{ backgroundColor, flexDirection: "row" }, style]} {...otherProps} />
}