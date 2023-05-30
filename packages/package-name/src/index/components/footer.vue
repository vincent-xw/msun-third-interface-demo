<template>
  <div class="footerContainer">
    <button class="okBtn" @click="OK">{{ ok }}</button>
    <button @click="onCancel">{{ cancel }}</button>
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
  methods: {
    OK() {
      this.$emit("onConfirm", "ok 1111");
    },
    onCancel() {
      this.$emit("onCancel", "cancel 2222");
      this.$emit("closeDialog");
    },
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
