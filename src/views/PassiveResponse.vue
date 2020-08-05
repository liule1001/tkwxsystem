<template>
  <div class="passiveResponse">
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
        <!-- horizontal,vertical -->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          mode="vertical"
          background-color="#ddd"
          text-color="#333"
          active-text-color="#333"
          :unique-opened="true"
        >
          <el-submenu v-for="(item,index) in getData.first" :key="index" index="index">
            <template slot="title">
              <span>{{item.title}}</span>
            </template>
            <el-menu-item v-for="(v,i) in item.main" :key="i" @click="checkClick(i)">
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
            v-for="(item,k) in getData.checkMain[ind].main"
            :key="k"
            @click="sessCheck()"
          >
            <Session :main="item" />
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col>
        <h5>聊天记录</h5>
        <!-- flag 为区别滑动的展示不同设置变量 -->
        <Chat :content="getData.chatInformation[0]" :flag="true" />
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
      ind: 0, //初始化选中员工下标
      getData: {
        // 员工列表
        first: [
          {
            title: "BGC项目",
            main: [
              {
                url: "1.jpg",
                username: "石艳零",
                num: 300
              },
              {
                url: "2.jpg",
                username: "乐",
                num: 300
              }
            ]
          }
        ],
        //会话列表
        checkMain: [
          {
            main: [
              {
                url: "1.jpg",
                username: "石艳零",
                num: 300,
                time: "5/20"
              }
            ]
          },
          {
            main: [
              {
                url: "2.jpg",
                username: "乐",
                num: 300,
                time: "5/20"
              }
            ]
          }
        ],
        //聊天记录
        chatInformation: []
      }
    };
  },
  components: {
    Chat,
    Staff,
    Session
  },
  created() {
    //初始化获取聊天数据
    this.lineCheck();
  },
  mounted() {
    this.getStaffList(today(),tommorrow()) //刚进页面默认选择当天的日期进行筛选  传当天和下一天
  },
  methods: {
    getStaffList(startTime,endTime){ //获取员工列表 
      this.$http("text/passiveResponse?time_between="+startTime+"&time_and="+endTime)
      .then(response => {
          console.log("response", response);
      });
    },
    timeChange(e){  //单选按钮事件变化事件
      console.log(e,'当前选择的内容')
      this.radio1=e
      if(e==1){ //说明是查询当天内容 传当天和明天
        this.getStaffList(today(),tommorrow())
      }else if(e==2){ //说明是查询昨天内容 传昨天和当天
        this.getStaffList(yestoday(),today())
      }else if(e==3){ //说明是查询本周内容 传本周一和下周一
        this.getStaffList(weekMon(),weekNextMon())
      }else if(e==4){ //说明是查询本月内容 传本月第一天和下月第一天
        this.getStaffList(monthFirst(),monthNextFirst())
      }
    },
    //点击员工列表中的item切换其下标
    checkClick(ind) {
      this.ind = ind;
    },
    //点击会话列表是再次获取聊天区域的数据
    sessCheck() {
      this.lineCheck();
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
          tolist: "ShiYanLing",
          fromm_name: "石艳零",
          fromm: "[wm4fJCBgAAmMqeyeGHUieC7bZULKwyAA]",
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
      this.getData.chatInformation.push(resData);
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" >
@import "../assets/scss/sessionBack.scss";
.passiveResponse .el-col {
  height: calc(100vh - 204px);
}
.passiveResponse .el-menu-vertical-demo {
  height: auto;
  max-height: calc(100vh - 255px);
  overflow-y: auto;
}
.passiveResponse .staffList,
.passiveResponse .sessionList {
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
.passiveResponse .sessionList .el-menu-item {
  height: 60px;
}
</style>