import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ContatoView from '../views/ContatoView.vue'
import EsqueciSenhaView from '../views/EsqueciSenhaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/contatos',
      name: 'contatos',
      component: ContatoView
    },
    {
      path: '/esqueciSenha',
      name: 'esqueci-senha',
      component: EsqueciSenhaView
    }
  ]
})

export default router
