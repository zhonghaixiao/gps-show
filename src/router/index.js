import Vue from 'vue'
import Router from 'vue-router'

import {Index, RealTime, GpsInMap, History, Analyze} from "./module/components"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      component:Index
    },
    {
      path: '/realtime-gps',
      component:GpsInMap
    },
    {
      path: '/analyze-gps',
      component:Analyze
    },
    {
      path: '/history-gps',
      component:History
    }
  ]
})
