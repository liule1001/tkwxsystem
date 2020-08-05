<template>
  <div class="dataStatistics">
    <div class="elRow" style="width: 100%">
      <el-radio-group v-model="radio1" size="small" @change="timeChange">
        <el-radio label="1" border>当日</el-radio>
        <el-radio label="2" border>昨日</el-radio>
        <el-radio label="3" border>本周</el-radio>
        <el-radio label="4" border>本月</el-radio>
        <el-radio label="5" border>自定义时段</el-radio>
      </el-radio-group>
      <div class="timeBox">
        <el-date-picker
          v-model="startTime"
          type="date"
          placeholder="起始日期"
          :disabled="radio1&&radio1!=='5'"
          size="small"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
        <span class="elTimeSpan">到</span>
        <el-date-picker
          v-model="endTime"
          type="date"
          placeholder="终止日期"
          :disabled="radio1&&radio1!=='5'"
          size="small"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </div>

      <el-button size="small" @click="select()">查询</el-button>
      <el-button size="small">导出Excle</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="user_name" label="成员姓名" align="center"></el-table-column>
      <el-table-column prop="userid" label="TK号" align="center"></el-table-column>
      <el-table-column label="通讯录" align="center">
        <el-table-column prop="new_custs" label="新增客户数" align="center" width="69%">
          <template slot-scope="scope">{{scope.row.new_custs||0}}</template>
        </el-table-column>
        <el-table-column prop="" label="申请添加客户数" align="center" width="69%">
          <template slot-scope="scope">{{scope.row.apply_add_custs||0}}</template>
        </el-table-column>
        <el-table-column prop="total_custs" label="累计客户数" align="center" width="69%">
          <template slot-scope="scope">{{scope.row.total_custs||0}}</template>
        </el-table-column>
        <el-table-column prop="delete_custs" label="删黑客户数" align="center" width="69%">
          <template slot-scope="scope">{{scope.row.delete_custs||0}}</template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="聊天" align="center">
        <el-table-column prop="" label="聊天总数" align="center" width="69%">
          <template slot-scope="scope">{{scope.row.chat_persons||0}}</template>
        </el-table-column>
        <el-table-column prop="" label="主动聊天数" align="center" width="69%">
          <template slot-scope="scope">{{scope.row.active_chats||0}}</template>
        </el-table-column>
        <el-table-column prop="" label="发送消息数" align="center" width="69%">
          <template slot-scope="scope">{{scope.row.msg_count||0}}</template>
        </el-table-column>
        <el-table-column prop="" label="回复聊天占比" align="center" width="69%">
          <template slot-scope="scope">{{scope.row.send_ratio||0}}</template>
        </el-table-column>
        <el-table-column prop="" label="首次回复平均时长" align="center" width="69%">
          <template slot-scope="scope">{{scope.row.duration||'00:00:00'}}</template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="客户" align="center">
        <el-table-column prop="" label="客户回复占比" align="center" width="69%">
          <template slot-scope="scope">{{scope.row.receive_ratio||'0'}}</template>
        </el-table-column>
        <el-table-column prop="active" label="主动响应客户数" align="center" width="69%">
          <template slot-scope="scope">{{scope.row.active||'0'}}</template>
        </el-table-column>
        <el-table-column prop="passive" label="被动响应客户数" align="center" width="69%">
          <template slot-scope="scope">{{scope.row.passive||'0'}}</template>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
import {today, yestoday, tommorrow, weekMon, weekNextMon, monthFirst, monthNextFirst} from "@/assets/js/time.js"

export default {
  data() {
    return {
      radio1: "1",
      startTime: "",
      endTime: "",
      tableData: []
    };
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    getTableData() { //获取表格数据  不好用
      this.$http("/text/statistics?time_between=2020-01-10&time_and=2020-08-04")
      .then(response => {
        this.tableData=response.data
          console.log("response", response);
      });
    },
    select() {
      if (this.radio1 === "5") {
        // 自定义时段发送起始至终止日期
        this.$http
          .post({ url: "/ceping-0.0.1-SNAPSHOT/ceping/save" })
          .then(response => {
            console.log("response", response);
          });
      } else {
        // 否则发送当日，本月等
        this.$http
          .post({ url: "/ceping-0.0.1-SNAPSHOT/ceping/save" })
          .then(response => {
            console.log("response", response);
          });
      }
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.dataStatistics {
  .elRow {
    margin: 0 0 20px 0;
    .el-radio {
      margin-right: 5px;
    }
    .timeBox {
      display: inline-block;
      margin: 0 20px;
      .el-input {
        width: 130px !important;
      }
      .elTimeSpan {
        margin: 0 5px;
      }
    }
  }
}
</style>