import * as React from "react"
import { StyleSheet, TextInput, TouchableOpacity } from "react-native"
import Modal from "../Modal"
import { Text, useThemeColor, View } from "../Themed"
import SegmentedControl from "@react-native-segmented-control/segmented-control"
import { Formik } from "formik"
import CurrencyInput from "react-native-currency-input"
import { darkMode, error, grayscale, success } from "../../constants/Colors"
import { Row } from "../Layout"
import { MaterialIcons } from "@expo/vector-icons"
import { t } from "i18n-js"
import FundPickerModal from "./FundPickerModal"
import { CreateTransactionInput, CreateTransactionMutation, Fund, UpdateFundInput } from "../../API"
import { TransactionSchema } from "../../schemas"
import API, { GraphQLResult } from "@aws-amplify/api"
import { createTransaction, updateFund } from "../../graphql/mutations"
import { graphqlOperation } from "aws-amplify"

type Props = {
    hideModal: () => void,
    visible: boolean,
}

const CreateTransactionModal = ({hideModal, visible}: Props): React.ReactElement => {

	const [nRendered, setNRendered] = React.useState(0)

	return (
		<Formik
			initialValues={{
				ammount: 0,
				concept: "",
				fund: null as Fund | null
			}}
			onSubmit={async v => {
				try {
					const {fund, ...trans} = v
					const c = await API.graphql(
						graphqlOperation(createTransaction, {input: {
							...trans,
							fundID: fund?.id
						} as CreateTransactionInput})
					) as GraphQLResult<CreateTransactionMutation>
					if (c.data?.createTransaction?.id) {
						const u = await API.graphql(
							graphqlOperation(updateFund, {input: {
								id: fund?.id,
								balance: (fund?.balance || 0) + trans.ammount
							} as UpdateFundInput})
						)
					}
					hideModal()
					setNRendered(v => v+1)
				} catch (err) {
					console.error(err)
				}
			}}
			validationSchema={TransactionSchema}
			key={nRendered}
		>
			{({values, errors, handleBlur, setFieldValue, handleChange, submitForm, resetForm }) => {

				const [pickingFund, setPickingFund] = React.useState(false)

				const color = useThemeColor({colors: {
					light: grayscale.body,
					dark: grayscale.offWhite
				}})
				const placeholder = useThemeColor({colorName: "placeholderTextColor"})

				return (
					<Modal
						hideModal={hideModal} 
						visible={visible}
						rightComponent={(
							<TouchableOpacity onPress={submitForm}>
								<View><Text style={[styles.save, {color: useThemeColor({colorName: "link"})}]}>{t("Save")}</Text></View>
							</TouchableOpacity>
						)}
						title={t("New Record")}
						onClose={resetForm}
					>

						<FundPickerModal
							visible={pickingFund}
							hideModal={() => setPickingFund(false)}
							pickFund={v => setFieldValue("fund", v)}
						/>

						<SegmentedControl
							values={["Deposit", "Withdrawal"]}
							selectedIndex={values.ammount >= 0 ? 0 : 1}
							onChange={() => setFieldValue("ammount", values.ammount * -1)}
							style={styles.segmented}
						/>
						<View style={styles.ammountContainer}>
							<CurrencyInput
								value={values.ammount}
								onChangeValue={v => setFieldValue("ammount", v)}
								onBlur={handleBlur("ammount")}
								separator="."
								delimiter=","
								style={[styles.ammount, {color: (values.ammount >= 0 ? success.dark : error.default)}]}
								showPositiveSign={true}
							/>
						</View>
						<TouchableOpacity
							style={styles.funds}
							onPress={() => setPickingFund(true)}
						>
							<Row
								style={styles.fundRow}
								lightColor={grayscale.inputBackground}
								darkColor={darkMode.inputBackground}
							>
								<Row style={styles.fundLeftSide}>
									<MaterialIcons name="account-balance" size={24} color={color} />
									<Text style={[styles.fundLabel, {color}]}> Fund</Text>
								</Row>
								<Row style={styles.fundRightSide}>
									<Text style={[styles.fundLabel, {color: placeholder}]}>{
										values.fund ? 
										((values.fund.name === "goals" ? t("Goals"): values.fund.name) + " ")
										:
										"Pick a fund"
									}</Text>
									<MaterialIcons name="keyboard-arrow-right" size={30} color={color} />
								</Row>
							</Row>
						</TouchableOpacity>

						<View>
							<Text style={styles.conceptLabel}>
								{t("Concept")}
							</Text>
						</View>
						<TextInput
							value={values.concept}
							onChangeText={handleChange("concept")}
							onBlur={handleBlur("concept")}
							style={[styles.concept, {
								backgroundColor: useThemeColor({colors: {
									light: grayscale.offWhite,
									dark: darkMode.inputBackground,
								}}),
								borderColor: useThemeColor({colorName: "line"})
							}]}
							placeholder={t("Note")}
							placeholderTextColor={useThemeColor({colorName: "placeholderTextColor"})}
						/>
					</Modal>
				)
			}}
		</Formik>
	)
}

export default CreateTransactionModal

const styles = StyleSheet.create({
	segmented: {
		margin: 16,
		marginBottom: 0,
	},
	ammount: {
		fontSize: 48,
	},
	ammountContainer: {
		height: 64,
		margin: 16,
		alignItems: "flex-end",
		justifyContent: "center"
	},
	save: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 16,
	},
	funds: {
		marginHorizontal: 16,
		borderRadius: 15,
		overflow: "hidden",
		height: 44
	},
	fundRow: {
		flex: 1,
		padding: 8,
		alignItems: "center",
	},
	fundLeftSide: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#00000000"
	},
	fundRightSide: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
		backgroundColor: "#00000000"
	},
	fundLabel: {
		fontFamily: "Poppins_600SemiBold",
		fontSize: 16,
		lineHeight: 20,
	},
	transparent: {
		backgroundColor: "#00000000"
	},
	concept: {
		marginHorizontal: 16,
		marginVertical: 8,
		height: 44,
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 15,
		overflow: "hidden",
		borderWidth: 1,
		fontFamily: "Poppins_400Regular",
		fontSize: 16,
		lineHeight: 28,
	},
	conceptLabel: {
		marginTop: 8,
		marginHorizontal: 16,
		fontSize: 12,
	}
})
