import * as React from "react"
import {KeyboardAvoidingView, ScrollView} from "../../components/Themed"
import { KeyboardAvoidingView as KAV, ScrollView as SV } from "react-native"
type Props = {
    keyboardAvoidingViewProps?: KAV["props"],
    scrollViewProps?: SV["props"],
} & SV["props"]

const FormView = ({ keyboardAvoidingViewProps, ...props }:  Props): React.ReactElement => {
    return (
        <KeyboardAvoidingView {...keyboardAvoidingViewProps} >
            <ScrollView {...props} />
        </KeyboardAvoidingView>
    )
}

export default FormView