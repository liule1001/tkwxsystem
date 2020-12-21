module.exports = {
    runtimeCompiler: true,
    publicPath: process.env.NODE_ENV === 'dev' ? "/" : "/tkp-file-search",
    // publicPath: "/" ,
    devServer: {
        // open: process.platform === 'darwin',
        // host: 'localhost',
        port: 8071,
        // open: true, //配置自动启动浏览器 
        proxy: {
            //遇到这种带api字符的会主动代理到后台
            '/api': {
                target: 'http://139.9.138.74:8080/', //对应自己的接口
                changeOrigin: true,
                ws: true,
                // 把api开头的路径用''代替/api,以访问到后端接口
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
}