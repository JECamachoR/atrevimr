import { daysOfTheWeek, frequencies } from "../../types"
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
	const s0 = accumulateBySavingDates(goals, frequency, DOTW)
	// console.log("s0", s0)
	const s1 = filterPreviousDates(s0, startingPoint.savingDate)
	// console.log("s1", s1)
	const s2 = cumSumReq(s1)
	// console.log("s2", s2)
	const s3 = getSlope(s2, startingPoint, frequency)
	// console.log("s3", s3)
	return s3
}