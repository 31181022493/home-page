const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: ["./src/js/index.js", "./src/scss/main.scss"],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: { outputStyle: "expanded", sourceMap: true },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "file-loader",
        options: {
          publicPath: "./assets/images",
          outputPath: "assets/images",
          name: "[name].[ext]",
          esModule: false,
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../dist/main.css",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/assets", to: "./assets" }],
    }),
  ],
};
