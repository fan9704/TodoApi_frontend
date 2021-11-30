module.exports = {
    devServer: {

        proxy: {
            '/api': {
                target: 'https://127.0.0.1:5001', //API服务器的地址
                secure: false,
                ws: true, //代理websockets
                changeOrigin: true,
                pathRewrite: {
                    '': ''
                },

            }
        }
    }
}