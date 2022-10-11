import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../pages/Main.page.vue';
import Form from '../components/Form';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MainPage,
    children: [
      {
        path: '/add/payment',
        component: Form,
      },
      {
        path: '/add/payment/:category',
        component: Form,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
