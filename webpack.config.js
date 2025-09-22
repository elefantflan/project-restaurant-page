const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        build: path.resolve(__dirname, "src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js",
    },
    module: {
        rules: [
            {test: /\.scss$/i,
            use: 
                ['style-loader',
                'css-loader',
                'sass-loader',],
            },
        ],
    },
    plugins:[        
    new HtmlWebpackPlugin(
            {
                title:'Long for Innisfree',
                filename:'index.html',
                template: './src/template.html',

            },
        ),
    ],
    
}