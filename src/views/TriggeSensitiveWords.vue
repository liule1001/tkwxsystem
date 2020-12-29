<template>
  <div class="triggeSensitiveWords">
    <div>
      <!-- max-height="500" -->
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="fromm_name" label="发送人" align="center"></el-table-column>
        <el-table-column prop="formmIdentity" label="发送人身份" align="center"></el-table-column>
        <el-table-column prop="msgtime" label="发送时间" align="center">
          <template slot-scope="scope">
            <div v-html="scope.row.msgtime"></div>
          </template>
        </el-table-column>
        <el-table-column prop="content" label="发送内容" align="center">
          <template slot-scope="scope">
            <div v-html="scope.row.content" class="tableLimit"></div>
          </template>
        </el-table-column>
        <el-table-column prop="tolist_name" label="接收人" align="center"></el-table-column>
        <el-table-column prop="tolistIdentity" label="接收人身份" align="center"></el-table-column>
        <el-table-column  label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="details(scope.row,scope.$index)" type="text" size="small">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="count"
        :page-size="10"
        @current-change="handleCurrentChange"
        class="pagination"
      ></el-pagination>
    </div>
    <div v-if="modalShow">
      <el-dialog title="聊天内容" :visible.sync="modalShow" center>
        <!-- flag 为区别滑动的展示不同设置变量 -->
        <Chat :content="chatInformation" :flag="false" @page-change="pageChange" :isContinueGetList="isContinueGetList"/>
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
      tableData: [],
      modalShow: false,
      chatInformation: {}, //放置聊天记录
      count: 1,
      wordLists:[] ,//放置敏感词的数组
      page:1, //当前页数
      id:"" ,//获取聊天内容需要提供ID
      isContinueGetList:true ,//是否一直滚动的时候调用接口
    };
  },
  created() {
    
  },
  mounted(){
    this.$http("/text/sensitiveWords")   //首先获取敏感词列表 然后再获取页面数据
    .then(response => {
      let wordList = []
      wordList = response.data
      for(let i=0;i<wordList.length;i++){
        this.wordLists.push(wordList[i].word_name)
      }
      this.getDate(1)  //获取页面数据
    });
    
  },
  methods: {
    // deleteRow(index, rows) {
    //   // rows.splice(index, 1);
    //   this.modalShow = !this.modalShow
    //   alert(this.modalShow)
    // }
    getDate(page){ //进入页面获取数据
      this.$http("/text/search", { 
        time_between:"",
        time_and:"",
        page:page,
        limit:10,
        param:this.wordLists}, "post")
      .then(response => {  //处理数据 展示在页面上
          let table = response.data.map(item => {
            return {
              formm: item.fromm,
              fromm_name: item.fromm_name || '',
              formmIdentity: item.fromm.match("wm4f") ? "客户" : "员工",
              msgtime: item.msgtime.replace(/\s+/g, "<br/>"),
              content: item.content,
              tolist: item.tolist,
              tolist_name: item.tolist_name || '--',
              tolistIdentity: item.tolist.match("wm4f") ? "客户" : "员工",
              dialogue_id:item.dialogue_id , //根据ID查询聊天记录
              msgtimes:item.msgtime
            };
          });
        this.tableData = table;
        this.count=response.count  //分页展示的长度
      });
    },
    details(row) {  //查看详情 调用接口 打开弹框  这个缺少返回值 先不动
      this.sessCheck(row,1)
      this.modalShow = !this.modalShow;  //弹框展示
    },
    //点击会话列表是再次获取聊天区域的数据
    sessCheck(item,index) {
      let beforeOneHour='' //对话前1小时
      let afterOneHour = '' //对话后1小时
        if(index==1){ //说明是头一次获取聊天记录   需要将数组清空 时间控制在这个消息的当天
            this.chatInformation={}
            this.page=1
            let myDate1 = new Date(item.msgtimes)
            let myDate2 = new Date(item.msgtimes)
            myDate1.setTime(myDate1.getTime()-2*60*1000); //前1小时
            myDate2.setTime(myDate2.getTime()+2*60*1000); //后1小时
            beforeOneHour = myDate1.getFullYear()+"-" + (myDate1.getMonth()+1) + "-" + myDate1.getDate()+" "+myDate1.getHours() + ":" + myDate1.getMinutes() + ":" + myDate1.getSeconds();
            afterOneHour = myDate2.getFullYear()+"-" + (myDate2.getMonth()+1) + "-" + myDate2.getDate()+" "+myDate2.getHours() + ":" + myDate2.getMinutes() + ":" + myDate2.getSeconds();

            this.isContinueGetList=true
        }else if(index==2){ //说明是滚动加载  不能清空原始数组   页数还得加1
            this.page=this.page+1
            afterOneHour = ""
        }
        this.id=item.dialogue_id
        if(this.isContinueGetList){
              this.$http("/text/dialogue", { 
                page:this.page,
                limit:10,
                time_between:beforeOneHour,
                time_and:afterOneHour,
                dialogue_id:item.dialogue_id
            }, "post")
            .then(response => {
                if(response.data&&response.data.length>0){
                    this.lineCheck(response.data,index);
                    this.isContinueGetList=true
                }else{
                    this.isContinueGetList=false
                }
                
            });
        } 
    },
    //获取聊天区域的数据的方法
    lineCheck(list,index) {
        //模拟获取到的数据
        //将数据改成聊天组件需要的格式
        let resData = {};
        let arr = [];
        list.map((item, index) => {
            if (this.ind) {
                resData.customName = item.fromm_name;  //发送者
                resData.staffName = item.tolist_name;  //接收者
            }
            resData.customName = item.tolist_name;
            resData.staffName = item.fromm_name;
            arr[index] = { //wm是外部人员
                role: item.tolist.indexOf("wm") === -1 ? "staff" : "custom",
                msgtime: item.msgtime,
                content: item.content
            };
        });
        resData.chatcontent = arr;
        //将改好的数据的赋值于聊天区域数据
        if(index==1){
              this.chatInformation=resData;
        }else if(index==2){
            this.chatInformation.chatcontent = this.chatInformation.chatcontent.concat(arr);
        }
        this.chatInformation.chatcontent.reverse()
    },
    pageChange(val){ //聊天改变 再次请求数据
        if(val=='add'){
            this.sessCheck({dialogue_id:this.id,msgtimes:""},2)
        }
    },
    handleCurrentChange(e) { //分页获取数据
      this.getDate(e)  //根据分页再次获取数据
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
.tableLimit {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /*可以显示的行数，超出部分用...表示 */
  -webkit-box-orient: vertical;
}
.pagination {
  float: right;
  margin-top: 10px;
}
.triggeSensitiveWords th {
    background: #F5F7FA;
}
</style>