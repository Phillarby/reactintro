module.exports = {
    entry:'/Users/philiplarby/Projects/reacttutorial/public/src/client.js',
    output:{
        path:"./",
        filename:'index.js'
    },
    devServer:{
        inline:true,
        contentBase:'./public',
        port:3000
    }
}