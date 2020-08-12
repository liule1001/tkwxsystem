<template>
  <div class="activeResponse">
    <div style="margin: 5px 0 20px 0;">
      <el-radio-group v-model="radio1" size="small" @change="timeChange">
        <el-radio label="1" border>当日</el-radio>
        <el-radio label="2" border>昨日</el-radio>
        <el-radio label="3" border>本周</el-radio>
        <el-radio label="4" border>本月</el-radio>
      </el-radio-group>
    </div>
    <div>
      <el-col class="staffList">
        <h5>员工列表</h5>
        <el-menu
          mode="vertical"
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#ddd"
          text-color="#333"
          active-text-color="#333"
          :unique-opened="true"
        >
          <el-submenu v-for="(val,key,i) in staffList" :key="Number(i)" :index="String(i)">
            <template slot="title">
              <span>{{key}}</span>
            </template>
            <el-menu-item v-for="(v,i) in val" :key="Number(i)" @click="checkClick(v)">
              <staff :main="v" />
            </el-menu-item>
            <!-- <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
            </el-menu-item>-->
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col class="sessionList">
        <h5>会话列表</h5>
        <el-menu 
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#ddd"
          text-color="#333"
          active-text-color="#333"
        >
          <el-menu-item
            v-for="(item,k) in currentCoversation"
            :key="Number(k)"
            @click="sessCheck(item,1)"
          >
            <Session :main="item" />
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col>
        <h5>聊天记录</h5>
        <!-- flag 为区别滑动的展示不同设置变量 -->
        <Chat :content="chatInformation[0]" :flag="false" @page-change="pageChange" :isContinueGetList="isContinueGetList" />
      </el-col>
    </div>
  </div>
</template>

<script>
import Staff from "@/components/Staff.vue";
import Session from "@/components/Session.vue";
import Chat from "@/components/Chat.vue";
import {today, yestoday, tommorrow, weekMon, weekNextMon, monthFirst, monthNextFirst} from "@/assets/js/time.js"
export default {
  name: "hello",
  data() {
    return {
      radio1: "1",
      id:'', //初始化选中员工下标
      staffList:[],
      coversationList:{},//会话列表  是一个对象 key与员工列表中userId对应
      currentCoversation:[],//当前员工对应的会话列表
      chatInformation: [{}],//聊天记录
      page:1, //当前页数
      dialog_id:"" ,//获取聊天内容需要提供ID
      isContinueGetList:true ,//是否一直滚动的时候调用接口
      startTime:today(),
      endTime:tommorrow() ,
      // startTime:"2020-07-01",
      // endTime:"2020-07-30" ,
    };
  },
  components: {
    Chat,
    Staff,
    Session
  },
  created() {
    //初始化获取聊天数据
    // this.lineCheck();
  },
  mounted() {
    this.getStaffList() //获取员工信息
    this.getCoversationList(today(),tommorrow()) //刚进页面默认选择当天的日期进行筛选  传当天和下一天
    // this.getCoversationList("2020-07-19","2020-07-20")
  },
  methods: {
    getStaffList(){ //获取员工列表
      this.$http("/user/users").then(response => {
          this.staffList = response.data;
      });
    },
    getCoversationList(startTime,endTime){ //获取会话列表 最后进行匹配
      this.currentCoversation=[]//刚刚获取全部数据的时候 当前的会话调整为空
      this.chatInformation=[{}]
      this.$http("text/activeResponse?time_between="+startTime+"&time_and="+endTime)
      .then(response => {
          this.coversationList=response.data
      });
    },
    getRightResult(){ //匹配正确的员工和会话 进行展示
      for(let p in this.coversationList){
        if(this.id==p){ //筛选出员工对应的会话
          this.currentCoversation=this.coversationList[p]
          return
        }else{ //说明没有匹配项
          this.currentCoversation=[{}]
        }
        
      }
    
      
    },
    timeChange(e){  //单选按钮事件变化事件
      this.radio1=e
      if(e==1){ //说明是查询当天内容 传当天和明天
        this.getCoversationList(today(),tommorrow())
        this.startTime=today()
        this.endTime=tommorrow()
      }else if(e==2){ //说明是查询昨天内容 传昨天和当天
        this.getCoversationList(yestoday(),today())
        this.startTime=yestoday()
        this.endTime=today()
      }else if(e==3){ //说明是查询本周内容 传本周一和下周一
        this.getCoversationList(weekMon(),weekNextMon())
        this.startTime=weekMon()
        this.endTime=weekNextMon()
      }else if(e==4){ //说明是查询本月内容 传本月第一天和下月第一天
        this.getCoversationList(monthFirst(),monthNextFirst())
        this.startTime=monthFirst()
        this.endTime=monthNextFirst()
      }
    },
    //点击员工列表中的item获取id
    checkClick(item) {
      this.id = item.userid;
      this.currentCoversation=[] //当前会话列表清空
      this.chatInformation=[{}] //聊天记录清空
      this.getRightResult()
    },
    //点击会话列表是再次获取聊天区域的数据
    sessCheck(item,index) {
        if(index==1){ //说明是头一次获取聊天记录   需要将数组清空
            this.chatInformation=[{}]
            this.page=1
            this.isContinueGetList=true
        }else if(index==2){ //说明是滚动加载  不能清空原始数组   页数还得加1
            this.page=this.page+1
        }
        this.dialog_id=item.dialogue_id
        if(this.isContinueGetList){
              this.$http("/text/dialogue", { 
                page:this.page,
                limit:100,
                time_between:`${this.startTime} 00:00:00`,
                time_and:`${this.endTime} 00:00:00`,
                dialogue_id:item.dialogue_id
            }, "post")
            .then(response => {
                if(response.data.length>0){
                    this.lineCheck(response.data,index);
                    this.isContinueGetList=true
                }else{
                    this.isContinueGetList=false
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
            this.sessCheck({dialogue_id:this.dialog_id},2)
        }
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" >
@import "../assets/scss/sessionBack.scss";
.activeResponse .el-col {
  height: calc(100vh - 177px);
}
.activeResponse .el-menu-vertical-demo {
  height: auto;
  max-height: calc(100vh - 228px);
  overflow-y: auto;
}
.staffList,
.sessionList {
  .el-submenu__title {
    border-bottom: 1px solid #ccc;
  }
  .el-menu-item {
    padding: 0 15px !important;
    height: 60px;
    border-bottom: 1px solid #ccc;
    * {
      vertical-align: top;
    }
  }
}
.activeResponse .sessionList .el-menu-item {
  height: 60px;
}
</style>