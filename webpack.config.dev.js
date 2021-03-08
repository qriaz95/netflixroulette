const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

fileName = '[name].bundle.js',
PATHS = {
  src: path.join(__dirname, './src/'),
  dist: path.join(__dirname, 'dist'),
};

module.exports = {
  mode: 'development',

  devtool: 'inline-source-map',

  entry: {
    app: [path.join(__dirname, './src/index.js')],
  },

  output: {
    path: PATHS.dist,
    filename: fileName,
    publicPath: '/',
  },

  watchOptions: {
    ignored: '/node_modules/',
  },

  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            sourceMaps: true,
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
    ]
  },

  devServer: {
    contentBase: PATHS.dist,
    compress: false,
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },

  plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html',
      }),
      new webpack.HotModuleReplacementPlugin()
  ],
}