var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../') 
var webpack = require('webpack')
var merge = require('webpack-merge')
var webpack = require('webpack')
var baseWebpackConfig = {
	module:{

	}
}


console.log(
	baseWebpackConfig
)
merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  }})
console.log(
	baseWebpackConfig
)