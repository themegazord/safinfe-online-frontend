<template>
  <navbar-component />
  <notificacao-component />
  <main>
  <loading-component :loading="loading"/>
    <form-esqueci-senha-component @esqueci-senha="(email) => enviaEmail(email)" />
  </main>
  <footer-component />
</template>

<script>
import axios from 'axios'
import FooterComponent from '../components/FooterComponent.vue'
import FormEsqueciSenhaComponent from '../components/Formularios/FormEsqueciSenhaComponent.vue'
import NavbarComponent from '../components/Navbar/NavbarComponent.vue'
import { useEndpoints } from '../stores/endpoints'
import NotificacaoComponent from '../components/Utilitarios/NotificacaoComponent.vue'
import { mapActions } from 'pinia'
import { useNotificacoes } from '../stores/notificacao'
import LoadingComponent from '../components/Utilitarios/LoadingComponent.vue'

export default {
  components: { NavbarComponent, FooterComponent, FormEsqueciSenhaComponent, NotificacaoComponent, LoadingComponent },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    ...mapActions(useNotificacoes, ['setNotificacoes', 'dispatchNotificacoes']),
    enviaEmail(email) {
      this.loading = true
      axios
        .get(`${useEndpoints().getAutenticacaoSolicitaResetSenha}/${email}`, {
          headers: {
            Accept: 'application/json'
          }
        })
        .then(() => {
          this.loading = false
          this.$router.push(`/confirmaResetSenha/${btoa(email)}`)
        })
        .catch((err) => {
          if (err.response.data.errors) {
            const erros = Object.entries(err.response.data.errors)
            for (const [chave, valor] of erros) {
              switch (chave) {
                case 'email':
                  this.setNotificacoes(valor[0], 'Campo de email', 'erro')
                  break
                default:
                  this.setNotificacoes(
                    'Entre em contato com o suporte EsqueciSenhaView',
                    'Erro interno',
                    'erro'
                  )
              }
            }
          } else if (err.response.data.erro) {
            this.setNotificacoes(err.response.data.erro, 'Erro', 'erro')
          }
          this.loading = false
        })
    }
  }
}
</script>

<style scoped>
main {
  background: var(--darkblue);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 100px 100px;
}
</style>