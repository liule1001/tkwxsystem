<template>
    <div>
        <el-button type="primary" size="mini" @click="changeName">父子传值</el-button>
        <el-button type="primary" size="mini">兄弟传值</el-button>
         我的性别是
        <span>{{sex}}</span>
        <div class="loginBox">
            <span>欢迎您，</span>
            <span>{{childName}}</span>
            <span class="logout">退出</span>
        </div>
        <HomeFooter/>
        
    </div>
</template>

<script>
import HomeFooter from "./homeFooter"
import bus from "./eventBus"
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
        HomeFooter
    },
    methods: {
        changeName(){
            console.log('this.childName',this.childName)
            // this.childName = this.childName == "赵六"?"王五":"赵六";
            this.childName = this.childName == "ellen"?"marry":"ellen";
            this.$emit('change', this.childName)
        },
        
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
    bus.$on("sendMsg",(data)=>{
        this.sex = data
    })
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