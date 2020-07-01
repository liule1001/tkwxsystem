<template>
    <div>
        <div class="footerBox">
            <span>电话:</span>
            <span>010-xxxxxxxx</span>
        </div>
        <div class="footerBox">
            <span>邮箱:</span>
            <span>010-xxxxxxxx</span>
        </div>

        
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    methods: {
       
    },
    mounted() {
       
    },
};
</script>

<style lang='scss' rel='stylesheet/scss'>
@import "../assets/scss/common.scss";
@import "../assets/scss/config.scss";
.el-footer {
    height: 50px !important;
    text-align: center;
    padding-top: 15px;
    border-top: 1px solid $bg-color;
}
.footerBox {
    display: inline-block;
    margin-left: 15px;
}
</style>