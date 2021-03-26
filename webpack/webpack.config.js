const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv-safe');
const CopyPlugin = require('copy-webpack-plugin');
const chalk = require('chalk');

module.exports = (env) => {

  //Grab vars from package.json
  const { NODE_ENV = 'development', mode = 'dev', devServerPort = 3000, DATA_API = 'https://api.int.mobalytics.gg/lol/graphql/v1/query', SQUIDEX_API = 'https://app.mobalytics.gg/api/league/gql/static/v1' } = env || {};

  //Grab Env vars
  const envVarsRaw = dotenv.config().parsed;

  //Put them into an object
  const envVarsInner = Object.keys(envVarsRaw).reduce((prev, next) => {
    prev[`VARIABLE_${next.toUpperCase()}`] = JSON.stringify(envVarsRaw[next]);
    return prev;
  }, {});

  const envVars = {
    'VARIABLES': envVarsInner
  };

  //Set the output folder name
  const outputFolderName = `../${mode}/`;

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
    new webpack.DefinePlugin(envVars)
  ];

  const localNetworkDevServer = `${require('ip').address()}:${devServerPort}`;

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
        logging: 'warn',
        overlay: true
      },
      compress: true,
      dev: {
        stats: false
      },
      hot: false,
      liveReload: true,
      open: false,
      public: localNetworkDevServer,
      port: devServerPort,
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
