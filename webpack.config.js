const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const chalk = require('chalk');

module.exports = (env) => {

  //Grab environment vars
  const { NODE_ENV = 'development', mode = 'dev', port = 3000 } = env || {};

  //Set the output folder name
  const outputFolderName = `${mode}/`;

  const isDistMode = 'dist' === mode;

  const isDevMode = 'dev' === mode;

  //Set up plugins
  const plugins = [
    ...(!isDistMode ? [new CopyPlugin({
      patterns: [
        { from: './src/templates/**', to: "[name][ext]", }
      ]
    })] : []),
    new webpack.ProvidePlugin({
      process: 'process',
    }),
  ];

  const localNetworkDevServer = `${require('ip').address()}:${port}`;

  if (isDevMode) {
    console.log(chalk.bgRgb(27, 18, 59).rgb(255, 255, 255).bold(`\n+++ Local dev server: http://localhost:${port}`));
    console.log(chalk.bgRgb(27, 18, 59).rgb(255, 255, 255).bold(`+++ Local network dev server: http://${localNetworkDevServer}\n`));
  }

  //Return the config
  return {
    stats: false,
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
      client: {
        logging: 'warn'
      },
      compress: true,
      dev: {
        stats: false
      },
      hot: false,
      liveReload: true,
      open: false,
      overlay: true,
      public: localNetworkDevServer,
      port,
      static: {
        directory: path.resolve(__dirname, outputFolderName),
        watch: {
          aggregateTimeout: 300,
          poll: 1000,
          ignored: /node_modules/,
        }
      },
      transportMode: 'ws',
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
