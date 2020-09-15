<template>
    <div class="left-aside">
        <el-menu
            :default-active="activeRoute"
            :default-openeds="openMeun"
            :router="true"
            class="el-menu-vertical-demo"
            background-color="#252a2f"
            text-color="#fff"
            active-text-color="#fff"
        >
            <el-menu-item index="/dataStatistics">
                <i class="el-icon-film"></i>
                <span slot="title">数据统计</span>
            </el-menu-item>

            <el-menu-item index="/sessionBackup">
                <i class="el-icon-film"></i>
                <span slot="title">会话备份</span>
            </el-menu-item>

            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-search"></i>
                    <span>敏感词</span>
                </template>
                <el-menu-item index="/triggeSensitiveWords">触发敏感词</el-menu-item>
                <el-menu-item index="/sensitiveWordsManagement">敏感词管理</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-s-platform"></i>
                    <span>客户响应</span>
                </template>
                <el-menu-item index="/activeResponse">主动响应</el-menu-item>
                <el-menu-item index="/passiveResponse">被动响应</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openMeun: ["3", "4"],
            onRoutes: "/dataStatistics",
            activeRoute:"/dataStatistics"
        };
    },
    methods: {},
    mounted() {
        // 指定默认页面路由
        if (this.$route.path === "/" || this.$route.path === "/Home") {
            this.$router.replace(this.onRoutes);
            this.activeRoute = this.onRoutes;
        }else {
            this.activeRoute = this.$route.path;
        }

    }
};
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
@import "../assets/scss/common.scss";
@import "../assets/scss/config.scss";
.el-menu {
    border: none;
}
.el-menu-item:hover {
    background: #14b5b0 !important;
}
.el-menu-item.is-active {
    background: #14b5b0 !important;
}
.el-submenu__title:hover {
    background: rgb(37,42,47) !important;
}

</style>