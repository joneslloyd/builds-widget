const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {

  const { dist = false, build = false, port = 3000 } = env || {};

  const devEnv = dist ? 'dist' : (build ? 'build' : 'dev');

  const outputFolderName = `${devEnv}/`;

  return {
    mode: 'production',
    devtool: 'source-map',
    entry: {
      index: './src/app/index.js',
    },
    output: {
      libraryTarget: 'umd',
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, outputFolderName),
    },
    optimization: {
      splitChunks: {},
    },
    devServer: {
      contentBase: './dev/',
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js?/i,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {},
        },
        {
          test: /\.js?/i,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {},
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ],
    },
    plugins: 'dist' !== devEnv ? [
      new CopyPlugin([
        { from: './src/templates/**', to: '', flatten: true },
      ])
    ] : [],
    devServer: {
      contentBase: path.join(__dirname, outputFolderName),
      compress: true,
      port,
      writeToDisk: true
    },
  };
};
