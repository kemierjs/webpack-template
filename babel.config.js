module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					"chrome": "30",
					// "ie": "11"
				}
			}
		]
	],
	plugins: [["@babel/plugin-transform-runtime", {
		"absoluteRuntime": false,
		"corejs": 3,
		"helpers": true,
		"regenerator": true,
		"version": "7.0.0-beta.0"
	}]]
};
