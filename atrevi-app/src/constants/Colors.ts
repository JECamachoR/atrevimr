const tintColorLight = "#2f95dc"
const tintColorDark = "#fff"

export const primary = {
	default:   "#FFCC00",
	darker:    "#7C4300",
	dark:      "#D37200",
	light:     "#FFE88E",
	lighter:   "#FFF6D5",
}
export const secondary = {
	default:   "#3F51B5",
	dark:      "#1A224C",
	light:     "#CDEAFE",
	lighter:   "#E6F5FF",
}
export const info = {
	default:              "#1A9FFF",
	infoDark:         "#005999",
	infoLight:        "#99D4FF",
	infoLighter:      "#ECF7FF",
}
export const success = {
	default:    "#15D28F",
	dark:       "#009970",
	light:      "#E9FCF5",
}
export const error = {
	default:             "#EB3333",
	dark:        "#AD1F1F",
	light:       "#FDE8E8",
}
export const warning = {
	warning:           "#FFCC00",
	warningDark:      "#7C4300",
	warningLight:     "#FFF6D5",
}
export const grayscale = {
	titleActive:      "#14142A",
	body:              "#4E4B66",
	label:             "#6E7191",
	placeholder:       "#A0A3BD",
	line:              "#D9DBE9",
	inputBackground:  "#EFF0F6",
	background:        "#F7F7FC",
	offWhite:         "#FCFCFC",
}

export const darkMode = {
	background: "#000000",
	placeholder: "#8E8E90",
	inputBackground: "#1C1C1E",
	line: "#343436",
	textBG: "#242428"
}

export default {
	light: {
		text: grayscale.body,
		background: grayscale.offWhite,
		tint: tintColorLight,
		tabIconDefault: grayscale.placeholder,
		tabIconSelected: secondary.default,
		inputBackground: "#EFF0F6",
		inputText: grayscale.body,
		inputLabel: grayscale.body,
		placeholderTextColor: grayscale.placeholder,
		line: grayscale.line,
		link: secondary.default,
		subtitle: secondary.default,
		iconColor: secondary.dark,
	},
  
	dark: {
		text: grayscale.offWhite,
		background: "#000000",
		tint: tintColorDark,
		tabIconDefault: darkMode.placeholder,
		tabIconSelected: primary.default,
		inputBackground: "#1C1C1E",
		inputText: grayscale.offWhite,
		inputLabel: grayscale.offWhite,
		placeholderTextColor: "#8E8E90",
		line: "#343436",
		link: primary.default,
		subtitle: primary.default,
		iconColor: primary.default,
	},
}
