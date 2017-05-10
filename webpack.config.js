const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  //页面入口文件配置
  entry: {
    index: ['./app/js/index.jsx']
  },
  //入口文件输出配置
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /.js[x]?$/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }
    },{
      test: /\.css$/,
      loader: 'style!css'
    }, {
     test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    },{ 
     test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=25000'
    }
    
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    compress: true,
    historyApiFallback: true,
    port: 2354
  },
  devtool: 'source-map',
  plugins:[
    new HtmlWebpackPlugin({
      template:'./app/index.html'
    })
  ]
};