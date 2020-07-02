import axios from 'axios'
import qs from 'qs'

let gob = {
  //域名配置
  webUrl:"http://182.92.8.37:8080",
  post:function(options,newUrl){//post请求
    options.arg=options.arg||{};
    var ipName='';
    !newUrl?ipName=this.webUrl:ipName=newUrl;
    return new Promise(function(resolve, reject) {
        axios.post(
          ipName+options.url,
        qs.stringify(options.arg))
        .then(function (response) {
          //成功逻辑
          resolve(response.data);
        })
        .catch(function (error) {
          //失败逻辑
          reject(error);
        });
    })
  },
  get:function(options,newUrl){
    options.arg=options.arg||{};
    var ipName='';
    !newUrl?ipName=this.webUrl:ipName=newUrl;
    return new Promise(function(resolve, reject){
       axios.get(ipName+options.url,{params:options.arg})
        .then(function (response) {
          //成功逻辑
          resolve(response.data);
        })
        .catch(function(error){
          //失败逻辑
          reject(error);
        });
    })
  },
}

export default gob