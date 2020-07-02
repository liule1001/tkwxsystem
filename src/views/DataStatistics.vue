<template>
  <div class="about">
    <div class="elRow" style="width: 100%">
      <el-radio-group v-model="radio1">
        <el-radio-button label="本日" fill="#14b5b0"></el-radio-button>
        <el-radio-button label="昨日"></el-radio-button>
        <el-radio-button label="本周"></el-radio-button>
        <el-radio-button label="本月"></el-radio-button>
        <el-radio-button label="自定义时段"></el-radio-button>
      </el-radio-group>
      <div class="elTime">
        <div class="block">
          <el-date-picker v-model="value1" type="date" placeholder="起始日期" size="small" ></el-date-picker>
        </div>
        <span class="elTimeSpan">到</span>
        <div class="block-right">
          <el-date-picker v-model="value2" type="date" placeholder="终止日期" size="small" ></el-date-picker>
        </div>
        <el-button size="small">查询</el-button>
      </div>
      <el-button size="small">导出Excle</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="成员姓名" width="80"></el-table-column>
      <el-table-column prop="num" label="TK号" width="150"></el-table-column>
      <el-table-column label="通讯录">
        <el-table-column prop="newadd" label="新增客户数" width="80"></el-table-column>
        <el-table-column prop="applyadd" label="申请添加客户数" width="110"></el-table-column>
        <el-table-column prop="totalcustom" label="累计客户数" width="80"></el-table-column>
        <el-table-column prop="delcustom" label="删黑客户数" width="80"></el-table-column>
      </el-table-column>
      <el-table-column label="聊天">
        <el-table-column prop="checktotal" label="聊天总数" width="80"></el-table-column>
        <el-table-column prop="checktrig" label="主动聊天数" width="80"></el-table-column>
        <el-table-column prop="msgtotal" label="发送消息数" width="80"></el-table-column>
        <el-table-column prop="replyrato" label="回复聊天占比" width="80"></el-table-column>
        <el-table-column prop="replytime" label="首次回复平均时长" width="110"></el-table-column>
      </el-table-column>
      <el-table-column label="客户">
        <el-table-column prop="cusreplyratio" label="客户回复占比" width="110"></el-table-column>
        <el-table-column prop="trigcustom" label="主动响应客户数" width="110"></el-table-column>
        <el-table-column prop="sensitivecus" label="被动响应客户数" width="110"></el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      radio1: "",
      value1:"",
      value2:"",
      tableData: [
        {
          name: "一一",
          num: "0000001",
          newadd: 1,
          applyadd: 1,
          totalcustom: 1,
          delcustom: 1,
          checktotal: 1,
          checktrig: 1,
          msgtotal: 1,
          replyrato: 1,
          replytime: 1,
          cusreplyratio: 1,
          trigcustom: 1,
          sensitivecus: 1
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.el-button:focus,
.el-button:hover {
  color: #14b5b0 !important;
}
.el-radio-button {
  margin-right: 20px;
}

.elRow {
  display: flex;
  justify-content: space-evenly;
  .elDate {
    margin-right: 20px;
  }
  .elTime {
    display: flex;
    align-items: center;
    margin-right: 20px;
    .block-right {
      margin-right: 20px;
      .el-input__prefix{
        display: none;
      }
    }
    .elTimeSpan {
      margin: 0 20px;
    }

    .el-input--small .el-input__inner {
      width: 90px;
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>