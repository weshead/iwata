const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');
// const Yml = require('js-yaml');
const nodeExternals = require('webpack-node-externals');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    devtool: process.env.NODE_ENV === 'production' ? 'hidden-source-map' : 'cheap-module-source-map', // hidden-source-map | source-map | cheap-module-source-map
    entry: {
        app: path.join(__dirname, 'src/bot')
    },
    externals: [nodeExternals()],
    mode: process.env.NODE_ENV !== 'production' ? "development" : 'production',
    module: {
        rules: [
            {
                test: /\.(ts?)$/,
                exclude: path.join(__dirname, 'node_modules'),
                use: 'ts-loader'
            },
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].lump.js',
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    },
    plugins: [
        new Dotenv(),
        new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['dist'] }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/imgs', to: '' }
            ]
        }),
        new NodePolyfillPlugin(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.ts', '.js'],
    },
};