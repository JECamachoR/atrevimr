export default function cumSumReq(
	reqList: {ammount: number, savingDate: string}[]
): {ammount: number, savingDate: string}[] {
	return reqList
		.sort((a, b) => (a.savingDate > b.savingDate) ? 1 : -1)
		.map((sum => (value: {ammount: number, savingDate: string}) => {
			sum += value.ammount
			return { savingDate: value.savingDate, ammount: sum}
		})(0))
}