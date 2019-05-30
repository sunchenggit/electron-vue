module.exports = {
    configureWebpack: {
        entry: './src/render/main.js'
    },
    pluginOptions: {
        electronBuilder: {
            mainProcessFile: 'src/main/index.js',
        }
    }
}