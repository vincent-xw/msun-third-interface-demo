import Vue from 'vue';

var BaseDialog = {
  name: "BaseDialog",
  props: {},
  data: function data() {
    return {};
  },
  render: function render() {
    var h = arguments[0];
    return h("div", ["111"]);
  }
};

var msunDialog = function msunDialog(props) {
  var div = document.createElement('div');
  document.body.appendChild(div);
  var V = Vue;
  new V({
    el: div,
    mounted: function mounted() {
      var self = this;
      this.$nextTick(function () {
        callback({
          notice: function notice(noticeProps) {
            self.$refs.notification.add(noticeProps);
          },
          removeNotice: function removeNotice(key) {
            self.$refs.notification.remove(key);
          },
          component: self,
          destroy: function destroy() {
            self.$destroy();
            self.$el.parentNode.removeChild(self.$el);
          }
        });
      });
    },
    render: function render() {
      var h = arguments[0];
      var p = {
        props: props,
        ref: 'notification',
        style: style,
        "class": className
      };
      return h(BaseDialog, p);
    }
  });
};

var main = {
  Dialog: msunDialog
};

export { main as default };
//# sourceMappingURL=bundle.js.map
