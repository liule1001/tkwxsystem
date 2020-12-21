const envObj = {
    dev: {
        axiosUrl: '/api',
        loginUrl: '1231'
    },
    test: {
        axiosUrl: 'http://wxsit.pension.taikang.com/search',
        loginUrl: "http://wxsit.pension.taikang.com/tkp-op/#/login"
    },
    prod: {
        axiosUrl: 'https://op.pension.taikang.com/search',
        loginUrl: 'https://op.pension.taikang.com/#/login'
    },
}
export default envObj;