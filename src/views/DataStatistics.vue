<template>
  <div class="about">
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
<style lang="scss" rel="stylesheet/scss">
</style>