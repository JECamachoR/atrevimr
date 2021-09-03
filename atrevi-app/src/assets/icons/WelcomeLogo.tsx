import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgWelcomeLogo(props: SvgProps): React.ReactElement {
	return (
		<Svg
			width={114}
			height={27}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M30.994.118A.42.42 0 0030.702 0h-4.919a.43.43 0 00-.4.274l-9.871 26.389a.247.247 0 00.056.264c.047.047.11.073.177.073h5.556a.417.417 0 00.392-.274l1.85-5.727h9.409l1.85 5.725a.416.416 0 00.393.276h5.557a.25.25 0 00.177-.073.247.247 0 00.056-.264L31.094.267a.417.417 0 00-.099-.149zM25.227 15.75l3.01-8.814 3.02 8.814h-6.03zM66.62 8.25a9.793 9.793 0 00-4.69 1.312v-.42a.334.334 0 00-.339-.336h-4.62a.324.324 0 00-.324.321v9.443l-3.197 2.047a6.715 6.715 0 01-3.952 1.312c-1.503 0-2.822-.738-2.822-3.75V13.5h6.64a.322.322 0 00.321-.319v-3.86A.32.32 0 0053.314 9h-6.638V4.85a.35.35 0 00-.353-.35H41.73a.322.322 0 00-.321.319v4.176h-2.877a.324.324 0 00-.323.32v3.866a.318.318 0 00.32.319h2.88v5.237c0 4.875 2.445 8.25 8.09 8.25a9.864 9.864 0 004.138-1.126l3.01-1.836v2.656a.318.318 0 00.321.319h4.628a.322.322 0 00.32-.319V15.167a5.745 5.745 0 014.14-1.875c.902 0 2.485.09 3.624.931.082.06.197.056.27-.016a.195.195 0 00.056-.145v-5.08a7.386 7.386 0 00-3.385-.732zM80.071 8.25c-5.645 0-9.22 4.124-9.22 9.186C70.85 22.874 74.99 27 81.2 27c2.447 0 5.082-.738 6.776-1.875v-4.59a.205.205 0 00-.06-.145.211.211 0 00-.276-.018 10.732 10.732 0 01-6.44 2.14c-2.445 0-4.514-.938-5.08-3.563h11.883a.386.386 0 00.373-.29c.163-.69.163-1.263.163-2.335.007-3.58-3.01-8.074-8.468-8.074zm-3.763 6.937c.566-1.312 1.506-2.436 3.763-2.436 1.694 0 3.01 1.124 3.21 2.436h-6.973zM100.906 8.811a.412.412 0 00-.39.276l-3.542 10.224L93.43 9.089a.41.41 0 00-.393-.278h-5.181a.245.245 0 00-.23.337l6.868 17.584a.427.427 0 00.398.268h4.16a.43.43 0 00.399-.268l6.869-17.581a.248.248 0 00-.231-.34h-5.183zM108.111 9.375a.317.317 0 00-.321.319V26.68a.317.317 0 00.321.319h4.625a.32.32 0 00.323-.32V9.695a.32.32 0 00-.323-.321h-4.625zM110.745.132a.454.454 0 00-.641 0l-3.122 3.111a.451.451 0 000 .64l3.122 3.108a.454.454 0 00.641 0l3.122-3.109a.452.452 0 000-.639L110.745.132z"
				fill="#1A224C"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.424 23.103c-.551 1.469.145 3.126 1.556 3.7 1.41.575 3.001-.151 3.553-1.62l.126-.337a10.67 10.67 0 01-3.065-.869 10.859 10.859 0 01-2.044-1.21l-.126.336zm12.97-18.87a10.896 10.896 0 00-2.428-1.376 10.633 10.633 0 00-2.68-.704l.125-.336c.552-1.469 2.142-2.195 3.553-1.62 1.41.574 2.107 2.231 1.556 3.7l-.127.337z"
				fill="#1A224C"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15.193 2.953a10.02 10.02 0 00-.227-.096C9.323.56 2.96 3.462.756 9.34c-2.156 5.744.456 12.203 5.841 14.639.972.44 2.004.733 3.062.867l7.735-20.612a10.893 10.893 0 00-2.201-1.281z"
				fill="#FFF6D5"
			/>
			<Path
				d="M14.16 12.848l-2.1 5.6c-.869.269-1.776.34-2.436.172-.133-.03-.21-.102-.198-.183l.044-2.163c-.016-.144.057-.223.185-.206.723.066 1.523-.01 2.021-.192.406-.185.592-.498.469-.791-.108-.258-.595-.232-1.236-.199-1.23.065-3.03.16-3.798-1.668-.632-1.505-.08-3.033 1.39-3.962l-.226-.535c-.043-.102-.004-.226.097-.272l.787-.36a.197.197 0 01.27.105l.22.523a6.09 6.09 0 012.705-.185c.128.017.209.102.197.183l-.043 2.162c.015.145-.057.224-.186.206-.771-.073-1.607-.01-2.067.153-.393.18-.572.474-.454.755.108.256.594.229 1.235.192.945-.053 2.226-.125 3.125.665z"
				fill="#1A224C"
			/>
		</Svg>
	)
}

export default SvgWelcomeLogo