<template>
  <div class="chatBox">
    <div class="nameBox">
      <div class="customer">{{contents.customName}}</div>
      <div class="businessman">{{contents.staffName}}</div>
    </div>
    <div class="content" ref="content" @scroll="PageScroll">
      <div class="chatContent" >
        <div class="item" v-for="(item,index) in contents.chatcontent" v-bind:key="index">
          <div class="sessionBox">
            <div
              :class="item.role==='custom' ? 'customerSession session':'businessmanSession session'"
              v-html="item.content"
            ></div>
          </div>
          <div :class="item.role==='custom' ? 'customerTime time':'businessmanTime time'">
            <span>{{item.msgtime}}</span>
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
      newArr: [] ,//确保每次加载数据为十条设置变量
      contents:{
        customName:"",
        staffName:"",
        chatcontent:[]
      }
    };
  },
  //flag 为区别滑动的展示不同设置变量
  props: ["content", "flag","id","isContinueGetList"],
  methods: {
    //聊天区域滚动加载
    PageScroll(e) {
      let tar = e.target;
      //获取this.content.chatcontent的总条数
      let len = this.contents.chatcontent.length;
      // console.log(tar.scrollTop,"滑动高度")
      if (this.flag) { // 只上滑加载;
        if (tar.scrollTop === 0) {
          //滚动到顶部时加载
          this.$emit('page-change','add')
          // console.log("up Reload");
          //模拟加载数据（在原有数组中增加原有10条数据）
          // this.content.chatcontent = this.content.chatcontent.concat(
          //   this.newArr
          // );
          //顶部加载完之后显示区域为新增的数据
          if(this.isContinueGetList){ //如果父组件中还有数据 就回到部分位置 否则直接达到顶部
            this.$refs.content.scrollTop = ((tar.scrollHeight - 300) / len) * 10;
          }
        }
      } else {//滑动加载（上、下滑都可以加载）
        if (tar.scrollTop === 0) {
          this.$emit('page-change','add')
          // console.log("updown-up Reload");
          //模拟加载数据（在原有数组中增加原有10条数据）
          // this.content.chatcontent = this.content.chatcontent.concat(
          //   this.newArr
          // );
          //顶部加载完之后显示区域为新增的数据
          if(this.isContinueGetList){
            this.$refs.content.scrollTop = ((tar.scrollHeight - 300) / len) * 10;
          }
          
        } else if (tar.scrollTop == tar.scrollHeight - 301) { //滑动的距离等于最高距离 说明已经到底了  触发请求接口  因为泰国精准无法达到，所以多减一点
          this.$emit('page-change','add')
          // console.log("updown-down Reload");
          //模拟加载数据（在原有数组中增加原有10条数据）
          // this.content.chatcontent = this.content.chatcontent.concat(
          //   this.newArr
          // );
        }
      }
    }
  },
  mounted() {
    //确保每次加载数据为十条设置变量
    if(this.content.chatcontent){
      this.contents=this.content
      this.newArr = this.contents.chatcontent;
    }
    if (this.flag) {
      //只上滑加载 初始化展示为近期聊天
      this.$refs.content.scrollTop = this.$refs.content.scrollHeight - 300;
    } else {
      //滑动加载（上、下滑都可以加载） 默认为顶部避免初始化触发
      this.$refs.content.scrollTop = "1";
    }
  },
  watch: {
    content(val) {
      this.contents = val;
    },

  }

};
</script>

<style lang='scss' rel='stylesheet/scss'>
@import "../assets/scss/common.scss";
@import "../assets/scss/chat.scss";
</style>