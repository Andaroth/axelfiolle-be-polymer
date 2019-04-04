const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/start-polymer3.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8081
    }
};
