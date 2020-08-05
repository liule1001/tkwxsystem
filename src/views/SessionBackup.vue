<template>
    <div class="sessionBack">
        <el-col class="staffList">
            <h5>员工列表</h5>
            <!-- horizontal,vertical -->
            <el-menu
                class="el-menu-vertical-demo"
                mode="vertical"
                background-color="#ddd"
                text-color="#333"
                active-text-color="#333"
                :unique-opened= Boolean(true)
            >
                <el-submenu v-for="(val,key,i) in staffList" :key="i" :index="i">
                    <template slot="title">
                        <span>{{key}}</span>
                    </template>
                    <el-menu-val v-for="(v,i) in val" :key="i" @click="checkClick(String(v.userid))">
                        <staff :main="v" />
                    </el-menu-val>
                </el-submenu>
            </el-menu>
        </el-col>
        <el-col class="sessionList">
            <h5>会话列表</h5>
            <el-menu
                class="el-menu-vertical-demo"
                background-color="#ddd"
                text-color="#333"
                active-text-color="#333"
            >
                <el-menu-item v-for="(item,k) in checkMain" :key="k" @click="sessCheck(item)">
                    <Session :main="item" />
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col>
            <h5>聊天记录</h5>
            <!-- flag 为区别滑动的展示不同设置变量 -->
            <Chat :content="chatInformation[0]" :flag="true" />
        </el-col>
    </div>
</template>

<script>
import Staff from "@/components/Staff.vue";
import Session from "@/components/Session.vue";
import Chat from "@/components/Chat.vue";
export default {
    name: "hello",
    data() {
        return {
            ind: "", //初始化选中员工下标
            // 员工列表
            // staffList: [
            //     {
            //         title: "BGC项目",
            //         main: [
            //             {
            //                 url: "1.jpg",
            //                 username: "石艳零",
            //                 num: 300
            //             },
            //             {
            //                 url: "2.jpg",
            //                 username: "乐",
            //                 num: 300
            //             },
            //         ]
            //     },
               
            // ],
            staffList:{},
            //会话列表
            checkMain: [
                // {
                //     main: [
                //         {
                //             url: "1.jpg",
                //             username: "石艳零",
                //             num: 300,
                //             time: "5/20"
                //         }
                //     ]
                // },
                // {
                //     main: [
                //         {
                //             url: "2.jpg",
                //             username: "乐",
                //             num: 300,
                //             time: "5/20"
                //         }
                //     ]
                // }
            ],
            //聊天记录
            chatInformation: []
        };
    },
    computed: {},
    components: {
        Chat,
        Staff,
        Session
    },
    created() {
        this.getStaffList();
        //初始化获取聊天数据
        // this.lineCheck();
    },
    mounted() {},
    methods: {
        // 获取公司所有员工列表
        getStaffList() {
            // setInterval(() => {
            this.$http("/user/users").then(response => {
                // console.log("response", response);
                this.staffList = response.data;
            });
            // }, 1000);
        },
        //点击员工列表中的item切换其下标
        checkClick(ind) {
            this.ind = ind;
            this.$http("/user/follows?userId="+ind).then(response => {
                console.log("response1111", response);
                this.checkMain = response.data;
                console.log(this.checkMain)
            });
        },
        //点击会话列表是再次获取聊天区域的数据
        sessCheck(item) {
            console.log(item)
            this.$http("/text/dialogue", { 
                page:1,
                limit:3,
                time_between:"2020-01-01 18:10:00",
                time_and:"2021-08-01 18:10:00",
                dialogue_id:item.dialogue_id
            }, "post")
            .then(response => {
                console.log("response", response);
            });
            this.lineCheck(item);
        },
        //获取聊天区域的数据的方法
        lineCheck() {
            //模拟获取到的数据
            let res = [
                {
                    msgtype: "text",
                    msgid: "9867567917735866980_1593751929",
                    action: "send",
                    fromm: "ShiYanLing",
                    fromm_name: "石艳零",
                    tolist: "[wm4fJCBgAAmMqeyeGHUieC7bZULKwyAA]",
                    tolist_name: "乐",
                    roomid: "",
                    msgtime: "2020-07-03 12:52:10",
                    content:
                        "湖南省携手“<span style='color:red'>泰康养老</span>”为长沙市社保居民定制专属“星惠保惠民保障方案”。切实解决“看病难、看病贵”等问题。"
                },
                {
                    msgtype: "text",
                    msgid: "9867567917735866980_1593751929",
                    action: "send",
                    fromm: "ShiYanLing",
                    fromm_name: "石艳零",
                    tolist: "[wm4fJCBgAAmMqeyeGHUieC7bZULKwyAA]",
                    tolist_name: "乐",
                    roomid: "",
                    msgtime: "2020-07-03 12:52:10",
                    content:
                        "湖南省携手“<span style='color:red'>泰康养老</span>”为长沙市社保居民定制专属“星惠保惠民保障方案”。切实解决“看病难、看病贵”等问题。"
                },
                {
                    msgtype: "text",
                    msgid: "9867567917735866980_1593751929",
                    action: "send",
                    fromm: "ShiYanLing",
                    fromm_name: "石艳零",
                    tolist: "[wm4fJCBgAAmMqeyeGHUieC7bZULKwyAA]",
                    tolist_name: "乐",
                    roomid: "",
                    msgtime: "2020-07-03 12:52:10",
                    content:
                        "湖南省携手“<span style='color:red'>泰康养老</span>”为长沙市社保居民定制专属“星惠保惠民保障方案”。切实解决“看病难、看病贵”等问题。"
                }
            ];
            //将数据改成聊天组件需要的格式
            let resData = {};
            let arr = [];
            res.map((item, index) => {
                if (this.ind) {
                    resData.customName = item.fromm_name;  //发送者
                    resData.staffName = item.tolist_name;  //接收者
                }
                resData.customName = item.tolist_name;
                resData.staffName = item.fromm_name;
                arr[index] = {
                    role: item.tolist.indexOf("[") === -1 ? "custom" : "staff",
                    msgtime: item.msgtime,
                    content: item.content
                };
            });
            resData.chatcontent = arr;
            //将改好的数据的赋值于聊天区域数据
            this.chatInformation.push(resData);
        }
    }
};
</script>

<style lang="scss" rel="stylesheet/scss" >
@import "../assets/scss/sessionBack.scss";

.sessionBack .staffList,
.sessionBack .sessionList {
    .el-menu-vertical-demo {
        max-height: calc(100vh - 200px);
        overflow-y: auto;
    }
    .el-submenu__title {
        border-bottom: 1px solid #ccc;
    }
    .el-menu-item {
        padding: 0 15px !important;
        border-bottom: 1px solid #ccc;
        * {
            vertical-align: top;
        }
    }
}
.sessionBack .sessionList .el-menu-item {
    height: 60px;
}
</style>