const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
	mode: "development",

	entry: ["./src/main.js"],

	// stats: "errors-only",

	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "./dist"),
		clean: true,
		publicPath: ""
	},
	target: ["web", "es5"],
	plugins: [new HtmlWebpackPlugin({
		hash: true,
		template: "./public/index.html"
	}),
		new MiniCssExtractPlugin()],

	resolve: {
		extensions: [".js"],
		fallback: {}
	},
	// cache: {
	// 	type: "filesystem"
	// },

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			},
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: [{
					loader: "babel-loader",
				}]
			}
		]
	},

	devServer: {
		host: "0.0.0.0",
		hot: true
	}
};
