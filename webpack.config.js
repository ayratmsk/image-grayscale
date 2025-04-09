const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')
const { experiments } = require('webpack')

module.exports = {
    entry: './assets/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './assets/index.html'
        }),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, '.')
        })
    ],
    experiments: {
        asyncWebAssembly: true
    }
}