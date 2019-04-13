import Vue from 'vue'
import Router from 'vue-router'

import {
  Index,
  RealTime,
  Introduction,
  SensorStatus,
  AlarmStatus,
  Analyze,
  Login
} from "./module/components"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/index',
      component:Index,
      children:[
        {
          path: 'introduction',
          component: Introduction
        },
        {
          path: 'sensor-status',
          component: SensorStatus
        },
        {
          path: 'real-time',
          component: RealTime
        },
        {
          path: 'analyze',
          component: Analyze
        },
        {
          path: 'alarm-status',
          component: AlarmStatus
        }
      ]
    },

  ]
})
