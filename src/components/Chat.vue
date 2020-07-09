<template>
  <div class="chatBox">
    <div class="nameBox">
      <div class="customer">{{content.custom}}</div>
      <div class="businessman">{{content.staff}}</div>
    </div>
    <div class="content">
      <div class="chatContent">
        <div class="item" v-for="(item,index) in content.chatcontent" v-bind:key="index">
          <div class="sessionBox">
            <div
              :class="item.role==='custom' ? 'customerSession session':'businessmanSession session'"
              v-html="item.content"
            ></div>
          </div>
          <div :class="item.role==='custom' ? 'customerTime time':'businessmanTime time'">
            <span>{{item.msgtime}}</span>
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
  mounted() {}
};
</script>

<style lang='scss' rel='stylesheet/scss'>
@import "../assets/scss/common.scss";
@import "../assets/scss/chat.scss";
</style>