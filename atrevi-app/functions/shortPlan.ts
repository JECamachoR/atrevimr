import { daysOfTheWeek, frequencies } from "../types"
import accumulateBySavingDates from "./accumulateBySavingDates"
import cumSumReq from "./cumSumReq"
import filterPreviousDates from "./filterPreviousDates"
import getSlope from "./getSlope"

export default function shortPlan(
    goals: {ammount: number, date: Date}[],
    frequency: frequencies,
    DOTW: daysOfTheWeek,
    startingPoint: {ammount: number, savingDate: string}
): [number, string] {
    const s0 = filterPreviousDates(goals, new Date(startingPoint.savingDate))
    const s1 = accumulateBySavingDates(s0, frequency, DOTW)
    const s2 = cumSumReq(s1)
    const s3 = getSlope(s2, startingPoint, frequency)
    return s3
}