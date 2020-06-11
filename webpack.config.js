const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin')

const devMode = process.env.NODE_ENV === 'development';
const prodMode = process.env.NODE_ENV === 'production';

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: devMode ? 'js/[name].js' : 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: devMode ? 'source-map' : '',
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 9000,
    hot: false,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: prodMode,
    minimizer: [
      new TerserWebpackPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            query: {
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          { 
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          { 
            loader: 'postcss-loader', 
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader', 
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: 'jQuery'
          },
          {
            loader: 'expose-loader',
            options: '$'
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? 'styles/[name].css' : 'styles/[name].[contenthash].css',
      chunkFilename: 'styles/[id].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/index.pug',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/ui-kit-colors-type.pug',
      filename: 'ui-kit-colors-type.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/ui-kit-form-elements.pug',
      filename: 'ui-kit-form-elements.html',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};