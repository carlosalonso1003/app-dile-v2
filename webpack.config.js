const path = require('path');

module.exports = {
    resolve: {
        fallback: {
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify/browser")
        }
    },
    // Otras configuraciones de Webpack...
    entry: './src/index.js', // Asegúrate de que esto apunta a tu archivo de entrada
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // Añade otros loaders y plugins que necesites...
};