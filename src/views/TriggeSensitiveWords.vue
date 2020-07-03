<template>
  <div class="about">
    <h1>触发敏感词</h1>
    <div>
      <el-table :data="tableData" style="width: 100%" max-height="500" border>
        <el-table-column prop="date" label="发送人" align="center"></el-table-column>
        <el-table-column prop="name" label="发送人身份" align="center"></el-table-column>
        <el-table-column prop="province" label="发送时间" align="center"></el-table-column>
        <el-table-column prop="city" label="发送内容" align="center"></el-table-column>
        <el-table-column prop="address" label="接收人" align="center"></el-table-column>
        <el-table-column prop="zip" label="接收人身份" align="center"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="details(scope.row,scope.$index)" type="text" size="small">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-if="modalShow">
      <el-dialog title="聊天内容" :visible.sync="modalShow" center>
        <Chat :content="chatInformation" />
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
      tableData: [
        {
          date: "一一",
          name: "客户",
          province: (
            <div>
              <div>2020-07-01</div>
              <div>12：12：12</div>
            </div>
          ),
          city: <div style="color:red">12345</div>,
          address: "二二",
          zip: "员工"
        },
        {
          date: "三三",
          name: "客户",
          province: (
            <div>
              <div>2020-07-01</div>
              <div>12：12：12</div>
            </div>
          ),
          city: (
            <div>
              触发了<span style="color:red">红色敏感字</span>
            </div>
          ),
          address: "四四",
          zip: "员工"
        }
      ],
      modalShow: false,
      form: {
        name: "1",
        region: "1",
        date1: "1",
        date2: "1",
        delivery: false,
        type: [],
        resource: "1",
        desc: "1"
      },
      chatInformation: {
        Sender: "一一",
        receiver: "二二",
        chatcontent: [
          {
            role: "Sender",
            timeOne: "2020-07-03",
            timeTwo: "12:13:14",
            content: "巴拉巴拉聊天聊天聊天聊天"
          },
          {
            role: "receiver",
            timeOne: "2020-01-01",
            timeTwo: "01:02:03",
            content: "哔哔叭叭哈哈哈哈哈哈哈哈哈哈"
          },
          {
            role: "receiver",
            timeOne: "2020-01-01",
            timeTwo: "01:02:03",
            content: "第三段聊天"
          }
        ]
      }
    };
  },
  created() {},
  methods: {
    // deleteRow(index, rows) {
    //   // rows.splice(index, 1);
    //   this.modalShow = !this.modalShow
    //   alert(this.modalShow)
    // }
    details(index, rows) {
      console.log(index, rows);
      this.modalShow = !this.modalShow;
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
</style>