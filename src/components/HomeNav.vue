<template>
    <div class="left-aside">
        <!-- <div class="navTop" >
            <div class="iconBox" title="可以放昆仑银行图标"></div>
            <router-link class="title" to="/">昆仑银行监控系统</router-link>
        </div> -->
        <div class="navTop" :class="{'hideTitle':isCollapse}">
            <router-link class="title" to="/">
                <div class="iconBox" title="可以放昆仑银行图标"></div>
                <span>昆仑银行监控系统</span>  
            </router-link>
        </div>
        <div>
            <div>
                <i class="icon-menu el-icon-s-unfold" @click="changeCollapse" v-show="isCollapse" title="展开"></i>
                <i class="icon-menu el-icon-s-fold" @click="changeCollapse" v-show="!isCollapse" title="关闭"></i>
            </div>
        </div>
        <el-menu
            class="el-menu-vertical-demo"
            :default-openeds="openMeun"
            :default-active="onRoutes"
            :router="true"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
        >
            <el-menu-item index="/dashbord">
                <i class="el-icon-film"></i>
                <span slot="title">数据统计</span>
            </el-menu-item>

            <el-menu-item index="/dashbord">
                <i class="el-icon-film"></i>
                <span slot="title">会话备份</span>
            </el-menu-item>

            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-search"></i>
                    <span>敏感词</span>
                </template>
                <el-menu-item index="/TransactionSearch">触发敏感词</el-menu-item>
                <el-menu-item index="/EventSearch">敏感词管理</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-s-platform"></i>
                    <span>客户响应</span>
                </template>
                <el-menu-item index="/MonitorDetails">主动响应</el-menu-item>
                <el-menu-item index="/MonitorEmphasis">被动响应</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openMeun: ["3", "4", "1", "1-1", "1-2"],
            onRoutes: "/TransactionSearch",
            isCollapse: true
        };
    },
    methods: {
        changeCollapse(){
            this.isCollapse = !this.isCollapse;
            this.$emit('collapseEvent',this.isCollapse)
        },
        handleOpen(){

        },
        handleClose(){
            
        }
    },
    mounted() {
        // console.log(this.$route.path);
        // 指定默认页面路由
        if (this.$route.path === "/" || this.$route.path === "/Home") {
            this.$router.replace(this.onRoutes);
        }
    }
};
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
@import "../assets/scss/common.scss";
@import "../assets/scss/config.scss";

.navTop {
    height: 80px;
    background-color: $bg-color;
    .iconBox {
        float: left;
        height: 40px;
        width: 40px;
        margin: 20px 0 0 10px;
        background-color: #fff;
    }
    span {
        float: left;
        height: 40px;
        width: 150px;
        margin: 20px 0 0 15px;
        color: #fff;
        font-size: 18px;
        line-height: 40px;
    }
}
.hideTitle {
    .title span {
        display: none;
    }
}
.el-menu {
    border: none;
}
.icon-menu {
    margin: 10px 0 0 15px;
    font-size: 30px;
    cursor: pointer;
    color:  $bg-color;
    border: 1px solid #ddd;
    border-radius: 2px;
}
</style>