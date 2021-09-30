import { daysOfTheWeek } from "../../types"

export default function numberForDOTW(DOTW: daysOfTheWeek): number {
	switch (DOTW) {
	case "monday":
		return 0
	case "tuesday":
		return 1
	case "wednesday":
		return 2
	case "thursday":
		return 3
	case "friday":
		return 4
	case "saturday":
		return 5
	default:
		return 6
        
	}
}