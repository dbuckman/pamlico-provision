import Vue from 'vue'
import VueRouter from 'vue-router'

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/components/${view}.vue`)
}
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: loadView('Home') },
    { path: '*', component: loadView('NotFound') }
  ]
})

Vue.use(VueRouter)

export default router
