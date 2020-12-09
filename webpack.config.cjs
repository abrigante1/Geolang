module.exports = {
    entry: 'C:\\Users\\Anthony\\GoogleDrive\\DigiPen\\Years\\Year5\\Semester9\\CS375\\Development\\GeolangNodeServer\\src\\index.js',
    output: {
        filename: './js/main.js',
    },
    module: {
        rules: [{
            test: /.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    mode: 'production',
    node: {
        fs: 'empty',
        global: true,
        crypto: 'empty',
        tls: 'empty',
        net: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
}