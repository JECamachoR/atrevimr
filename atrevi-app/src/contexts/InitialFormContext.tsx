import { FormikProps } from "formik"
import * as React from "react"
export type InitialFormGlobalTypes = {
    id: string | undefined,
    birthdate: string | undefined,
    age: number | undefined,
    gender: string | undefined,
    ocupation: string | undefined,
    monthlyIncome: number | undefined,
    monthlySpend: number | undefined,
    frequency: string | undefined,
    yearlySavings: number | undefined,
    keepsSavings: string | undefined,
    recordKeepingPlace: string | undefined,
    selfRating: string | undefined,
}

const InitialFormContext = React.createContext<FormikProps<InitialFormGlobalTypes>>(null)

export default InitialFormContext