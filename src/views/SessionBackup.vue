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
                <el-submenu v-for="(val,key,i) in staffList" :key="i" :index="String(i)">
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
                <el-menu-item v-for="(item,k) in checkMain" :key="k" @click="sessCheck(item,1)">
                    <Session :main="item" />
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col>
            <h5>聊天记录</h5>
            <!-- flag 为区别滑动的展示不同设置变量 -->
            <Chat :content="chatInformation[0]" :flag="true" @page-change="pageChange" :isContinueGetList="isContinueGetList" />
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
            staffList:{},
            //会话列表
            checkMain: [],
            //聊天记录
            chatInformation: [{
                customName:"",
                staffName:"",
                chatcontent:[]
            }],
            page:1, //当前页数
            id:"" ,//获取聊天内容需要提供ID
            isContinueGetList:true ,//是否一直滚动的时候调用接口
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
                this.staffList = response.data;
            });
            // }, 1000);
        },
        //点击员工列表中的item切换其下标  获取会话列表
        checkClick(ind) {
            this.ind = ind;
            this.isContinueGetList=true //更改联系人时 可以获取回话列表
            this.$http("/user/follows?userId="+ind).then(response => {
                this.checkMain = response.data;
            });
            this.chatInformation=[{}] //聊天清空
        },
        //点击会话列表是再次获取聊天区域的数据
        sessCheck(item,index) {
            if(index==1){ //说明是头一次获取聊天记录   需要将数组清空
                this.chatInformation=[{}]
                this.page=1
                this.isContinueGetList=true
                // this.checkMain=[]
            }else if(index==2){ //说明是滚动加载  不能清空原始数组   页数还得加1
                this.page=this.page+1
            }
            this.id=item.dialogue_id
            if(this.isContinueGetList){
                 this.$http("/text/dialogue", { 
                    page:this.page,
                    limit:10,
                    time_between:"",
                    time_and:"",
                    dialogue_id:item.dialogue_id
                }, "post")
                .then(response => {
                    if(response.data.length>0){
                        this.lineCheck(response.data,index);
                        this.isContinueGetList=true
                    }else{
                        this.isContinueGetList=false
                        this.chatInformation=[{}]
                    }
                    
                });
            } 
        },
        //获取聊天区域的数据的方法
        lineCheck(list,index) {
            //模拟获取到的数据
            //将数据改成聊天组件需要的格式
            let resData = {};
            let arr = [];
            list.map((item, index) => {
                if (this.ind) {
                    resData.customName = item.fromm_name;  //发送者
                    resData.staffName = item.tolist_name;  //接收者
                }
                resData.customName = item.tolist_name;
                resData.staffName = item.fromm_name;
                arr[index] = { //wm是外部人员
                    role: item.tolist.indexOf("wm") === -1 ? "staff" : "custom",
                    msgtime: item.msgtime,
                    content: item.content
                };
            });
            resData.chatcontent = arr;
            //将改好的数据的赋值于聊天区域数据
            if(index==1){
                this.chatInformation=[]
                 this.chatInformation.push(resData);
            }else if(index==2){
                this.chatInformation[0].chatcontent = this.chatInformation[0].chatcontent.concat(arr);
            }
            // this.chatInformation[0].chatcontent.reverse()
        },
        pageChange(val){ //聊天改变 再次请求数据
            if(val=='add'){
                this.sessCheck({dialogue_id:this.id},2)
            }
        }
    }
};
</script>

<style lang="scss" rel="stylesheet/scss" >
@import "../assets/scss/sessionBack.scss";

.sessionBack .el-col {
  height: calc(100vh - 177px);
}
.sessionBack .staffList,
.sessionBack .sessionList {
    .el-menu-vertical-demo {
        max-height: calc(100vh - 228px);
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