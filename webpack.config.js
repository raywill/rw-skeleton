var webpack = require('webpack'); // for webpack.HotModuleReplacementPlugin()

module.exports = {

  entry : {
    easyform : [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      "./js/easyform.js",
    ]
  },

  output : {
    filename : "easyform.js",
    path : __dirname + "/dist/",
    publicPath : "/dist/"
  },

  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude : /node_module/,
        loaders : ['react-hot', 'babel-loader', 'jsx-loader']
      } 
    ]
  },

  target : 'web',

  plugins : [
    new webpack.HotModuleReplacementPlugin()
  ]

};
