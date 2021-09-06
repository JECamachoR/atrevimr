import { frequencies } from "../types"
import timeForFrequency from "./timeForFrequency"

export default function countPeriods (
	startDate: Date, 
	endDate: Date, 
	frequency: frequencies
): number {
	return (endDate.getTime() - startDate.getTime()) / ( 1000 * 3600 * 24 * timeForFrequency(frequency))
}