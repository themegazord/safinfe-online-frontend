<template>
  <navbar-component />
  <notificacao-component />
  <main>
    <loading-component :loading="loading" />
    <form-reset-senha-component @reset-senha="(dados) => resetSenha(dados)" />
  </main>
  <footer-component />
</template>

<script>
import axios from 'axios'
import FooterComponent from '../components/FooterComponent.vue'
import FormResetSenhaComponent from '../components/Formularios/FormResetSenhaComponent.vue'
import NavbarComponent from '../components/Navbar/NavbarComponent.vue'
import { useEndpoints } from '../stores/endpoints'
import NotificacaoComponent from '../components/Utilitarios/NotificacaoComponent.vue'
import LoadingComponent from '../components/Utilitarios/LoadingComponent.vue'
import { mapActions } from 'pinia'
import { useNotificacoes } from '../stores/notificacao'
export default {
  components: {
    NavbarComponent,
    FooterComponent,
    FormResetSenhaComponent,
    NotificacaoComponent,
    LoadingComponent
  },
  methods: {
    ...mapActions(useNotificacoes, ['setNotificacoes', 'dispatchNotificacoes']),
    resetSenha(dados) {
      this.loading = true
      this.dadosAlteraSenha.password = dados.password
      axios
        .post(useEndpoints().getAutenticacaoResetaSenha, this.dadosAlteraSenha, {
          headers: {
            Accept: 'application/json'
          }
        })
        .then(() => {
          this.loading = false
          this.$router.push('/')
        })
        .catch((err) => {
          if (err.response.data.errors) {
            const erros = Object.entries(err.response.data.errors)
            for (const [chave, valor] of erros) {
              switch (chave) {
                case 'emailHash':
                  this.setNotificacoes(valor[0], 'Campo de hash de email', 'erro')
                  break
                case 'password':
                  this.setNotificacoes(valor[0], 'Campo da senha', 'erro')
                  break
                case 'hashResetSenha':
                  this.setNotificacoes(valor[0], 'Campo da hash de reset de senha', 'erro')
                  break
                default:
                  this.setNotificacoes(
                    'Entre em contato com o suporte LoginView|Login',
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
  },
  data() {
    return {
      dadosAlteraSenha: {
        password: '',
        emailHash: this.$route.params.emailHash,
        hashResetSenha: this.$route.params.hashResetSenha
      },
      loading: false
    }
  }
}
</script>

<style scoped>
main {
  background: var(--darkblue);
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 100px 100px;
}
</style>