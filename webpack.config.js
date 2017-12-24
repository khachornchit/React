const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const path = require('path');
var isProd = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader', 'sass-loader'],
        publicPath: '/dist'
});
var cssConfig = isProd? cssProd: cssDev;

module.exports = {
    entry: {
        boot: path.join(__dirname, "src", "controls", "boot.tsx")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].min.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: cssConfig
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        stats: "errors-only",
        open: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: './src/template/template-index.html',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            excludeChunks: ['contact']
        }),
        new HtmlWebpackPlugin({
            filename: "contact.html",
            template: './src/template/template-contact.html',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['contact']
        }),
        new HtmlWebpackPlugin({
            filename: "about.html",
            template: './src/template/template-about.html',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['about']
        }),
        new ExtractTextPlugin(
            {
                filename: "app.css",
                disable: !isProd,
                allChunks: true
            }
        ),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}