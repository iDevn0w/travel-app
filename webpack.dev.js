const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebPackServiceWorker = require('workbox-webpack-plugin');
module.exports = {
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 4000,
        open: true,
    },
    entry: './src/client/index.js',
    mode: 'development',
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        clean: true,
    },
    module:{
        rules: [
            {
                test: /\.s[sc]ss$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader,"css-loader","resolve-url-loader","sass-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },     
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/view/index.html",
            filename: "index.html"
        }),
       new MiniCssExtractPlugin(),
       // import favicon
       new FaviconsWebpackPlugin('./src/client/View/media/img/icon.png'),
       new CleanWebpackPlugin({
           verbose: true,
       }),
       new WebPackServiceWorker.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
       }),
    ]
}