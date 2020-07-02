<template>
  <div class="about">
    <el-col   class="staffList">
            <h5>员工姓名</h5>
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#ddd"
            text-color="#333"
            active-text-color="#333"
        >
        </el-menu>
        </el-col>
        <el-col class="sessionList">
            <h5>客户备注</h5>
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#ddd"
            text-color="#333"
            active-text-color="#333"
        >
            <el-menu-item>
                <Session/>
            </el-menu-item>

            <el-menu-item>
                 <Session/>
            </el-menu-item>
        </el-menu>
        </el-col>
        <el-col>
            <h5>聊天记录</h5>
            <Chat />
        </el-col>
  </div>
</template>


<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/scss/sessionBack.scss";
.staffList, .sessionList{
    .el-submenu__title {
        border-bottom: 1px solid #ccc;
    }
     .el-menu-item {
        padding: 0 15px !important;
        border-bottom: 1px solid #ccc;
        * {
            vertical-align: top;
        }
    }
}
.sessionList .el-menu-item{
    height: 60px;
}
</style>