<template>
  <div class="chatBox">
    <div class="nameBox">
      <div class="customer">{{content.receiver}}</div>
      <div class="businessman">{{content.Sender}}</div>
    </div>
    <div class="content">
      <div class="chatContent">
        <div class="item" v-for="(item,index) in content.chatcontent" v-bind:key="index">
          <div class="sessionBox">
            <div
              :class="item.role==='receiver' ? 'customerSession session':'businessmanSession session'"
              v-html="item.content"
            ></div>
          </div>
          <div :class="item.role==='receiver' ? 'customerTime time':'businessmanTime time'">
            <span>{{item.timeOne}}</span>
            <span>{{item.timeTwo}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["content"],
  methods: {},
  mounted() {
    this.$http
      .post({ url: "/ceping-0.0.1-SNAPSHOT/ceping/save" })
      .then(response => {
        console.log("response", response);
      });
  }
};
</script>

<style lang='scss' rel='stylesheet/scss'>
@import "../assets/scss/common.scss";
@import "../assets/scss/chat.scss";
</style>