<template>
    <div>
        <el-col>
            <h5>员工列表</h5>
            <el-menu
            default-active="2"
            :default-openeds="openMeun"
            :router="true"
            class="el-menu-vertical-demo"
            background-color="#ddd"
            text-color="#333"
            active-text-color="#333"
        >
            <el-submenu index="1">
                <template slot="title">
                    <span>敏感词</span>
                </template>
                <el-menu-item>触发敏感词</el-menu-item>
                <el-menu-item>敏感词管理</el-menu-item>
            </el-submenu>

            <el-submenu index="2">
                <template slot="title">
                    <span>客户响应</span>
                </template>
                <el-menu-item>主动响应</el-menu-item>
                <el-menu-item>被动响应</el-menu-item>
            </el-submenu>
        </el-menu>
        </el-col>
        <el-col>
            <h5>会话列表</h5>
            <el-menu
            default-active="2"
            :default-openeds="openMeun"
            :router="true"
            class="el-menu-vertical-demo"
            background-color="#252a2f"
            text-color="#fff"
            active-text-color="#fff"
        >
            <el-menu-item>
                <span slot="title">数据统计</span>
            </el-menu-item>

            <el-menu-item>
                <span slot="title">会话备份</span>
            </el-menu-item>
        </el-menu>
        </el-col>
        <el-col>
            <h5>聊天记录</h5>
            <Chat />
        </el-col>
    </div>
</template>

<script>
import Chat from "@/components/Chat.vue";
export default {
    name: "hello",
    data() {
        return {
           
        };
    },
    components: {
        Chat
    },
    mounted() {},
    methods: {
        
    }
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "../assets/scss/sessionBack.scss";


</style>