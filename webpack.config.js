const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
      rules: [
          {
            test: /\.css$/,
            use: ['style-loader','css-loader']
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
        }
      ]

  },
  externals: {
    jquery: 'jQuery',
    moment: 'moment'
  },
  devtool: 'sourcemap',
  resolve: {
    extensions: [ '.js' ],
  },
  plugins: [
    /*new HtmlWebpackPlugin(),
    new GoogleFontsPlugin({
        fonts: [
            { family: "Montserrat", variants: ["400", "700"] },
            { family: "Kaushan Script" },
            { family: "Droid Serif", variants: ["400", "700", "400italic", "700italic"] },
            { family: "Roboto Slab", variants: ["400", "100", "300", "700"] }
        ]
    })*/
  ]
}