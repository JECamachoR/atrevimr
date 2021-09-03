import { frequencies } from "../types"
import countPeriods from "./countPeriods"

export default function getSlope(
    r: {ammount: number, savingDate: string}[],
    startingPoint: {savingDate: string, ammount: number},
    frequency: frequencies
): [number, string] {
    const startingDate = new Date(startingPoint.savingDate)
    return r.reduce((prev, curr) => {
        const m = (curr.ammount - startingPoint.ammount) / (countPeriods(startingDate,new Date(curr.savingDate), frequency))
        return m < prev[0] ? prev : [m, curr.savingDate]
    }, [0, ""])
}