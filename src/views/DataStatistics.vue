<template>
    <div class="about">
       <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column label="配送信息">
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column label="地址">
        <el-table-column
          prop="province"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="120">
        </el-table-column>
      </el-table-column>
    </el-table-column>
  </el-table>
    </div>
</template>


<script>
export default {
    data() {
        return {
            
        };
    },
    mounted() {
<<<<<<< HEAD
      
    },
    methods: {
      
=======
        
        
    },
    methods: {
       
>>>>>>> 7445d1693ad7df4509c3cf94d418085618fe6f89
    }
};
</script>
<style lang="scss" rel="stylesheet/scss">
</style>