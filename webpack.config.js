const path = require("path");

module.exports = {
    context: __dirname,
    entry: "./frontend/reads.jsx",
    output: {
        path: path.join(__dirname, "app", "assets", "javascripts"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", "*"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["@babel/env", "@babel/react"]
                    }
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
              }, {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000' }
        ]
    },
    
    devtool: "source-map"

};