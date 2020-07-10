<template>
  <div class="about">
    <h1>触发敏感词</h1>
    <div>
      <!-- max-height="500" -->
      <el-table :data="tableData" style="width: 100%" height="380px" border>
        <el-table-column prop="fromm_name" label="发送人" align="center"></el-table-column>
        <el-table-column prop="formmIdentity" label="发送人身份" align="center"></el-table-column>
        <el-table-column prop="msgtime" label="发送时间" align="center">
          <template slot-scope="scope">
            <div v-html="scope.row.msgtime"></div>
          </template>
        </el-table-column>
        <el-table-column prop="content" label="发送内容" align="center">
          <template slot-scope="scope">
            <div v-html="scope.row.content" class="tableLimit"></div>
          </template>
        </el-table-column>
        <el-table-column prop="tolist_name" label="接收人" align="center"></el-table-column>
        <el-table-column prop="tolistIdentity" label="接收人身份" align="center"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="details(scope.row,scope.$index)" type="text" size="small">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="count"
        :page-size="10"
        @current-change="handleCurrentChange"
        class="pagination"
      ></el-pagination>
    </div>
    <div v-if="modalShow">
      <el-dialog title="聊天内容" :visible.sync="modalShow" center>
        <!-- flag 为区别滑动的展示不同设置变量 -->
        <Chat :content="chatInformation" :flag="false" />
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Chat from "@/components/Chat.vue";
export default {
  components: { Chat },
  data() {
    return {
      tableData: [],
      modalShow: false,
      chatInformation: {},
      count: 100
    };
  },
  created() {
    let res = [
      {
        msgtype: "text",
        msgid: "12271759686357257076_1593752074",
        action: "send",
        fromm: "WuXiaoWen",
        fromm_name: "吴晓雯",
        tolist: "[wm4fJCBgAA9Ryoo8mEFptgooXcZFQZBQ]",
        tolist_name: "乐",
        roomid: "",
        msgtime: "2020-07-03 12:54:34",
        content: "触发了<span style='color:red'>12345</span>敏感词"
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
        msgid: "12271759686357257076_1593752074",
        action: "send",
        fromm: "WuXiaoWen",
        tolist: "[wm4fJCBgAA9Ryoo8mEFptgooXcZFQZBQ]",
        roomid: "",
        msgtime: "2020-07-03 12:54:34",
        content: "触发了<span style='color:red'>12345</span>敏感词"
      },
      {
        msgtype: "text",
        msgid: "9867567917735866980_1593751929",
        action: "send",
        fromm: "ShiYanLing",
        tolist: "[wm4fJCBgAAmMqeyeGHUieC7bZULKwyAA]",
        roomid: "",
        msgtime: "2020-07-03 12:52:10",
        content:
          "湖南省携手“<span style='color:red'>泰康养老</span>”为长沙市社保居民定制专属“星惠保惠民保障方案”。切实解决“看病难、看病贵”等问题。"
      }
    ];
    // 初始化请求
    // let param = {
    //   page: 1,
    //   limit: 10,
    //   msgtype: "text"
    // };
    // this.$http
    // .post({ url: "/ceping-0.0.1-SNAPSHOT/ceping/save",arg: param})
    //   .then(response => {
    //     console.log("response", response);
    //   });
    let table = res.map(item => {
      return {
        formm: item.fromm,
        fromm_name: item.fromm_name,
        formmIdentity: item.fromm.match("wm4f") ? "客户" : "员工",
        msgtime: item.msgtime.replace(/\s+/g, "<br/>"),
        content: item.content,
        tolist: item.tolist,
        tolist_name: item.tolist_name,
        tolistIdentity: item.tolist.match("wm4f") ? "客户" : "员工"
      };
    });
    this.tableData = table;
  },
  methods: {
    // deleteRow(index, rows) {
    //   // rows.splice(index, 1);
    //   this.modalShow = !this.modalShow
    //   alert(this.modalShow)
    // }
    details(index) {
      console.log(index);
      let staffName =
        index.formmIdentity === "员工" ? index.fromm_name : index.tolist_name; //通过判断是不是客户确定是哪个位置
      let customName =
        index.formmIdentity === "员工" ? index.tolist_name : index.fromm_name;
      let staffId = index.formmIdentity === "员工" ? index.formm : index.tolist;
      let customId = index.formmIdentity === "员工" ? index.tolist : index.fromm;
      console.log(index.formmIdentity,index.formmIdentity === "员工",staffId,customId)
      // 请求数据，回调执行一下操作
      // let param = {
      //   page: 1,
      //   limit: 10,
      //   msgtype: "text",
      //   tolist:index.tolist,
      //   formm:index.formm,
      //   time_between:item.msgtime.replace('<br/>', " ")
      // };
      // this.$http
      // .post({ url: "/ceping-0.0.1-SNAPSHOT/ceping/save",arg: param})
      //   .then(response => {
      //     console.log("response", response);
      //   });
      let res = [
        {
          msgtype: "text",
          msgid: "6090739809806389162_1593580896",
          action: "send",
          fromm: "WuXiaoWen",
          // fromm_name:''
          tolist: "[wm4fJCBgAA9Ryoo8mEFptgooXcZFQZBQ]",
          roomid: "",
          msgtime: "2020-07-01 13:21:37",
          content: "聊天<span style='color:red'>一</span>"
        },
        {
          msgtype: "text",
          msgid: "18359870725314323191_1593580901",
          action: "send",
          fromm: "WuXiaoWen",
          tolist: "[wm4fJCBgAA9Ryoo8mEFptgooXcZFQZBQ]",
          roomid: "",
          msgtime: "2020-07-01 13:21:41",
          content: "我这信号好像不太好"
        },
        {
          msgtype: "text",
          msgid: "13844107868684910760_1593580916",
          action: "send",
          fromm: "[wm4fJCBgAA9Ryoo8mEFptgooXcZFQZBQ]",
          tolist: "WuXiaoWen",
          roomid: "",
          msgtime: "2020-07-01 13:21:56",
          content: "马上"
        },
        {
          msgtype: "text",
          msgid: "6090739809806389162_1593580896",
          action: "send",
          fromm: "[wm4fJCBgAA9Ryoo8mEFptgooXcZFQZBQ]",
          tolist: "WuXiaoWen",
          roomid: "",
          msgtime: "2020-07-01 13:21:37",
          content: "聊天<span style='color:red'>一</span>"
        },
        {
          msgtype: "text",
          msgid: "18359870725314323191_1593580901",
          action: "send",
          fromm: "WuXiaoWen",
          tolist: "[wm4fJCBgAA9Ryoo8mEFptgooXcZFQZBQ]",
          roomid: "",
          msgtime: "2020-07-01 13:21:41",
          content: "我这信号好像不太好"
        },
        {
          msgtype: "text",
          msgid: "13844107868684910760_1593580916",
          action: "send",
          fromm: "[wm4fJCBgAA9Ryoo8mEFptgooXcZFQZBQ]",
          tolist: "WuXiaoWen",
          roomid: "",
          msgtime: "2020-07-01 13:21:56",
          content: "马上"
        },
        {
          msgtype: "text",
          msgid: "6090739809806389162_1593580896",
          action: "send",
          fromm: "[wm4fJCBgAA9Ryoo8mEFptgooXcZFQZBQ]",
          tolist: "WuXiaoWen",
          roomid: "",
          msgtime: "2020-07-01 13:21:37",
          content: "聊天<span style='color:red'>一</span>"
        },
        {
          msgtype: "text",
          msgid: "18359870725314323191_1593580901",
          action: "send",
          fromm: "WuXiaoWen",
          tolist: "[wm4fJCBgAA9Ryoo8mEFptgooXcZFQZBQ]",
          roomid: "",
          msgtime: "2020-07-01 13:21:41",
          content: "我这信号好像不太好"
        },
        {
          msgtype: "text",
          msgid: "13844107868684910760_1593580916",
          action: "send",
          fromm: "[wm4fJCBgAA9Ryoo8mEFptgooXcZFQZBQ]",
          tolist: "WuXiaoWen",
          roomid: "",
          msgtime: "2020-07-01 13:21:56",
          content: "马上"
        },
        {
          msgtype: "text",
          msgid: "6090739809806389162_1593580896",
          action: "send",
          fromm: "[wm4fJCBgAA9Ryoo8mEFptgooXcZFQZBQ]",
          tolist: "WuXiaoWen",
          roomid: "",
          msgtime: "2020-07-01 13:21:37",
          content: "聊天<span style='color:red'>一</span>"
        }
      ];
      let chatcontent = res.map(item => {
        return {
          role: item.fromm === staffId ? "staff" : "custom",
          msgtime: item.msgtime,
          content: item.content
        };
      });
      let chatInformation = {
        staffId: staffId,
        customId: customId,
        staffName: staffName,
        customName: customName,
        chatcontent: chatcontent
      };
      this.chatInformation = chatInformation;
      this.modalShow = !this.modalShow;
    },
    handleCurrentChange(e) {
      console.log("第几页", e);
      // 再次请求
      // let param = {
      //   page: e,
      //   limit: 10,
      //   msgtype: "text"
      // };
      // this.$http
      // .post({ url: "/ceping-0.0.1-SNAPSHOT/ceping/save",arg: param})
      //   .then(response => {
      //     console.log("response", response);
      //   });
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.el-dialog__body {
  padding: 0;
}
.el-dialog--center .el-dialog__body {
  padding: 0;
}
.tableLimit {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /*可以显示的行数，超出部分用...表示 */
  -webkit-box-orient: vertical;
}
.pagination {
  float: right;
  margin-top: 10px;
}
</style>