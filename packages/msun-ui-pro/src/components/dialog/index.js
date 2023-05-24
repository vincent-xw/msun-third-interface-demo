import Vue from 'vue';
import BaseDialog from './index.jsx';
const msunDialog = (props) => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const V = Vue;
  new V({
    el: div,
    mounted() {
      const self = this;
      this.$nextTick(() => {
        callback({
          notice(noticeProps) {
            self.$refs.notification.add(noticeProps);
          },
          removeNotice(key) {
            self.$refs.notification.remove(key);
          },
          component: self,
          destroy() {
            self.$destroy();
            self.$el.parentNode.removeChild(self.$el);
          },
        });
      });
    },
    render() {
      const p = {
        props,
        ref: 'notification',
        style,
        class: className,
      };
      return <BaseDialog {...p} />;
    },
  });
}
export default msunDialog