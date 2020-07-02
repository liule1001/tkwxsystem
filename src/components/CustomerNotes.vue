<template>
  <div class="customerWrap">
    <div >
      <img src="#" alt="头像" class="customerPic">
    </div>
    <div class="center">
      <div class="name">客户备注</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "customerNotes",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.customerWrap{
    display: flex;
    align-items: center;
    .customerPic{
        display: block;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        background: #a2e5ec;
        margin: 10px 10px 0 0;
    }
    .center{
        font-size: 14px;
        font-weight: bold;
    }
}
</style>