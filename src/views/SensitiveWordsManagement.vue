<template>
  <div class="about">
    <h1>敏感词管理</h1>
    <el-button plain @click="add">新增敏感词</el-button>
    <div>已有敏感词</div>
    <div v-for="(item,index) of dataSource" v-bind:key="index">
      <div>
        <el-button plain>{{item}}</el-button>
        <div :class="edit_btn">
          <div @click="cancle">
            <i class="el-icon-close"></i>
          </div>
          <div @click="edit">
            <i class="el-icon-edit"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      popTitle: "",
      dataSource: ["1", "2", "3"]
    };
  },
  methods: {
    open() {
      this.$prompt(this.popTitle, {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        // inputPattern: ,
        inputErrorMessage: "长度最多16个字符(1个汉字=2个字符)"
      })
        .then(() => {
          // 接口请求

          this.$message({
            type: "success",
            message: this.popTitle + "成功"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    cancle() {
       this.$message({
            type: "info",
            message: "删除成功"
          });
    },
    edit() {
      this.popTitle = "修改敏感词";
      this.open();
    },
    add() {
      this.popTitle = "新增敏感词";
      this.open();
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
.edit_btn{
  display: flex;
}
</style>