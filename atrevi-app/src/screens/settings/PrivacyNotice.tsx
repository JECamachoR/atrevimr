import * as React from "react"
import { WebView } from "react-native-webview"

const PrivacyNotice = (): React.ReactElement => {
	return (
		<WebView source={{uri: "https://www.atrevi.mx/aviso-de-publicidad.html"}} />
	)
}

export default PrivacyNotice
