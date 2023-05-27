<template>
  <div class="footerContainer">
    <button class="okBtn">{{ ok }}</button>
    <button>{{ cancel }}</button>
  </div>
</template>
<script>
export default {
  name: "FooterComp",
  data() {
    return {
      ok: "ok",
      cancel: "取消",
    };
  },
  created() {
    console.log("footer组件生效了～ ");
  },
};
</script>
<style lang="less">
.footerContainer {
  .okBtn {
    border: 1px solid rgb(0 0 0 / 0%);
    border-radius: 3px;
    padding: 5px 15px;
    cursor: pointer;
  }
}
</style>
