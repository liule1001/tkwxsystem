<template>
  <div class="about">
    <div class="elRow">
      <div class="elDate">
        <el-button  size="small" >当日</el-button>
        <el-button  size="small" >昨日</el-button>
        <el-button  size="small" >本周</el-button>
        <el-button  size="small" >本月</el-button>
      </div>
      <div class="elTime">
        <el-button  size="small" >自定义时段</el-button>
        <el-button  size="small" disabled>起始日期</el-button>
        <span>到</span>
        <el-button  size="small" disabled>终止日期</el-button>
        <el-button  size="small" >查询</el-button>
      </div>
      <el-button  size="small" >导出Excle</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="150"></el-table-column>
      <el-table-column label="地址">
        <el-table-column prop="province" label="省份" width="120"></el-table-column>
        <el-table-column prop="city" label="市区" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" width="300"></el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.el-button:focus, .el-button:hover{
  color: #14b5b0 !important;
}
.elRow {
  display: flex;
  .elDate{
    margin-right: 20px;
  }
}
</style>