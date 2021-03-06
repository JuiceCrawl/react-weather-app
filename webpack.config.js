var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, include: __dirname + '/app', loader: "babel-loader"},
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};

//{test: /\.js$/, include: __dirname + '/app', exclude: /node_modules/, loader: "babel-loader"},