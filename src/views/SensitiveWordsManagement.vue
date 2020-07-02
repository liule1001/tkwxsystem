<template>
  <div class="about">
    <h1>敏感词管理</h1>
    <el-button plain @click="add">新增敏感词</el-button>
    <div class="existbox">
      <div class="sensitivetype">已有敏感词</div>
      <div class="editbox">
        <div v-for="(item,index) of dataSource" v-bind:key="index" class="innerbox">
          <el-button plain @click="isShow(index)">{{dataSource[index].data}}</el-button>
          <div class="editbtn" v-show="dataSource[index].isShowBtn">
            <div @click="cancle(index)">
              <i class="el-icon-close"></i>
            </div>
            <div @click="edit(index)">
              <i class="el-icon-edit"></i>
            </div>
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
      dataSource: [
        { data: "123457890-0987654", isShowBtn: false },
        { data: "1", isShowBtn: false },
        { data: "2", isShowBtn: false },
        { data: "1", isShowBtn: false },
        { data: "2", isShowBtn: false },
        { data: "1", isShowBtn: false },
        { data: "2", isShowBtn: false },
        { data: "1", isShowBtn: false },
        { data: "2", isShowBtn: false },
        { data: "1", isShowBtn: false },
        { data: "2", isShowBtn: false },
        { data: "1", isShowBtn: false },
        { data: "2", isShowBtn: false },
        { data: "1", isShowBtn: false },
        { data: "2", isShowBtn: false },
        { data: "1", isShowBtn: false },
        { data: "2", isShowBtn: false },
        { data: "3", isShowBtn: false }
      ]
    };
  },
  methods: {
    open(index) {
      this.$prompt(this.popTitle, {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValidator: e => {
          const reg = /[\u4E00-\u9FA5]/g;
          let len = 0;
          let chcode = e.match(reg);
          if (chcode) {
            len = chcode.length;
          }
          let symbolLength = e.length - len;
          if ((symbolLength + len * 2) <= 16) {
            console.log(symbolLength + len * 2)
            return true;
          } else {
            return false;
          }
        },
        inputErrorMessage: "长度最多16个字符(1个汉字=2个字符)",
        inputPlaceholder: "填写敏感词",
        showClose: false
      })
        .then(() => {
          // 接口请求

          this.$message({
            type: "success",
            message: this.popTitle + "成功"
          });
          if (index === 0 || index) {
            this.dataSource[index].isShowBtn = false;
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
          if (index === 0 || index) {
            this.dataSource[index].isShowBtn = false;
          }
        });
    },
    cancle(index) {
      this.$message({
        type: "info",
        message: "删除成功"
      });
      this.dataSource[index].isShowBtn = false;
    },
    edit(index) {
      this.popTitle = "修改敏感词";
      this.open(index);
    },
    add() {
      this.popTitle = "新增敏感词";
      this.open();
    },
    isShow(index) {
      console.log(index);
      this.dataSource[index].isShowBtn = !this.dataSource[index].isShowBtn;
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
.existbox {
  display: flex;
  align-items: flex-start;
}
.sensitivetype {
  margin-top: 20px;
  margin-right: 60px;
  width: 110px;
  text-align: center;
}
.editbox {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.innerbox {
  margin: 20px 20px 0 0;
}

.editbtn {
  display: flex;
  justify-content: space-between;
}
</style>