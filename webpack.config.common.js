
const path = require('path')
const cleanPlugin = require('clean-webpack-plugin')
const vuePlugin = require('vue-loader/lib/plugin')
const htmlPlugin = require('html-webpack-plugin')
const extractSass = require('extract-text-webpack-plugin')
const spritesmith = require('webpack-spritesmith')


module.exports = {
	entry:{
		app:'./src/index.js'
	},
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist'),
	},
	devServer:{
		contentBase:path.join(__dirname,'./dist')
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				use:'vue-loader'
			},{
				test:/\.scss$/,
				use:[
					'vue-style-loader',
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},{
				test:/\.css$/,
				use:[{
					loader:'vue-style-loader'
				},{
					loader:'css-loader',
					options:{
						modules:true,
						localIdentName:'[local]_[hash:base64:8]'
					}
				}]
			},{
				test:/\.(png|jpg|gif)$/,
				use:[{
					loader:'file-loader',
					options:{
						context:'./src',
						name:'[path][name].[ext]'
					}
				}]
			}
		]
	},
	plugins:[
		new cleanPlugin(['dist']),
		new htmlPlugin({
			template:path.join(__dirname,'./src/index.html'),
			filename:'index.html'
		}),
		new vuePlugin(),
		new spritesmith({
			src:{
				cwd:path.resolve(__dirname,'./src/icons'),
				glob:'*.png'
			},
			target:{
				image:path.resolve(__dirname,'dist/icons/icons.png'),
				css:path.resolve(__dirname,'dist/icons/icons.css')
			},
			apiOptions:{
				cssImageRef: '../icons/icons.png'
			},
			spritesmithOptions: {
                algorithm: 'top-down'
            }
		})
	]
}