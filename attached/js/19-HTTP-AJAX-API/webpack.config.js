const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.hbs$/,
        use: "handlebars-loader"
      },
      {
        test: /\.css$/, // Регулярное выражение для всех файлов .css
        use: [
          "style-loader", // Добавляет CSS в DOM с помощью тега <style>
          "css-loader" // Интерпретирует @import и url() в CSS
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Ваш HTML шаблон
      filename: "index.html"
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/css", to: "css" } // Копирование CSS файлов в папку dist/css
      ]
    })
  ]
};
