const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'src')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'src/index.html'), to: path.join(__dirname, 'dist/index.html') },
      { from: path.join(__dirname, 'src/index.css'), to: path.join(__dirname, 'dist/index.css') },
      { from: path.join(__dirname, 'src/images/'), to: path.join(__dirname, 'dist/images/') },
    ])
  ]
};
