const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/dev',
        createProxyMiddleware({
            target: 'https://mvqjtjfst8.execute-api.us-east-1.amazonaws.com',
            secure: false,
            changeOrigin: true,
            hostRewrite: true,
            autoRewrite: true,
            xfwd: true
        })
    );
};
