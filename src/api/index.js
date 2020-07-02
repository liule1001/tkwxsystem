/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
// const BASE_URL = '/api'


//  模拟数据视图接口
export const mReqDataView = () => ajax('/dataView')
    // 模拟分析模型接口
export const mReqAnalysisModel = () => ajax('/analysisModel')
    //  模拟通知接口
export const mReqNotice = () => ajax('/notice')
    //  模拟系统信息接口
export const mReqSystemInfo = () => ajax('/systemInfo')

// 嵌入系统才能看到数据
// 登录信息
export const getUserInfo = () => ajax(`/sso/getUserinfo`)
    // 电话和邮箱信息
export const getphone = () => ajax(`/sj/data/getTotalPage`)
    // 个数获取
export const getcount = () => ajax(`/sj/data/getIndexData`)

//以下为网关接口,配置好网关，访问全路径即可获取数据
// 图片信息
export const getImgInfo = ({ rangeCode, picNum }) => ajax(`https://dev-agw.dw.cnpc.com.cn/SDP-App-ODA/610/p/v1/page/sc?rangeCode=${rangeCode}&picNum=${picNum}`, { rangeCode, picNum }, 'POST')
    //获取列表信息
export const getSystemInfo = ({ rangeCode }) => ajax(`https://dev-agw.dw.cnpc.com.cn/SDP-App-ODA/610/p/page/order?rangeCode=${rangeCode}`, { rangeCode }, 'POST')
    // 获取分析模型
export const getAnalysisModel = ({ rangeCode, num }) => ajax(`https://dev-agw.dw.cnpc.com.cn/SDP-App-ODA/653/s/selectManagersSJ/${num}`, { rangeCode }, 'POST')
    //获取通知
export const getNotice = (obj) => ajax(`https://dev-agw.dw.cnpc.com.cn/SDP-App-ODA/653/p/pageSelectSJ`, obj)
    //获取文档
export const getDocument = (obj) => ajax(`https://dev-agw.dw.cnpc.com.cn/SDP-App-ODA/560/p/selectPageSJ`, obj)