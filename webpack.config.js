var webpack = require('webpack');
var path = require('path');

module.exports = {
    target: "web",
    debug: true,
    devtool: "source-map",
    entry: {
        app: "./source/scripts/app"
    },
    output: {
        // Make sure to use [name] or [id] in output.filename
        //  when using multiple entry points
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'source', '../public'),
        publicPath: '/public/',
        chunkFilename: '[id].chunk.js?v=[chunkhash]'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
    },
    module: {
        loaders: [{
            test: /\.css/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        },  {
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel'
        }, {
            test: /\.png/,
            loader: "url-loader?limit=100000&mimetype=image/png"
        }, {
            test: /\.gif/,
            loader: "url-loader?limit=100000&mimetype=image/gif"
        }, {
            test: /\.jpg/,
            loader: "file-loader"
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=application/font-woff2"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=application/octet-stream"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=image/svg+xml"
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            '_': 'lodash',
            'React': 'react',
            'Promise': 'bluebird'
        }),
    ]
};