const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv-safe');
const CopyPlugin = require('copy-webpack-plugin');
const chalk = require('chalk');

module.exports = (env) => {

  //Grab vars from package.json
  const { NODE_ENV = 'development', mode = 'dev', devServerPort = 3000 } = env || {};

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
      /* eslint-disable no-undef */
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
        {
          test: /\.(woff|woff2|ttf|png|jp(e*)g|ico|gif|bmp|webp)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'file-loader?name=fonts/[name].[ext]',
            options: {
              name: () => {
                if (NODE_ENV === 'development') {
                  return '[path][name].[ext]';
                }
                return '[name]_[hash].[ext]';
              },
              outputPath: (url, resourcePath) => {

                // To get relative path if needed we can use:
                // const relativePath = path.relative(context, resourcePath);
                // 'context' is the optional third parameter to this function (outputPath)

                if (/\.(woff|woff2|ttf)$/.test(resourcePath)) {
                  return `fonts/${url}`;
                }

                if (/\.(png|jp(e*)g|ico|gif|bmp|webp)$/.test(resourcePath)) {
                  return `images/${url}`;
                }

                return `public_path/${url}`;
              },
            },
          },
        },
        {
          test: /\.svg$/,
          use: ['preact-svg-loader'],
        }
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
        /* eslint-disable no-undef */
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
