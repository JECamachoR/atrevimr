type b = {ammount: number, savingDate: string}[]

const filterPreviousDates = (a: b, d: string): b => {
	return a.filter((value) => {
		// console.log("\nvalue", value),
		// console.log("date", d)
		const v = value.savingDate > d
		// console.log(v)
		return v
	})
}

export default filterPreviousDates