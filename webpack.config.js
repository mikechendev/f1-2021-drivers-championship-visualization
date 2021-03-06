// webpack.config.js

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: [
    path.resolve(__dirname, 'src', 'index.js'),
    path.resolve(__dirname, 'src', 'index.scss'),
  ],
  output: {
    path: path.join(__dirname, 'dist'), // bundled file in dist/
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // applies to js files
        use: [
          'babel-loader',
          {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-syntax-top-level-await'],
            },
          },
        ], // transpiles your js

        exclude: /node_modules/, // don't transpile node modules
      },
      {
        test: /\.s?[ac]ss$/, // applies to css/scss/sass files
        use: [
          MiniCssExtractPlugin.loader, // create bundled css file
          {
            loader: 'css-loader', // resolves @import statements
            options: { url: false }, // don't resolve url() statements
          },
          'sass-loader', // compiles sass to css
        ],
      },
    ],
  },
  //   resolve: {
  //   fallback: {
  //     "fs": false,
  //     "tls": false,
  //     "net": false,
  //     "path": false,
  //     "zlib": false,
  //     "http": false,
  //     "https": false,
  //     "stream": false,
  //     "string_decoder": false,
  //     "url": false,
  //     "util": false
  //   }
  // },
  plugins: [new MiniCssExtractPlugin()],
  experiments: { topLevelAwait: true },
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval-source-map';
  }

  return config;
};
