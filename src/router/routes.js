import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: () => import('@/views/home/Home.vue'),
    },

    {
      path: '/:catchAll(.*)*',
      component: () => import('@/views/comingSoon/ComingSoon.vue'),
    },
  ],
});

export default router;
