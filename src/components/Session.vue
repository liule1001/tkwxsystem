<template>
  <div class="sessionVueBox">
    <div class="picBox">
      <img :src="main.avatar" alt class="staffPic" />
    </div>
    <div class="center">
      <div class="name">{{main.name}}</div>
      <div
        class="message ellipsis"
      >{{main.latest_news}}</div>
    </div>
    <div class="messageCounts">
      <div class="count">{{main.msg_count}}</div>
      <div class="time">{{main.latest_date}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["main"],
  methods: {},
  mounted() {}
};
</script>

<style lang='scss' rel='stylesheet/scss'>
@import "../assets/scss/common.scss";
.sessionVueBox {
  width: 100%;
  height: 60px;
  display: flex;
  .picBox {
    width: 50px;
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
    width: calc(100% - 20px);
    .name {
      height: 32px;
      line-height: 40px;
      font-size: 14px;
      font-weight: 700;
      overflow: hidden;
    }
    .message {
      height: 20px;
      line-height: 20px;
      font-size: 12px;
    }
  }
  .messageCounts {
    text-align: right;
    width: 60px;
    .count {
      height: 32px;
      line-height: 40px;
      font-size: 12px;
      font-weight: 700;
    }
    .time {
      height: 20px;
      line-height: 20px;
      font-size: 12px;
    }
  }
}
</style>