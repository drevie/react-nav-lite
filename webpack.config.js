var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/ReactNavLite.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'ReactNavLite.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            // SCSS Loader
            {
                test: /\.s[ac]ss$/,
                exclude: /(node_modules)/,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('sass-loader'),
                ],
            },
        ]
    }
}