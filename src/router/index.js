/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 11:05:23
 * @LastEditTime: 2019-08-21 09:36:02
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      redirect:'/pageIndex',
      component: () => import('@/views/index/index'),
      children: [
        {
          path: '/pageIndex',
          name: 'pageIndex',
          component: () => import('@/views/index/pageIndex')
        },
        {
          path: '/newProduct',
          name: 'newProduct',
          component: () => import('@/views/product/newProduct')
        },
        {
          path: '/oldProduct',
          name: 'oldProduct',
          component: () => import('@/views/product/oldProduct')
        },
        {
          path: '/parts',
          name: 'parts',
          component: () => import('@/views/parts/parts')
        },
        {
          path: '/sellAfter',
          name: 'sellAfter',
          component: () => import('@/views/parts/sellAfter')
        },
        {
          path: '/operational',
          name: 'operational',
          component: () => import('@/views/lease/operational')
        },
        {
          path: '/financing',
          name: 'financing',
          component: () => import('@/views/lease/financing')
        },
        {
          path: '/personnel',
          name: 'personnel',
          component: () => import('@/views/labourService/personnel')
        },
        {
          path: '/epiboly',
          name: 'epiboly',
          component: () => import('@/views/labourService/epiboly')
        },
        {
          path: '/dispatch',
          name: 'dispatch',
          component: () => import('@/views/labourService/dispatch')
        },
        {
          path: '/goldenDress/personage',
          name: 'personage',
          component: () => import('@/views/goldenDress/personage')
        }
      ]
    },
  ]
})
