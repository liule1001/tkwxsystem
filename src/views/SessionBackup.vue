<template>
  <div class="sessionBack">
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
      <Chat :content="getData.chatInformation[0]" :flag="true" />
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
  computed: {
    // checkdata() {
    //   let { customName, staffName } = JSON.parse(
    //     JSON.stringify(this.getData.chatInformation[0].customName)
    //   );
    //   this.getData.chatInformation[0].customName = staffName;
    //   this.getData.chatInformation[0].staffName = customName;
    //   return this.getData.chatInformation[0];
    // }
  },
  components: {
    Chat,
    Staff,
    Session
  },
  created() {
    this.lineCheck();
  },
  mounted() {},
  methods: {
    checkClick(ind) {
      this.ind = ind;
      this.uid = 0;
      this.lineCheck();
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
        if (this.ind) {
          resData.customName = item.fromm_name;
          resData.staffName = item.tolist_name;
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

      this.getData.chatInformation.push(resData);
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" >
@import "../assets/scss/sessionBack.scss";

.sessionBack .staffList,
.sessionBack .sessionList {
  .el-menu-vertical-demo {
    max-height: calc(100vh - 170px);
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