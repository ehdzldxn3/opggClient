const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/clone-project-opgg',
    createProxyMiddleware({
      target: 'http://220.124.111.120:1945',
      changeOrigin: true,
    })
  );
};