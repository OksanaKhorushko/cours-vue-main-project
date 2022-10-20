import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import ContextMenu from './plugins/ContextMenu';
import vuetify from './plugins/vuetify';
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';

Vue.use(Donut);

Vue.config.productionTip = false;
Vue.use(ContextMenu);

new Vue({
  store,
  router,
  vuetify,

  render: function (h) {
    return h(App);
  },
}).$mount('#app');
