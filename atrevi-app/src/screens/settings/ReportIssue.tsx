import * as React from "react"
import { WebView } from "react-native-webview"

const ReportIssue = (): React.ReactElement => {
	return (
		<WebView source={{uri: "https://help-center-atrevi.webflow.io/reportes"}} />
	)
}

export default ReportIssue
