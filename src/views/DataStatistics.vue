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
      <el-button size="small" @click="download()">导出Excle</el-button>
    </div>
    <div class="tableBox">
    <el-table :data="tableData" style="width: 100%" height="calc(100vh - 180px)">
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
      endTimeTom:"",//最后一天的后一天
      tableData: [],
      tempToken: ""
    };
  },
  
  mounted() {
      
    this.getTableData(today(),tommorrow())
  },
  methods: {
    getTableData(startTime,endTime) { //获取表格数据  不好用
      this.$http("/text/statistics?time_between="+startTime+"&time_and="+endTime)
      .then(response => {
        this.tableData=response.data
      });
    },
    timeChange(e){  //单选按钮事件变化事件
      this.radio1=e
      if(e==1){ //说明是查询当天内容 传当天和明天
        this.getTableData(today(),tommorrow())
        this.endTimeTom=''
      }else if(e==2){ //说明是查询昨天内容 传昨天和当天
        this.getTableData(yestoday(),today())
        this.endTimeTom=''
      }else if(e==3){ //说明是查询本周内容 传本周一和下周一
        this.getTableData(weekMon(),weekNextMon())
        this.endTimeTom=''
      }else if(e==4){ //说明是查询本月内容 传本月第一天和下月第一天
        this.getTableData(monthFirst(),monthNextFirst())
        this.endTimeTom=''
      }
    },
    select() {
      if (this.radio1 === "5") {
        // 自定义时段发送起始至终止日期  要查当天内容，需要给后端传当天之后的一天 所以要获取自定义的明天
        let tommorrows=new Date(this.endTime)
        tommorrows.setTime(tommorrows.getTime()+24*60*60*1000);
        this.endTimeTom = tommorrows.getFullYear()+"-" + (tommorrows.getMonth()+1) + "-" + tommorrows.getDate();
        this.getTableData(this.startTime,this.endTimeTom)
      } else {  //修改为点击按钮就请求一次  查询按钮只为自定义时间服务
        // 否则发送当日，本月等
      }
    },
    getExcel(startTime,endTime){ //下载Excel
      let elink = document.createElement('a');
      elink.download = "download.xls";
      elink.href = `http://139.9.138.74:8080/text/downloadExcel?time_between=${startTime}&time_and=${endTime}`;
      elink.click();
    },
    download(){  //点击下载按钮
      if(this.radio1 === "5"&&this.endTimeTom===''){
        this.$message.error("请先点击查询按钮")
      }else{
        if(this.radio1==1){ //说明是查询当天内容 传当天和明天
          this.getExcel(today(),tommorrow())
        }else if(this.radio1==2){ //说明是查询昨天内容 传昨天和当天
          this.getExcel(yestoday(),today())
        }else if(this.radio1==3){ //说明是查询本周内容 传本周一和下周一
          this.getExcel(weekMon(),weekNextMon())
        }else if(this.radio1==4){ //说明是查询本月内容 传本月第一天和下月第一天
          this.getExcel(monthFirst(),monthNextFirst())
        }else if(this.radio1==5){ //说明是查询自定义
          this.getExcel(this.startTime,this.endTimeTom)
        }
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
//   .tableBox {
//       max-height: calc(100vh - 180px);
//       overflow-y: auto;
//   }
}
</style>