var path = require('path');

module.exports = {
    entry: './lib/ReactNavLite.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            // SCSS Loader
            {
                test: /\.s[ac]ss$/,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('sass-loader'),
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'ReactNavLite.js',
        path: path.resolve(__dirname, 'dist')
    }
}