const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.less', '.png', '.woff', '.woff2', '.eot', '.ttf', '.svg'],
        alias: {
          src: path.resolve(__dirname, './src/'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './src/index.html'
         })
    ]
}