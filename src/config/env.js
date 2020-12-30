const envObj = {
    dev: {
        axiosUrl: '/api',
        loginUrl: '1231',
        downLoadExcelUrl:'http://139.9.138.74:8080'
    },
    test: {
        axiosUrl: 'http://wxsit.pension.taikang.com/search',
        loginUrl: "http://wxsit.pension.taikang.com/tkp-op/#/login",
        downLoadExcelUrl:'http://wxsit.pension.taikang.com/search'
    },
    prod: {
        axiosUrl: 'https://op.pension.taikang.com/search',
        loginUrl: 'https://op.pension.taikang.com/#/login',
        downLoadExcelUrl:''
    },
}
export default envObj;