import * as React from "react"
import { Formik } from "formik"
import { CreatePremadeGoalInput } from "../API"
import { Form, Button, Col } from "react-bootstrap"

const GoalForm = (): React.ReactElement => {
	return (
		<Formik
			initialValues={{
				name: "",
				ammount: 0,
				category: "",
				unsplashIMG: ""
			} as CreatePremadeGoalInput}
			onSubmit={console.log}
		>
			{({values, handleChange}) => {
				return (
					<Col sm={12} md={{span: 6, offset: 3}} lg={{span: 4, offset: 4}}>
						<Form>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Check me out" />
							</Form.Group>
							<Button variant="primary" type="submit">
        Submit
							</Button>
						</Form>
					</Col>
				)
			}}
		</Formik>
	)
}

export default GoalForm
