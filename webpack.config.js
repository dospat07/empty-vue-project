var path = require('path');
var webpack = require('webpack');
module.exports = {
    context: path.join(__dirname, './wwwroot/src/'),
    entry: './app.js',
    output: {
        path: path.join(__dirname, './wwwroot/built'),
        publicPath: 'built',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test:/\.vue$/,
                loader: 'vue-loader'
            }
            
        ]
        
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
        modules: [
            path.resolve('./wwwroot/src/'),
            path.resolve('./wwwroot/src/services'),
            path.resolve('./node_modules')

        ]
    },

    plugins: [
        //new webpack.optimize.UglifyJsPlugin({ minimize: true }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ]
};