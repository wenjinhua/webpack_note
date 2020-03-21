# webpack_note
These are some notes while learning webpack on official website


1. HtmlWebpackPlugin：利用此插件是为了防止当我们修改入口(名称或个数)时，生成的包也会产生变化，导致index.html中不自动更新.它会创建一个全新的index.html，并自动引入包文件
    cleanWebpackPlugin:会在每次构建前清理特定文件（在这里是dist文件夹），因此在每次npm run build时只会生成用到的文件
    webpack4.中cleanWebpackPlugin的写法：1. 引入需要{} 2. new时不用传入dist参数 

2. devDependencies: 开发环境下的依赖模块，dependencies：生产环境和开发环境都能使用的模块；
    （1）可通过npm install --save-dev和npm install --save来安装在不同依赖下
    （2）可通过mode='development'和'production'来指定当前的环境

3. scripts.watch: 观察模式，如果其中一个文件被更新，代码将被重新编译，无需开发者手动运行整个构建npm run build
    （1）运行npm run watch就可看到webpack编译代码，由于script脚本在观察文件，所以不会退出命令行。
    （2）但是扔需手动刷新浏览器才能看到修改后的效果

4. webpack-dev-server: 提供了简单的web服务器，可实时重新加载
    （1）在webpack.config.js中增加devServer配置项，来告诉webpack-dev-server来把dist目录下的文件作为可访问文件
    （2）在package.json中添加脚本start: 'webpack-dev-server --open'

5. webpack-dev-middleware: 是一个容器，可以把webpack处理后的文件传递给一个服务器
    生成一个与webpack的compiler绑定的中间件，然后再express启动的服务中调用这个中间件，这个中间件的作用有以下三点：
    （1）通过watch mode监听资源的变更，然后自动打包
    （2）快速编译，走内存
    （3）返回中间件，支持express的use格式

6. 模块热替换: 允许在运行时更新各种模块，而无需进行完全刷新
    （1）设置devServer.hot: true
    （2）增加webpack.NamedModulesPlugin（更容易查看要修补的依赖）和webpack.HotModulesReplacementPlugin

7. tree shaking: 移除js上下文中的未引用代码
    （1）将文件标记为副作用，从而找出那些需要删除的“未使用代码”：package.json中的sideEffects:false，当所有的代码都不包含副作用
                                                    [],包含其中有副作用的文件
    （2）将未使用代码从bundle.js中移除：在webpack4中设置mode:"production"或者删除工具，例如uglifyjs

8. 生产环境构建：为每个环境编写彼此独立的wbepack配置
    （1）分为通用配置webpack.common.js、生产环境配置webpack.prod.js和开发环境配置webpack.dev.js
    （2）使用webpack-merge来合并公共配置
    （2）在npm脚本中添加各自的运行命令

9. 代码分离
    （1）分离成多个入口起点，并打包成多个文件
    （2）防止重复：使用commonchunkplugin可以将公共的依赖模块提取到已有的入口chunk中，或者提取到一个新生成的chunk
    （3）动态导入：动态的使用import来导入依赖模块

10. 懒加载：完成某些操作时才去加载依赖的模块（可用9（3）中的import）

11. 缓存：浏览器来根据资源的文件名来决定是否使用缓存（若内容改变，但名称未变，则扔使用缓存）
    （1）输出文件的文件名：改为[name].[chunkhash].js
    （2）提取模板：CommonsChunkPlugin可以在每次修改后的构建结果中，将webpack的样板和manifest提取出来