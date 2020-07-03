<template>
  <div class="passiveResponse">
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
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <span>客户响应</span>
            </template>
            <el-menu-item>
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
            </el-menu-item>
            <el-menu-item>
              <Response />
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
            <CustomerNotes />
          </el-menu-item>
          <el-menu-item>
            <CustomerNotes />
          </el-menu-item>
          <el-menu-item>
            <CustomerNotes />
          </el-menu-item>
          <el-menu-item>
            <CustomerNotes />
          </el-menu-item>
          <el-menu-item>
            <CustomerNotes />
          </el-menu-item>
          <el-menu-item>
            <CustomerNotes />
          </el-menu-item>
          <el-menu-item>
            <CustomerNotes />
          </el-menu-item>
          <el-menu-item>
            <CustomerNotes />
          </el-menu-item>
          <el-menu-item>
            <CustomerNotes />
          </el-menu-item>
          <el-menu-item>
            <CustomerNotes />
          </el-menu-item>
          <el-menu-item>
            <CustomerNotes />
          </el-menu-item>
          <el-menu-item>
            <CustomerNotes />
          </el-menu-item>
          <el-menu-item>
            <CustomerNotes />
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col>
        <h5>聊天记录</h5>
        <Chat :content="chatInformation" />
      </el-col>
    </div>
  </div>
</template>

<script>
import Response from "@/components/Response.vue";
import Chat from "@/components/Chat.vue";
import CustomerNotes from "@/components/CustomerNotes.vue";
export default {
  name: "hello",
  data() {
    return {
      radio1: "1",
      chatInformation: {
        Sender: "一一",
        receiver: "二二",
        chatcontent: [
          {
            role: "Sender",
            timeOne: "2020-07-03",
            timeTwo: "12:13:14",
            content: "被动响应1"
          },
          {
            role: "receiver",
            timeOne: "2020-01-01",
            timeTwo: "01:02:03",
            content: "被动响应2"
          },
          {
            role: "receiver",
            timeOne: "2020-01-01",
            timeTwo: "01:02:03",
            content: "被动响应3"
          }
        ]
      }
    };
  },
  components: {
    Chat,
    Response,
    CustomerNotes
  },
  mounted() {},
  methods: {}
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