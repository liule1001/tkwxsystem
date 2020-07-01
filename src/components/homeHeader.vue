<template>
    <div>
        <!-- <div class="loginBox">
            <span>欢迎您，</span>
            <span>王五</span>
            <span class="logout">退出</span>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            // childName: this.name,
        };
    },
    props:{
        // name:{
        //     type: String,
        //     required: false,
        //     default:"李四"
        // }
    },
    components:{
    },
    methods: {
        

    },
    mounted() {

    },
};
</script>

<style lang='scss' rel='stylesheet/scss'>
@import "../assets/scss/common.scss";
// @import "../assets/scss/config.scss";
.el-header {
    height: 70px !important;
    background: #252a2f;
    color: #fff
}
.loginBox {
    float: right;
    .logout {
        margin-left: 20px;
        cursor: pointer;
        color: #fff;
    }
}
</style>