<template>
    <el-container>
        <el-header>
            <h3>BGC企业微信管理后台</h3>
            <!-- <HomeHeader /> -->
        </el-header>
        <el-container>
            <el-aside 
            class="home-aside" 
            :span="2"
            >
                <Navigation/>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Navigation from "@/components/HomeNav.vue";
// import HomeHeader from "@/components/HomeHeader.vue";

export default {
    data() {
        return {

        };
    },

    components: {
        Navigation,
        // HomeHeader
    },

    mounted() {},

    methods: {
        
    }
};
</script>

<style lang='scss' rel='stylesheet/scss'>
@import "../assets/scss/common.scss";
h3 {
    letter-spacing: 1.5px;
    font-size: 22px;
}
.el-header {
    height: 70px !important;
    background: #252a2f;
    color: #ffffff;
}
.el-container {
    height: 100%;
    
}
.el-aside {
    background: #252a2f;
}
.el-main {
    // background: #efefef;
}
.home-aside {
    width: 14% !important;
    min-width: 200px;
}
</style>