<template>
  <div class="staffBox">
    <div class="fl">
      <img :src="main.avatar" alt class="staffPic" />
      <span class="name">{{main.name}}</span>
    </div>
    <div class="fr messageCounts">{{main.msg_count}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
      main:{
          type: Object,
          required: true
      }
  },
  methods: {},
  mounted() {}
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