import styles from "./index.less";
export default {
  name: "BaseDialog",
  props: {
    dataValue: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  render() {
    return (
      <div class={styles.dialogWrapper} title={this.dataValue.title}>
        <div class={styles.dialogContent}>
          <div class="header">{this.$slots.header}</div>
          <div class="content">{this.$slots.content}</div>
          <div class="footer">{this.$slots.footer}</div>
        </div>
      </div>
    );
  },
};
