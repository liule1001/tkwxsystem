<template>
  <div class="activeResponse">
    <h3>主动响应客户</h3>
    <div style="margin: 5px 0 20px 0;">
      <el-radio-group v-model="radio1" size="small">
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
            @click="sessCheck(k)"
          >
            <Session :main="item" />
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col>
        <h5>聊天记录{{ind}}{{uid}}</h5>
        <!-- flag 为区别滑动的展示不同设置变量 -->
        <Chat :content="getData.chatInformation[uid]" :flag="true" />
      </el-col>
    </div>
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
      radio1: "1",
      ind: 0,
      uid: 0,
      getData: {
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
    this.lineCheck(this.uid);
  },
  mounted() {},
  methods: {
    checkClick(ind) {
      this.ind = ind;
      this.uid = 0;
    },
    sessCheck(uid) {
      this.uid = uid;
    },
    lineCheck() {
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

      this.getData.chatInformation.push(resData);
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" >
@import "../assets/scss/sessionBack.scss";
.activeResponse .el-col {
  height: calc(100vh - 204px);
}
.activeResponse .el-menu-vertical-demo {
  height: auto;
  max-height: calc(100vh - 255px);
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