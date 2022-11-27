import store from '@/store'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import('@/layouts/todo-default'),
    meta: {
      auth: false
    },
    children: [{
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/Categorias',
        name: 'categorias',
        component: () => import( /* webpackChunkName: "about" */ '../views/CategoriasView.vue')
      },
      {
        path: `/livro/:id`,
        name: 'livro',
        props: true,
        component: () => import( /* webpackChunkName: "about" */ '../views/LivroView.vue')
      },
      {
        path: '/MinhaLista',
        name: 'minhalista',
        component: () => import( /* webpackChunkName: "about" */ '../views/MinhalistaView.vue')
      },
      {
        path: '/Perfil',
        name: 'perfil',
        component: () => import( /* webpackChunkName: "about" */ '../views/PerfilView.vue')
      },
      {
        path: '/EditarPerfil',
        name: 'editar-perfil',
        component: () => import( /* webpackChunkName: "about" */ '../views/EditarPerfilView.vue')
      },
      {
        path: '/Autor/:id',
        name: 'autor',
        props: true,
        component: () => import( /* webpackChunkName: "about" */ '../views/AutorView.vue')
      },
      {
        path: '/Editora/:id',
        name: 'editora',
        props: true,
        component: () => import( /* webpackChunkName: "about" */ '../views/EditoraView.vue')
      },
      {
        path: '/Publicar',
        name: 'publicar',
        component: () => import( /* webpackChunkName: "about" */ '../views/PublicarView.vue')
      },
      // {
      //   path: '/Configuracoes',
      //   name: 'configuracoes',
      //   component: () => import( /* webpackChunkName: "about" */ '../views/ConfigView.vue')
      // },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/todo-blank'),
    meta: {
      auth: false,
    },
    children: [{
        path: '/Login',
        name: 'login',
        component: () => import( /* webpackChunkName: "about" */ '../views/LoginView.vue')
      },
      // {
      //   path: '/LoginEditora',
      //   name: 'logineditora',
      //   component: () => import( /* webpackChunkName: "about" */ '../views/LoginEditView.vue')
      // },
      {
        path: '/Cadastro',
        name: 'cadastro',
        component: () => import( /* webpackChunkName: "about" */ '../views/CadastroView.vue')
      },
      {
        path: '/CadastroEditora',
        name: 'cadastroedit',
        component: () => import( /* webpackChunkName: "about" */ '../views/CadastroeditoraView.vue')
      },
      // {
      //   path: '/Admin',
      //   name: 'admin',
      //   component: () => import( /* webpackChunkName: "about" */ '../views/LoginAdminView.vue')
      // },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if(!store.state.auth.loggedIn) {
      next({
        name: 'login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router