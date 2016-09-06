var webpack=require('webpack');
module.exports={
    entry:{
        app:"./index.js",
        vendor:["react","react-dom"]
    },
    output:{
        path:"./assets/",
        filename:"app.js",
        publicPath: '/assets'
    },
    devtool:false,
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            },
            {
                test:/\.json$/,
                exclude:/node_modules/,
                loader: 'json'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     output: {
        //         comments: false,
        //     },
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};
