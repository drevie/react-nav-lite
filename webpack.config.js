const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './lib/ReactNavLite.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'ReactNavLite.js',
        libraryTarget: 'umd',      
        publicPath: '/dist/',      
        umdNamedDefine: true  
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            // SCSS Loader
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css!sass'),
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ],
    externals: {
        'react': 'commonjs react'
      }
}