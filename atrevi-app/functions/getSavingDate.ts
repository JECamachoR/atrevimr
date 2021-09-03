import { daysOfTheWeek, frequencies } from "../types"
import numberForDOTW from "./numberForDOTW"
import timeForFrequency from "./timeForFrequency"

// function getSavingDate(date: Date, frequency: "7day" | "14day" | "28day", DOTW: daysOfTheWeek) : string
// function getSavingDate(date: Date, frequency: "1day"): string
function getSavingDate (date: Date, frequency: frequencies, DOTW?: daysOfTheWeek): string {
    const n = date.getTime()
    const msInDay = 1000 * 3600 * 24
    const m = n - n % (msInDay * timeForFrequency(frequency)) + (DOTW ? msInDay * (numberForDOTW(DOTW) - 3) : 0)
    const d = new Date(m)
    return d.toISOString().split("T")[0]
}
export default getSavingDate