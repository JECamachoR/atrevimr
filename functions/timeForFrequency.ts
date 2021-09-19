import { frequencies } from "../types"

export default function timeForFrequency(s: frequencies): number {
	const b = s.match(/(\d+)/) || []
	return Number(b[0])
}