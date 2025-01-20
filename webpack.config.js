const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: "asset/resource", // Handles images
        include: path.resolve(__dirname, "public"),
      },
      {
        test: /\.(mp4|webm)$/, // Add rule to handle video files
        type: "asset/resource", // Handles video files
        include: path.resolve(__dirname, "public"),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: [
      path.join(__dirname, "public"),
      path.join(__dirname, "dist"),
    ],
    compress: true,
    port: 3000,
  },
};