import { daysOfTheWeek, frequencies } from "../types"
import getSavingDate from "./getSavingDate"

export default function accumulateBySavingDates(
	goals: {ammount: number, date: Date}[],
	frequency: frequencies,
	DOTW: daysOfTheWeek
): {ammount: number, savingDate: string}[] {
	const r = goals.reduce((pv, curr) => {
		const d = {ammount: curr.ammount, savingDate: getSavingDate(curr.date, frequency, DOTW)}
		const n = {...pv}
		n[d.savingDate] = d.ammount + (n[d.savingDate] || 0)
		return n
	}, {} as Record<string, number>)
	return Object.keys(r).map((v) => ({ammount: r[v], savingDate: v}))
}