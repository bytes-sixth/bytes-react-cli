export default {
  dev: {
    '/api/': {
      target: './',
      changeOrigin: false,
      pathRewrite: {
        '^': '',
      },
    },
  },
  prod: {
    '/api/': {
      target: './',
      changeOrigin: false,
      pathRewrite: {
        '^': '',
      },
    },
  },
}
