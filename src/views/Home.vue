<template>
    <el-container>
        <el-header>
            <homeHeader />
        </el-header>
        <el-container>
            <el-aside 
            class="home-aside" 
            :span="2"
            >
                <Navigation />
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Navigation from "@/components/HomeNav.vue";
import homeHeader from "@/components/homeHeader.vue";

export default {
    data() {
        return {

        };
    },

    components: {
        Navigation,
        homeHeader
    },

    mounted() {},

    methods: {
        
    }
};
</script>

<style lang='scss' rel='stylesheet/scss'>
@import "../assets/scss/common.scss";

.el-container {
    height: 100%;
}
.el-aside {
    background: #252a2f;
}
.el-main {
    background: #efefef;
}
.home-aside {
    width: 16% !important;
}
</style>