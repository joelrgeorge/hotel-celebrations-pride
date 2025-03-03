const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); // Import Webpack

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true, // Ensures the output directory is cleaned before each build
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
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: "asset/resource",
        include: path.resolve(__dirname, "public"),
      },
      {
        test: /\.(mp4|webm)$/,
        type: "asset/resource",
        include: path.resolve(__dirname, "public"),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    // 🔹 Inject environment variables into the frontend
    new webpack.DefinePlugin({
      "process.env.REACT_APP_API_URL": JSON.stringify(process.env.REACT_APP_API_URL),
      "process.env.REACT_APP_SUBMIT_FORM_URL": JSON.stringify(process.env.REACT_APP_SUBMIT_FORM_URL),
      "process.env.REACT_APP_SUBMIT_CONTACT_URL": JSON.stringify(process.env.REACT_APP_SUBMIT_CONTACT_URL),
    }),
  ],
  devServer: {
    static: [
      path.join(__dirname, "public"),
      path.join(__dirname, "dist"),
    ],
    compress: true,
    port: 3000,
    hot: true, // Enables hot module replacement
  },
};