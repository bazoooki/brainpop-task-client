import Vue from 'vue';
import VueRouter from 'vue-router';
import Activities from '@/views/Activities.vue';
import Zoom from '@/views/Zoom.vue';
import Activities2 from '@/views/Activities2.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/activities',
    name: 'student-activities',
    component: Activities,
  },
  {
    path: '/activities/v2',
    name: 'student-activities',
    component: Activities2,
  },
  {
    path: '/zoom/:id',
    name: 'zoom-view',
    component: Zoom,
  },
  {
    path: '/',
    redirect: '/activities',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
