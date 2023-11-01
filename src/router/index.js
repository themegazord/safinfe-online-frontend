import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ContatoView from '../views/ContatoView.vue'
import EsqueciSenhaView from '../views/EsqueciSenhaView.vue'
import ConfirmaResetSenha from '../views/ConfirmaResetSenhaView.vue'
import ResetSenha from '../views/ResetSenhaView.vue'

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
    },
    {
      path: '/confirmaResetSenha/:emailHash',
      name: 'confirma-reset-senha',
      component: ConfirmaResetSenha
    },
    {
      path: '/resetSenha/:emailHash/:hashResetSenha',
      name: 'reset-senha',
      component: ResetSenha
    },
  ]
})

export default router
