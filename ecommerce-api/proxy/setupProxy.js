// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://node-api-v2-p781.onrender.com",
      changeOrigin: true,
    })
  );
};
