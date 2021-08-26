// import i18n from "i18n-js"
import * as Localization from "expo-localization"

const supportedLanguages = ["en", "es"]

export default function useLanguage(l: Record<typeof supportedLanguages[number], string>): string {
    const locale = Localization.locale
    console.log("locale: ", locale)
    return l[supportedLanguages.includes(locale) ? locale : "en"]
}