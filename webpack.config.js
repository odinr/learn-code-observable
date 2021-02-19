const path = require("path");
const del = require("del");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

const CopyPlugin = require("copy-webpack-plugin");

const srcDir = path.resolve(__dirname, "src");
const outDir = path.resolve(__dirname, "docs");
del.sync(outDir);

module.exports = (env, argv) => {
  const {mode = "development"} = argv;
  const dev = mode === "development";
  const base = dev ? '/' : 'https://odinr.github.io/learn-code-async/';
  const publicPath =  dev ? "/" : "/learn-code-async/";
  return {
    entry: "./src/index.ts",
    output: {
      publicPath,
      filename: "main.js",
      chunkFilename: `[id]${dev?'':'-[hash]'}.js`,
      path: outDir,
    },
    mode,
    devServer: {
      contentBase: srcDir,
      port: 9000,
      publicPath,
      inline: true,
      historyApiFallback: {
        index: '/index.html'
      },
      disableHostCheck: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                esModule: true,
              },
            },
          ],
        },
        {
          test: /\.css$|\.s(c|a)ss$/,
          use: [
            {
              loader: "lit-scss-loader",
              options: {
                minify: true,
              },
            },
            "extract-loader",
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        base,
        hash: !dev,
        filename: "index.html",
        template: "src/index.ejs",
        minify: false,
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'async',
        module: ['main'],
      }),
      new HtmlWebpackTagsPlugin({ tags: ['main.css'], append: true }),
      new CopyPlugin([
        { context: srcDir, from: "404.html" },
        { context: srcDir, from: "*.css" },
        {
          context: srcDir,
          from: "examples",
          to: "examples",
        },
      ]),
    ],
  };
};
