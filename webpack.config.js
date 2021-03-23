const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {

  //Grab environment vars
  const { NODE_ENV = 'development', dist = false, build = false, port = 3000 } = env || {};

  //Set the environment
  const devEnv = dist ? 'dist' : (build ? 'build' : 'dev');

  //Set the output folder name
  const outputFolderName = `${devEnv}/`;

  //Set up plugins
  const plugins = [
    ...('dist' !== devEnv ? [new CopyPlugin({
      patterns: [
        { from: './src/templates/**', to: "[name][ext]", }
      ]
    })] : []),
    new webpack.ProvidePlugin({
      process: 'process',
    }),
  ];

  //Return the config
  return {
    mode: NODE_ENV,
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
      ],
    },
    plugins,
    devServer: {
      port,
      compress: true,
      hot: true,
      overlay: true
    },
    resolve: {
      alias: {
        process: require.resolve('process')
      },
      fallback: {
        fs: false,
        module: false,
        os: require.resolve('os-browserify/browser'),
        path: require.resolve('path-browserify')
      },
    },
  };
};
