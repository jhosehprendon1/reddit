const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use('/api', createProxyMiddleware({
        target: 'http://www.reddit.com/dev/api', 
        changeOrigin: true,
        pathRewrite: {
            '^/api' : '/'
        }
    }));
};