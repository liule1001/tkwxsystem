import axios from 'axios'

// axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : '/api'
console.log(process.env.NODE_ENV);
export default function ajax(url, data = {}, type = 'GET') {

    return new Promise(function (resolve, reject) {
        // url = envObj[process.env.NODE_ENV] + url;
        // 执行异步ajax请求
        let promise;
        if (type === 'GET') {
            // 准备url query参数数据
            let dataStr = '' //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送get请求
            promise = axios.get(url)
        } else {
            // 发送post请求
            promise = axios.post(url, data)
        }
        promise.then(function (response) {
            // 成功了调用resolve()
            resolve(response.data)
        }).catch(function (error) {
            //失败了调用reject()
            reject(error)
        })
    })
}
//get请求示例
// this.$http("/user/users")
//     .then(response => {
//         console.log("response", response);
//     });

//post 请求示例
// this.$http("/text/addSensitiveWord", { wordname: "123" }, "post")
//     .then(response => {
//         console.log("response", response);
//     });