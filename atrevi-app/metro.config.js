// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig } = require("@expo/metro-config")

const defaultConfig = getDefaultConfig(__dirname)

defaultConfig.resolver.blacklistRE = /#current-cloud-backend[\\/].*/
defaultConfig.transformer = {
	getTransformOptions: async () => ({
		transform: {
			experimentalImportSupport: false,
			inlineRequires: false,
		},
	}),
},

module.exports = defaultConfig
// module.exports = {
//   resolver: {
//     blacklistRE: /#current-cloud-backend[\\/].*/
//   },
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
// };