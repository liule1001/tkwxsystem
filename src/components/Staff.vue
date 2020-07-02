<template>
    <div class="staffBox">
        <div class="fl">
            <img src="1231" alt="" class="staffPic">
            <span class="name">
                弗洛伊德
            </span>
        </div>
       <div class="fr messageCounts">
           300
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
.staffBox {
    width: 100%;
    height: 50px;
    .staffPic {
        display: inline-block;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        background: #a2e5ec;
        margin: 10px 10px 0 0;
    }
    .messageCounts {
        margin-right: 30px;
    }
}


</style>