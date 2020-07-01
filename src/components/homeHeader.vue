<template>
    <div>
        <div class="loginBox">
            <span>欢迎您，</span>
            <span>{{childName}}</span>
            <span class="logout">退出</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            params:[1,2,3],
            childName: this.name,
            sex:'女'
        };
    },
    props:{
        name:{
            type: String,
            required: false,
            default:"李四"
        }
    },
    components:{
    },
    methods: {
        
        // testRest(...valueArr){
        //     // console.log(valueArr)
        // },
        // testParams(num1,num2,num3){
        //     console.log(num1,num2,num3)
        // }
    },
    mounted() {
    //    this.testRest(1,2,3)
    //    this.testParams(...this.params)
    },
};
</script>

<style lang='scss' rel='stylesheet/scss'>
@import "../assets/scss/common.scss";
@import "../assets/scss/config.scss";
.total .el-header {
    height: 50px !important;
    border-bottom: 1px solid $bg-color;
    padding: 0px !important;
}

.loginBox {
    float: right;
    .logout {
        margin-left: 20px;
        cursor: pointer;
        color: $bg-color;
    }
}
</style>