import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  //Admin routes
  {
    path: '/',
    redirect: 'dashboard',
    meta: { roles: ['Administrador'], requiredLogin: true }
  },
  {
    path: '/admin/materias',
    name: 'admin-subject',
    component: () => import('@/views/pages/admin/Subject/Subject.vue'),
    meta: { roles: ['Administrador'], requiredLogin: true }
  },
  {
    path: '/admin/student',
    name: 'admin-student',
    component: () => import('@/views/pages/admin/Students/Student.vue'),
    meta: { roles: ['Administrador'], requiredLogin: true }
  },
  {
    path: '/admin/docentes',
    name: 'admin-teacher',
    component: () => import('@/views/pages/admin/Teacher/Teacher.vue'),
    meta: { roles: ['Administrador'], requiredLogin: true }
  },








  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: { roles: ['Administrador'], requiredLogin: true }
  },
  {
    path: '/typography',
    name: 'typography',
    component: () => import('@/views/typography/Typography.vue'),
    meta: { roles: ['Administrador'], requiredLogin: true }
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import('@/views/icons/Icons.vue'),
    meta: { roles: ['Administrador'], requiredLogin: true }
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('@/views/cards/Card.vue'),
    meta: { roles: ['Administrador'], requiredLogin: true }
  },
  {
    path: '/simple-table',
    name: 'simple-table',
    component: () => import('@/views/simple-table/SimpleTable.vue'),
    meta: { roles: ['Administrador'], requiredLogin: true }
  },
  {
    path: '/form-layouts',
    name: 'form-layouts',
    component: () => import('@/views/form-layouts/FormLayouts.vue'),
    meta: { roles: ['Administrador'], requiredLogin: true }
  },
  {
    path: '/pages/account-settings',
    name: 'pages-account-settings',
    component: () => import('@/views/pages/account-settings/AccountSettings.vue'),
    meta: { roles: ['Administrador'], requiredLogin: true }
  },
  {
    path: '/pages/login',
    name: 'pages-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
      requiredLogin: false
    },
  },
  {
    path: '/pages/register',
    name: 'pages-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
      requiredLogin: false
    },
  },

  {
    path: '/pages/report',
    name: 'pages-report',
    component: () => import('@/views/pages/Reports/Report.vue'),
    meta: { roles: ['Administrador'], requiredLogin: true }
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  console.log(store.state.isAuthenticated)

  if (!localStorage.getItem('isAuthenticated') && to.meta.requiredLogin == true) {
    //No ha iniciado sesion
    next({ name: 'pages-login' })
  }


  // if (store.state?.role !== to.meta.roles) {
  //   //No hay permisos
  //   next({ name: 'dashboard' })
  // }

  next()
})

export default router
