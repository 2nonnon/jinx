import type { RouteRecordRaw } from 'vue-router'
import AppLayout from '~/layout/AppLayout.vue'

const routes: RouteRecordRaw = {
  path: '/game',
  name: 'game',
  component: AppLayout,
  meta: {
    title: '游戏频道',
    side: true,
  },
  redirect: {
    name: 'game-list',
  },
  children: [
    {
      path: 'list',
      name: 'game-list',
      component: () => import('~/views/game/list/index.vue'),
      meta: {
        title: '游戏列表',
        side: false,
      },
    },
    {
      path: 'tetris',
      name: 'game-tetris',
      component: () => import('~/views/game/tetris/index.vue'),
      meta: {
        title: '俄罗斯方块',
        side: true,
      },
    },
  ],
}

export default routes
