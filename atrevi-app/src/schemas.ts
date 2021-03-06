import * as yup from "yup"
import { Transaction } from "./API"

const phoneRegEx = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/

const phoneNumber = yup.string()
	.matches(phoneRegEx, "teléfono inválido")
	.required("Required")

const pass = yup.string()
	.min(8, "Too short")
	.max(20, "Too long")
	.matches(/.*[A-Z].*/, "Uppercase required")
	.matches(/.*[a-z].*/, "Lowercase required")
	.required("Required")

export const SignInSchema = yup.object().shape({
	phoneNumber,
	pass
})

export const SignUpSchema = yup.object().shape({
	phoneNumber,
	pass,
})

export const PhoneVerificationSchema = yup.object().shape({
	phoneNumber,
	code: yup.string().max(6, "Too long").min(6, "Too short")
})

export const MoneyboxCreationSchema = yup.object().shape({
	name: yup.string()
		.notOneOf(["goals"], "This name is reserved")
		.min(1, "Must be at least 1 long")
		.required("Required"),
	unsplashIMG: yup.object().required("Required"),
	category: yup.string().required("Required"),
	balance: yup.number().max(0).min(0),
	recurringAmmount: yup.number().min(0.0001, "Must be a positive ammount"),
})

export const GoalCreationSchema = yup.object().shape({
	name: yup.string()
		.notOneOf(["goals"], "This name is reserved")
		.min(1, "Must be at least 1 long")
		.required("Required"),
	unsplashIMG: yup.object().required("Required"),
	category: yup.string().required("Required"),
	balance: yup.number().max(0).min(0),
	total: yup.number()
		.min(0.0001, "Must be a positive ammount")
		.typeError("Please input a number")
		.required("Required"),
	date: yup.date(),
	installments: yup.number().min(0.0001, "Must be a positive ammount"),

})

export const TransactionSchema = yup.object().shape({
    goal: yup.object()
		.typeError("Required")
		.required("Required"),
    ammount: yup.number()
		.notOneOf([0], "Can't be 0")
		.required("Required"),
    concept: yup.string()
		.min(1)
		.required("Required"),
})