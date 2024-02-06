import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxy(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://zenquotes.io/api/quotes',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', 
      },
    })
  );
}
