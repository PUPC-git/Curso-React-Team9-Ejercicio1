/* Archivo webpack.config.js */

var webpack = require('webpack');	
const path = require('path');

//pluging y minificadores
const htrmlWebpackPlugin = require('html-webpack-plugin'); //template del html para werbpack
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //reducir los css
const { SourceMapDevToolPlugin } = require('webpack'); //para conocer el sourceMap de l proyecto

//Configuracion del puerto
const port = process.env.PORT || 3000;

//Exportar configuracion de webpack

// Entry point único con nombre "entry"
/*module.exports = {
    entry: './path/to/my/entry/file.js'
};*/
  

//webpack --mode=development
// Múltiples entry points
module.exports = {
    mode: 'production',
    entry: {
      app: './src/index.jsx',
      //adminApp: './src/adminApp.js',
      output: {	
        path: path.resolve(__dirname, '/dist'),        
        filename: 'bundle.[hash].js',
        publicPath: '/'
      },
      context: path.resolve(__dirname),
      devServer: {
        port,
        inlñine: true,
        historyApiFallback: true
      },
      devtool: 'eval-source-map',
      resolve: {
        extensions: ['.js', '.jsx', '.scss', '.sass', '.css'],
        modules: [
          'node_modules'
        ]
      },
      webpack: function (config, { isServer }) {
        config.resolve.extensions.push('.jsx');
        return config
      },
      module: {
        rules: [
          //reglas para archivos de js y jsx
          //reglas para linting
          { 
            enforce: 'pre',
            test: /(\.js||\.jsx)$/,
            exclude: /node_modules/,
            use: [
              'eslint-loader',
              'source-map-loader'
            ]
          },
          //configuraciones para CSS, SASS y SCSS
          { 
            test: /(\.css|\.scss|\.sass)$/, 
           // use: 'css-loader' 
           loader: [
            MiniCssExtractPlugin.loader,
            'csss-loader',
            'sass-loader'
           ]
          },
          { test: /\.txt$/, use: 'raw-loader' },
          //Reglas para las imagenes
          { 
            test: /\.(png|jpe?g|gif)$/, 
           // use: 'css-loader' 
            use: [
            {
              loader: 'file-loader'
            }
           ]
          },
          //reglas para archivos de js y jsx
          //reglas de babel ES y JSX
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            query: {
              presets: [
                '@babel(env',
                '@babel/react'
              ]
            }
/*            use: {          
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-flow',    
                  '@babel/preset-react',
                ], // Cargamos un preset de babel  
              },
            }*/
          }
        ] 
      },
      plugins: [
        new htrmlWebpackPlugin(
          {
            template: './index.html'
          },
          new MiniCssExtractPlugin(
            { 
              filename: './css/styles.css'
            }
          ),
          new SourceMapDevToolPlugin(
            {
              filename: '[file].map'
            }
          )
        )
      ]
   /*   loaders: [
        {
            test: /\.(js|jsx)$/,
            loader: "babel-loader",
            exclude: [/node_modules/],
            query: {
                plugins: ["react-hot-loader/babel", 'transform-runtime'],
                presets: ['es2015', 'stage-0', 'react','@babel/preset-env']
            }
        },
        {
            test: /\.jsx$/,
            loader: "react-hot!babel",
            exclude: [/node_modules/, /public/]
        }
        ]*/
    }
};