import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import ContextMenu from './plugins/ContextMenu';

Vue.config.productionTip = false;
Vue.use(ContextMenu);

new Vue({
  store,
  router,
  render: function (h) {
    return h(App);
  },
}).$mount('#app');
