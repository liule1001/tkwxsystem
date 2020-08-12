<template>
  <div class="about">
    <el-button plain @click="open('new','')">新增敏感词</el-button>
    <div class="existbox">
      <div class="sensitivetype">已有敏感词</div>
      <div class="editbox">
        <div v-for="(item,index) of dataSource" v-bind:key="index" class="innerbox">
          <el-button plain @click="isShow(index)">{{dataSource[index].data}}</el-button>
          <div class="editbtn" v-show="dataSource[index].isShowBtn">
            <div @click="cancle(item)">
              <i class="el-icon-close"></i>
            </div>
            <div @click="open('edit',item.id)">
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
        { data: "2", isShowBtn: false }
      ]
    };
  },
  mounted(){
    this.getWords()
  },
  methods: {
    getWords(){
      this.$http("/text/sensitiveWords")   //首先获取敏感词列表
      .then(response => {
        this.dataSource = []
        let wordList= [] 
        wordList = response.data
        for(let i=0;i<wordList.length;i++){
          let obj={}
          obj.data=wordList[i].word_name
          obj.isShowBtn = false
          obj.id=wordList[i].id
          this.dataSource.push(obj)
        }
      
      });
    },
    open(sign,id) {
      if(sign==='new'){ //说明是新增敏感词
        this.popTitle = "新增敏感词";
      }else if(sign==='edit'){
        this.popTitle = "修改敏感词";
      }
      this.$prompt(this.popTitle, {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValidator: e => {
          // if(e){
            this.checkLength(e);
          // }
          
        },
        inputErrorMessage: "长度最多16个字符(1个汉字=2个字符)",
        inputPlaceholder: "填写敏感词",
        showClose: false
      })
        .then((e) => {  //点击确定按钮
          if (e.value!==null) {
            if(sign==='new'){ //说明是新增敏感词
              this.addWord(e.value)
            }else if(sign==='edit'){
              this.edit(e.value,id)
            }
            
        })

        .catch(() => { //点击取消按钮
          this.$message({
            type: "info",
            message: "取消输入"
          });
          // if (index === 0 || index) {
          //   this.dataSource[index].isShowBtn = false;
          // }
        });
    },
    cancle(item) { // 删除接口调用
      this.$http("/text/deleteSensitiveWord?id="+item.id, {}, "post")
      .then(response => {
          console.log("response", response);
          this.$message({
            type: "info",
            message: "删除成功"
          });
          this.getWords()
      });
      },
    edit(e,id) {  //编辑接口
      this.$http("/text/updateSensitiveWord", {word_name:e,id}, "post")
        .then(response => {
          console.log(response)
          this.successInfo()
        });
    },
    addWord(e){ //添加敏感词
      this.$http("/text/addSensitiveWord", {word_name:e}, "post")
        .then(response => {
          console.log(response)
          this.successInfo()
        });
    },
    successInfo(){ //敏感词增删改查成功后 统一的操作
      this.$message({
        type: "success",
        message: this.popTitle + "成功"
      });
      this.getWords()
    },
    add() {
      this.popTitle = "新增敏感词";
      this.open();
      
    },
    isShow(index) {  //展示可以编辑的几个小按钮
      this.dataSource[index].isShowBtn = !this.dataSource[index].isShowBtn;
    },
    checkLength(e) {
      const reg = /[\u4E00-\u9FA5]/g;
      let len = 0;
      let chcode = e.match(reg);
      if (chcode) {
        len = chcode.length;
      }
      let symbolLength = e.length - len;
      if (symbolLength + len * 2 <= 16) {
        // console.log(symbolLength + len * 2);
        return true;
      } else {
        return false;
      }
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