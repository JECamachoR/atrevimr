import * as React from "react"
type b = {
    id: string | null,
    birthdate: string | null,
    age: number | null,
    gender: string | null,
    ocupation: string | null,
    monthlyIncome: number | null,
    monthlySpend: number | null,
    frequency: string | null,
    yearlySavings: number | null,
    keepsSavings: string | null,
    recordKeepingPlace: string | null,
    selfRating: string | null,
}
const InitialFormContext = React.createContext<b>({
    id: null,
    birthdate: null,
    age: null,
    gender: null,
    ocupation: null,
    monthlyIncome: null,
    monthlySpend: null,
    frequency: null,
    yearlySavings: null,
    keepsSavings: null,
    recordKeepingPlace: null,
    selfRating: null,
})
