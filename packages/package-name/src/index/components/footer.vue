<template>
  <div>
    <button>{{ this.ok }}</button>
    <button>{{ this.cancel }}</button>
  </div>
</template>
<script>
export default {
  name: 'footerComp',
  data() {
    return {
      ok: 'ok',
      cancel: '取消'
    }
  },
  created() {
    console.log('footer组件生效 :>> ');
  }
};
</script>