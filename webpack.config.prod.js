const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

fileName = '[name].bundle.js',
PATHS = {
  dist: path.join(__dirname, 'dist'),
};

module.exports = {
  mode: 'production',

  entry: {
    app: [path.join(__dirname, './src/index.js')],
  },

  output: {
    path: PATHS.dist,
    filename: fileName,
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        sourceMap: false,
      }),
    ],
	splitChunks: {
      chunks: 'all',
    }
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },

  resolve: {
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
            sourceMaps: false,
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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ]
}