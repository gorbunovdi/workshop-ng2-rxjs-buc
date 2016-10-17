var path = require('path');
var webpack = require('webpack');

const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
  devServer: {
    contentBase: './web'
  },
  context: path.resolve('./src/'),
  entry: {
    polyfills: './polyfills.ts',
    vendor: './vendor.ts',
    app: './main.ts'
  },
  output: {
    path: path.resolve('web'),
    filename: 'bundle.[name].js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  resolve: {
    root: path.resolve('./src/'),
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /.*ts$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'raw-loader',
        exclude: /material/
      },
      { test: /material.*\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" }
    ]
  },
  plugins: [
    new ForkCheckerPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
  ],
  devtool: 'source-map'
}
