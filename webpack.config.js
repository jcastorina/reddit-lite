const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      { test: /\.(tsx?)$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/reddit-lite-favicon.png',
    }),
    new HtmlWebpackPlugin({
      template: './src/404.html',
      filename: '404.html',
      favicon: './src/reddit-lite-favicon.png',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};
