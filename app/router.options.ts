import type { RouterConfig } from '@nuxt/schema'

export default {
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: async () => await import('~/pages/index.vue').then(r => r.default || r),
      children: [
        {
          path: '/goal/:goalId',
          component: async () => await import('~/pages/goal/[id].vue')
        }
      ]
    }
  ]
} as RouterConfig
