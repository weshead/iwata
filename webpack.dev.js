const { merge } = require('webpack-merge'); 
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {// Source maps are not working in edge, so this will nut output the compiled code without minification or uglifiers.
    optimization: {
        minimize: false,
    }
});