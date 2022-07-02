'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/trade': {
        // target: 'https://www.bigwinner.live/trade/', // 正式环境
        // target: 'https://loadbalance.Mysolarpower.green/trade', // 测试环境
        // target: 'https://mysolarpower.cc/trade', // 线上地址
        // target: 'https://m.ustslenergy.com/l9jo142n', // uat地址
        target: 'https://m.ustslenergy.com/r9cs3pfp/', // bendi
        // target:
        //   'http://1219-2409-8954-94a9-faa9-3db3-459c-553a-7386.ngrok.io/trade/',
        // target: 'http://none9100.free.idcfengye.com/', // bendi

        // target: 'http://192.168.0.154:9100/', // bendi
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/trade': '',
        },
      },
    },

    // Various Dev Server settings
    // host: '10.242.1.93', // can be overwritten by process.env.HOST
    // host: '192.168.0.117', // can be overwritten by process.env.HOST
    host: 'localhost', // can be overwritten by process.env.HOST
    // host: '192.168.0.100', // can be overwritten by process.env.HOST
    port: 8082, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/app.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    // assetsPublicPath: '/micro/phone/',
    // assetsPublicPath: '/',
    assetsPublicPath: 'https://m.ustslenergy.com/h5/',
    /**
     * Source Maps
     */

    productionSourceMap: false, // true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
  },
  uat: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/uat/app.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist/uat'),
    assetsSubDirectory: 'static',
    // assetsPublicPath: '/micro/phone/',
    // assetsPublicPath: '/', // 172测试环境英文
    assetsPublicPath: 'https://m.ustslenergy.com/uat/',
    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
  },
}
