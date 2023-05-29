import Vue from 'vue';
import VueRouter from 'vue-router';
import StudentActivities from "@/views/Activities.vue";
import Zoom from "@/views/Zoom.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/activities',
    name: 'student-activities',
    component: StudentActivities,
  },
  {
    path: '/zoom/:id',
    name: 'zoom-view',
    component: Zoom,
  },
  {
    path: '/',
    redirect: '/activities'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
