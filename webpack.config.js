const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")
const WebpackCdnPlugin = require('webpack-cdn-plugin')

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
    moment: 'moment',
    bootstrap: 'bootstrap',
    PhotoSphereViewer: 'photo-sphere-viewer',
    'fullcalendar/core' : "fullcalendar/core",
    'fullcalendar/bootstrap': "fullcalendar/bootstrap",
    'fullcalendar/daygrid': "fullcalendar/daygrid",
    'fullcalendar/timegrid': "fullcalendar/timegrid",
    'fullcalendar/interaction': "fullcalendar/interaction"

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