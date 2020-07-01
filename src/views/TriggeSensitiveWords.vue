<template>
  <div class="about">
    <h1>触发敏感词</h1>
    <div>
      <el-table :data="tableData" style="width: 100%" max-height="500">
        <el-table-column prop="date" label="发送人" width="150"></el-table-column>
        <el-table-column prop="name" label="发送人身份" width="120"></el-table-column>
        <el-table-column prop="province" label="发送时间" width="200"></el-table-column>
        <el-table-column prop="city" label="发送内容" width="300"></el-table-column>
        <el-table-column prop="address" label="接收人" width="120"></el-table-column>
        <el-table-column prop="zip" label="接收人身份" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="details(scope.row,scope.$index)" type="text" size="small">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-if="modalShow">
      <el-dialog title="聊天内容" :visible.sync="modalShow" center>
 <div>
   <span>一一</span>
<span>二二</span>
 </div>
 <div>
   聊天内容
 </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "一一",
          name: "客户",
          province: "2020-07-01 12：12：12",
          city: "红色关键字",
          address: "二二",
          zip: "员工"
        },
        {
          date: "三三",
          name: "客户",
          province: "2020-07-01 12：12：12",
          city: "红色关键字",
          address: "四四",
          zip: "员工"
        }
      ],
      modalShow: false,
       form: {
          name: '1',
          region: '1',
          date1: '1',
          date2: '1',
          delivery: false,
          type: [],
          resource: '1',
          desc: '1'
        },
    };
  },
  created() {},
  methods: {
    // deleteRow(index, rows) {
    //   // rows.splice(index, 1);
    //   this.modalShow = !this.modalShow
    //   alert(this.modalShow)
    // }
    details(index, rows) {
      console.log(index, rows);
      this.modalShow = !this.modalShow;
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
</style>