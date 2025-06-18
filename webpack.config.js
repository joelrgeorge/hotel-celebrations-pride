// webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProd ? "production" : "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(mp4|webm|ogg)$/i,
        type: "asset/resource",
        generator: {
          filename: "videos/[name][hash][ext][query]",
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_API_URL": JSON.stringify(process.env.REACT_APP_API_URL),
      "process.env.REACT_APP_SUBMIT_FORM_URL": JSON.stringify(process.env.REACT_APP_SUBMIT_FORM_URL),
      "process.env.REACT_APP_SUBMIT_CONTACT_URL": JSON.stringify(process.env.REACT_APP_SUBMIT_CONTACT_URL),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: ".",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
  devServer: {
    static: [
      path.join(__dirname, "public"),
      path.join(__dirname, "dist"),
    ],
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  devtool: isProd ? "source-map" : "eval-source-map",
};