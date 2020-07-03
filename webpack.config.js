const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('dotenv').config();

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: process.env.NODE_ENV === 'production' ? null : 'inline-source-map',
  entry: {
    content: './src/content/content.js',
    background: './src/background/background.js',
    options: './src/options/options.js',
    popup: './src/popup/popup.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'sass-loader',
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/**/*',
          to: '',
          flatten: true,
          globOptions: {
            ignore: [
              '**/*.js',
              '**/*.scss',
              '**/*.png',
              '**/components/*'
            ],
          },
        },
        {
          from: 'src/images/*',
          to: 'images',
          flatten: true,
        },
      ],
    }),
  ],
};
