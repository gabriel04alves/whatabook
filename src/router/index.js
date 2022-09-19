import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import('@/layouts/todo-default'),
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
        path: '/Livro',
        name: 'livro',
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
        path: '/Autor',
        name: 'autor',
        component: () => import( /* webpackChunkName: "about" */ '../views/AutorView.vue')
      },
      {
        path: '/Editora',
        name: 'editora',
        component: () => import( /* webpackChunkName: "about" */ '../views/EditoraView.vue')
      },
      {
        path: '/Configuracoes',
        name: 'configuracoes',
        component: () => import( /* webpackChunkName: "about" */ '../views/ConfigView.vue')
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/todo-blank'),
    children: [{
        path: '/Login',
        name: 'login',
        component: () => import( /* webpackChunkName: "about" */ '../views/LoginView.vue')
      },
      {
        path: '/LoginEditora',
        name: 'logineditora',
        component: () => import( /* webpackChunkName: "about" */ '../views/LoginEditView.vue')
      },
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
      {
        path: '/Admin',
        name: 'admin',
        component: () => import( /* webpackChunkName: "about" */ '../views/LoginAdminView.vue')
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router