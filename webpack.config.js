module.exports = {
    entry: __dirname + '/modules/src/script/main.js',
    output: {
        path: __dirname + '/modules/dist/js',
        filename: 'app.js'
    },
    module:{
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js']
    }
}
