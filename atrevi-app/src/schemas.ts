import * as yup from "yup"

const phoneRegEx = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/

const phoneNumber = yup.string()
	.matches(phoneRegEx, "teléfono inválido")
	.required("Requerido")

const pass = yup.string()
	.min(8, "Too short")
	.max(20, "Too long")
	.matches(/.*[A-Z]*.*/, "Uppercase letter required")
	.matches(/.*[a-z]*.*/, "Lowercase required")
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
	code: yup.string().max(6, "Demasiado Largo").min(6, "Demasiado Corto")
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
	ammount: yup.number()
		.min(0.0001, "Must be a positive ammount")
		.typeError("Please input a number")
		.required("Required"),
	date: yup.date()
})