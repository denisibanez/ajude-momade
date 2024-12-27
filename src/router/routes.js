import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: () => import('@/views/layout/Layout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/home/Home.vue'),
        },
    
        {
          path: '/sobre',
          component: () => import('@/views/about/About.vue'),
        },

        {
          path: '/doe',
          component: () => import('@/views/donate/Donate.vue'),
        },
    
        {
          path: '/:catchAll(.*)*',
          component: () => import('@/views/comingSoon/ComingSoon.vue'),
        },
      ],
    }
  ],
});

export default router;
