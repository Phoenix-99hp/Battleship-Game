const path = require("path");
const HWP = require("html-webpack-plugin");

module.exports = {
	entry: path.join(__dirname, "/src/index.js"),
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "/dist"),
	},
	devServer: {
		contentBase: __dirname + "/dist",
		hot: true,
		host: "localhost",
		port: 8000,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "fonts/",
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [new HWP({ template: path.join(__dirname, "/src/index.html") })],
};
