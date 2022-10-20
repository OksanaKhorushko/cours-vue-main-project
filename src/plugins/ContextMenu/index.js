export default {
  install (Vue) {
    if (this.installed) {
      return;
    }

    this.installed = true;

    Vue.prototype.$contextMenu = {
      EventBus: new Vue(),
      show (index) {
        this.EventBus.$emit('shown', index);
      },
      hide () {
        this.EventBus.$emit('hide');
      },
    };
  },
};
