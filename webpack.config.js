var path = require('path');  //加载nodejs的路径处理模块
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),        //__dirname是一个nodejs变量，表示当前js文件所在的目录
        filename: 'bundle.js',
        library: {
            root: 'AsyncValidator',
            amd: 'async-validator',
            commonjs: 'async-validator',
        },
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,    //配置文件目录下的es6文件夹作为js源代码文件夹
                loader: 'babel-loader' ,
            }
        ]
    }
};
