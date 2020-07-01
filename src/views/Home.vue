<template>
    <el-container class="total">
        <el-aside class="home-aside" :class="{'aside-narrow':isCollapse}">
            <Navigation 
            @collapseEvent="changeCollapseF"
            />
        </el-aside>
        <el-container>
            <el-header>
                <homeHeader :name="nameObj.name" @change="childChange"/>
            </el-header>
            <el-main class="content">
                <router-view></router-view>
            </el-main>
            <el-footer>
                <homeFooter />
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
import Navigation from "@/components/HomeNav.vue";
import homeHeader from "@/components/homeHeader.vue";
import homeFooter from "@/components/homeFooter.vue";

export default {
    data() {
        return {
            isCollapse: true,
            nameObj:{
                name:"ellen"
            },
            name:"王五"
        };
    },

    components: {
        Navigation,
        homeHeader,
        homeFooter
    },

    mounted() {},

    methods: {
        changeCollapseF(data){
            this.isCollapse = data
        },
        childChange(data){
            this.nameObj.name = data
        }
    },
};
</script>

<style lang='scss' rel='stylesheet/scss'>
@import "../assets/scss/common.scss";

.el-container {
    height: 100% ;
}
.el-aside {
    background-color: #fff;
    color: #333;
}
.home-aside {
    width: 230px !important;
    border-right: 1px solid #e6e6e6;
}
.aside-narrow {
    width: 65px !important; 
}
.content {
    margin-top: 100px;
}
</style>