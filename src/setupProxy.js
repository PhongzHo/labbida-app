const { createProxyMiddleware } = require("http-proxy-middleware")



module.exports = app => {
    app.use(
        createProxyMiddleware('/connect/token',
            {
                target: 'https://id.kiotviet.vn',
                changeOrigin: true
            }
        )
    )
}