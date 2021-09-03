type b = {ammount: number, date: Date}[]

const filterPreviousDates = (a: b, d: Date): b => {
    return a.filter((value) => value.date >= d)
}

export default filterPreviousDates