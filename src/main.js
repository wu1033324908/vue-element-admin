/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 11:05:23
 * @LastEditTime: 2019-08-23 16:24:32
 * @LastEditors: Please set LastEditors
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'babel-polyfill'

import Vue from 'vue'

import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()
Es6Promise.polyfill()

import App from './App'
import router from './router'
import '@/styles/reset.css' // reset css
Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper' // use vue swiper
import 'swiper/dist/css/swiper.css' // require styles
Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
