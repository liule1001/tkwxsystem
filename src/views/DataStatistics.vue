<template>
    <div class="dataStatistics">
        <div class="elRow" style="width: 100%">
            <el-radio-group v-model="radio1" size="small">
                <el-radio label="当日" border>当日</el-radio>
                <el-radio label="昨日" border>昨日</el-radio>
                <el-radio label="本周" border>本周</el-radio>
                <el-radio label="本月" border>本月</el-radio>
                <el-radio label="自定义时段" border>自定义时段</el-radio>
            </el-radio-group>
            <div class="timeBox">
                 <el-date-picker v-model="startTime" type="date" placeholder="起始日期" size="small"></el-date-picker>
                <span class="elTimeSpan">到</span>
                <el-date-picker v-model="endTime" type="date" placeholder="终止日期" size="small"></el-date-picker>
            </div>
           
            <el-button size="small">查询</el-button>
            <el-button size="small">导出Excle</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="成员姓名" align="center"></el-table-column>
            <el-table-column prop="num" label="TK号" align="center" ></el-table-column>
            <el-table-column label="通讯录" align="center">
                <el-table-column prop="newadd" label="新增客户数" align="center"  width="69%"></el-table-column>
                <el-table-column prop="applyadd" label="申请添加客户数" align="center"  width="69%"></el-table-column>
                <el-table-column prop="totalcustom" label="累计客户数" align="center"  width="69%"></el-table-column>
                <el-table-column prop="delcustom" label="删黑客户数" align="center"  width="69%"></el-table-column>
            </el-table-column>
            <el-table-column label="聊天" align="center">
                <el-table-column prop="checktotal" label="聊天总数" align="center" width="69%"></el-table-column>
                <el-table-column prop="checktrig" label="主动聊天数" align="center"  width="69%"></el-table-column>
                <el-table-column prop="msgtotal" label="发送消息数" align="center"  width="69%"></el-table-column>
                <el-table-column prop="replyrato" label="回复聊天占比" align="center"  width="69%"></el-table-column>
                <el-table-column prop="replytime" label="首次回复平均时长" align="center"  width="69%"></el-table-column>
            </el-table-column>
            <el-table-column label="客户" align="center">
                <el-table-column prop="cusreplyratio" label="客户回复占比" align="center"  width="69%"></el-table-column>
                <el-table-column prop="trigcustom" label="主动响应客户数" align="center"  width="69%"></el-table-column>
                <el-table-column prop="sensitivecus" label="被动响应客户数" align="center"  width="69%"></el-table-column>
            </el-table-column>
        </el-table>
    </div>
</template>


<script>
export default {
    data() {
        return {
            radio1: "",
            startTime: "",
            endTime: "",
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
<style lang="scss" rel="stylesheet/scss" scoped>
.dataStatistics {
    .elRow {
        margin: 0 0 20px 0;
        .el-radio {
            margin-right: 5px;
        }
        .timeBox {
            display: inline-block;
            margin: 0 20px;
            .el-input {
                width: 130px !important;
            }
            .elTimeSpan {
                margin: 0 5px;
            }
        }
        
    }
}
</style>