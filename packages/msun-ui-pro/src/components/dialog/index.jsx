import styles from "./index.less";
import classnames from "classnames";
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
  methods: {
    onClose() {
      console.log("111 :>> ", 111);
      const result = this.dataValue.onClose?.();
      this.$emit("closeDialog");
      if (result) return;
      document.body.removeChild(this.$el);
    },
    onConfirm() {
      this.dataValue.onConfirm?.();
    },
    onCancel() {
      const result = this.dataValue.onCancel?.();
      this.$emit("cancelButton");
      if (!result) return;
      this.onClose();
    },
  },
  render() {
    return (
      <div class={styles.dialogWrapper} title={this.dataValue.title}>
        <div class={styles.dialogContent}>
          <div class={styles.header}>
            <div class={styles.headerContent}>{this.$slots.header}</div>
            <div class={styles.closeIcon} vOn:click={this.onClose}>
              <svg
                class={classnames("icon")}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M572.16 512l183.466667-183.04a42.666667 42.666667 0 1 0-60.586667-60.586667L512 451.84l-183.04-183.466667a42.666667 42.666667 0 0 0-60.586667 60.586667l183.466667 183.04-183.466667 183.04a42.666667 42.666667 0 0 0 0 60.586667 42.666667 42.666667 0 0 0 60.586667 0l183.04-183.466667 183.04 183.466667a42.666667 42.666667 0 0 0 60.586667 0 42.666667 42.666667 0 0 0 0-60.586667z"
                  p-id="2371"
                ></path>
              </svg>
            </div>
          </div>
          <div class={styles.content}>{this.$slots.content}</div>
          <div class={styles.footer}>
            {this.$slots.footer || (
              <div class={styles.defaultFooter}>
                <button
                  vOn:click={this.onConfirm}
                  class={classnames(styles.button, styles.primary)}
                >
                  {this.dataValue.ok}
                </button>
                <button
                  vOn:click={this.onCancel}
                  class={classnames(styles.button)}
                >
                  {this.dataValue.cancel}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
};
