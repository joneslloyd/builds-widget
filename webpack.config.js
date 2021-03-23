const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

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
    // new ESLintPlugin({
    //   extensions: ['js', 'jsx', 'ts', 'tsx'],
    //   emitWarning: true,
    // }),
    // new NodePolyfillPlugin(),
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
    // externals: [
    //   nodeExternals(
    //     {
    //       options: {
    //         importType: function (moduleName) { return 'amd ' + moduleName; }
    //       }
    //     }
    //   )
    // ],
    // node: {
    //   global: true,
    //   __filename: false,
    //   __dirname: false,
    // },
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
    plugins,
    devServer: {
      contentBase: path.join(__dirname, outputFolderName),
      compress: true,
      port,
      writeToDisk: true
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
