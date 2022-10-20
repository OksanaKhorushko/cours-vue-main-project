import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../pages/Main.page.vue';
import ModalAddCoast from '../components/ModalAddCoast.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MainPage,
    children: [
      {
        path: '/add/payment',
        component: ModalAddCoast,
      },
      {
        path: '/add/payment/:category',
        component: ModalAddCoast,
      },
      {
        path: '/edit/payment/:id',
        component: () => import('../components/ModalEditCoast.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
