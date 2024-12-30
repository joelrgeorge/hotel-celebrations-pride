const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Add this line
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
        test: /\.(png|jpe?g|gif|svg|webp)$/, // Add this rule to handle images
        type: "asset/resource", // This tells Webpack to process and serve images correctly
        include: path.resolve(__dirname, "public"), // Ensure Webpack knows to process images in 'public'
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
      path.join(__dirname, "public"), // Serve static files from the public folder
      path.join(__dirname, "dist"),
    ],
    compress: true,
    port: 3000,
  },
};