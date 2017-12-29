var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          plugins: [
            'transform-runtime',
            'transform-decorators-legacy',
          ],
          presets: ['es2015', 'react', 'stage-1'],
        }
      }, 
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'webpack-demo',
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
}
