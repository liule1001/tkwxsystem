<template>
  <div class="sessionBack">
    <el-col class="staffList">
      <h5>员工列表</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#ddd"
        text-color="#333"
        active-text-color="#333"
      >
        <el-submenu index="1">
          <template slot="title">
            <span>敏感词</span>
          </template>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <span>客户响应</span>
          </template>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
          <el-menu-item>
            <staff />
          </el-menu-item>
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
        <el-menu-item>
          <Session />
        </el-menu-item>

        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>

        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>

        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>

        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>

        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>

        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>

        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>

        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>

        <el-menu-item>
          <Session />
        </el-menu-item>
        <el-menu-item>
          <Session />
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col>
      <h5>聊天记录</h5>
      <Chat :content="chatInformation" />
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
      chatInformation: {
        Sender: "一一",
        receiver: "二二",
        chatcontent: [
          {
            role: "Sender",
            timeOne: "2020-07-03",
            timeTwo: "12:13:14",
            content: "聊天备份1"
          },
          {
            role: "receiver",
            timeOne: "2020-01-01",
            timeTwo: "01:02:03",
            content: "聊天备份2"
          },
          {
            role: "receiver",
            timeOne: "2020-01-01",
            timeTwo: "01:02:03",
            content: "聊天备份3"
          }
        ]
      }
    };
  },
  components: {
    Chat,
    Staff,
    Session
  },
  mounted() {},
  methods: {}
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