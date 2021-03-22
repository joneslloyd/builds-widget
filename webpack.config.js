const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = (env) => {

  //Grab environment vars
  const { dist = false, build = false, port = 3000 } = env || {};

  //Set the environment
  const devEnv = dist ? 'dist' : (build ? 'build' : 'dev');

  //Set the output folder name
  const outputFolderName = `${devEnv}/`;

  //Set up plugins
  const plugins = [
    ...('dist' !== devEnv ? new CopyPlugin([
      { from: './src/templates/**', to: '', flatten: true },
    ]) : []),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      emitWarning: true,
    }),
    new NodePolyfillPlugin()
  ];

  //Return the config
  return {
    mode: 'production',
    devtool: 'source-map',
    entry: {
      index: './src/widget/index.js',
    },
    output: {
      libraryTarget: 'umd',
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, outputFolderName)
    },
    target: ["web"],
    optimization: {
      splitChunks: {},
    },
    devServer: {
      contentBase: './dev/',
    },
    module: {
      rules: [
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
    plugins,
    devServer: {
      contentBase: path.join(__dirname, outputFolderName),
      compress: true,
      port,
      writeToDisk: true
    },
    resolve: {

      fallback: {
        fs: false,
        module: false,
        tls: false,
        net: false,
        path: false,
        zlib: false,
        http: false,
        https: false,
        stream: false,
        process: false,
        util: require.resolve("util/"),
        path: require.resolve("path-browserify")
      }
    }
  };
};
