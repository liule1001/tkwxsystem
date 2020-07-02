<template>
    <div class="responseBox">
        <div class="picBox">
            <img src="1231" alt="" class="staffPic">
            
        </div>
        <div class="center">
            <div class="name">
                弗洛伊德
            </div>
            <div class="message ellipsis">
               <span class="count">18</span>
               主动响应
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    methods: {
       
    },
    mounted() {
       
    },
};
</script>

<style lang='scss' rel='stylesheet/scss'>
@import "../assets/scss/common.scss";
.responseBox {
    width: 100%;
    height: 60px;
    padding: 0 0 0 30px;
    display: flex;
    .picBox {
        width: 70px;
        .staffPic {
            display: inline-block;
            border-radius: 50%;
            height: 34px;
            width: 34px;
            background: #a2e5ec;
            margin: 14px 10px 0 0;
        }
    }
    .center {
       width: calc(100% - 120px);
        .name {
            height: 32px;
            line-height: 40px;
            font-size: 14px;
            font-weight: 700;
            overflow: hidden ;
        }
        .message {
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            .count {
                font-weight: 700;
            }
        }
    }
}


</style>