import Vue from "vue";
import BaseDialog from "./index.jsx";
import xss from "xss";
const isVueComponents = (data) => {
  return data?.render instanceof Function;
};
const msunDialogInstance = (properties, callback) => {
  const { props } = properties;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const V = Vue;
  const instance = new V({
    el: div,
    mounted() {
      const self = this;
      this.$nextTick(() => {
        callback({
          notice(noticeProps) {
            self.$refs.basicDialog.add(noticeProps);
          },
          removeNotice(key) {
            self.$refs.basicDialog.remove(key);
          },
          component: self,
          destroy() {
            self.$destroy();
            self.$el.parentNode.removeChild(self.$el);
          },
        });
      });
    },
    methods: {
      confirm(res) {
        console.log("res :>> ", res);
        props.onConfirm?.();
      },
      cancel(cel) {
        console.log("cel :>> ", cel);
        props.onCancel?.();
      },
      close() {
        console.log("333 :>> ", 333);
        this.$refs.basicDialog.closeDialog?.();
      },
    },
    render() {
      const isHeaderComponent = isVueComponents(props.header);
      const isContentComponent = isVueComponents(props.content);
      const isFooterComponent = isVueComponents(props.footer);
      if (isFooterComponent) {
        Vue.component(props.footer.name, props.footer);
      }
      if (isContentComponent) {
        Vue.component(props.content.name, props.content);
      }
      if (isHeaderComponent) {
        Vue.component(props.header.name, props.header);
      }
      return (
        <BaseDialog ref="basicDialog" dataValue={props}>
          <div slot="header">
            {!isHeaderComponent ? props.header : <props.header></props.header>}
          </div>
          {!isContentComponent ? (
            <div slot="content" domPropsInnerHTML={xss(props.content)}></div>
          ) : (
            <div slot="content">
              <props.content></props.content>
            </div>
          )}

          {!isFooterComponent ? (
            props.footer ? (
              <div slot="footer">props.footer</div>
            ) : null
          ) : (
            <div slot="footer">
              <props.footer
                vOn:onConfirm={this.confirm}
                vOn:onCancel={this.cancel}
                vOn:closeDialog={this.close}
              />
            </div>
          )}
        </BaseDialog>
      );
    },
  });
  return instance;
};

const msunDialog = (props, callback) => {
  const instance = msunDialogInstance(props, (a) => {
    callback(a);
  });
  return {
    close() {
      instance.close();
    },
  };
};
export default msunDialog;
