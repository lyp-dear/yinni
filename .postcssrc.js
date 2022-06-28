// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {
            browsers: ['Android >= 4.0', 'iOS >= 8'],
        },
        'postcss-pxtorem': { // Rem 适配
            rootValue: 37.5,
            selectorBlackList: ['.van-'],
            propList: ['*'],
        },
    }
}
