<template>
  <NavbarComponent />
  <NotificacaoComponent />
  <main>
    <LoadingComponent :loading="loading" />
    <FormLoginComponent @login="(dados) => logar(dados)"/>
  </main>
  <FooterComponent />
</template>

<script>
import LoadingComponent from '../components/Utilitarios/LoadingComponent.vue';
import FormLoginComponent from '../components/Formularios/FormLoginComponent.vue';
import NotificacaoComponent from '../components/Utilitarios/NotificacaoComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import { useEndpoints } from '../stores/endpoints'
import { useNotificacoes } from '../stores/notificacao'
import axios from 'axios';
import { mapActions } from 'pinia';
export default {
  components: {
    NavbarComponent,
    FormLoginComponent,
    FooterComponent,
    LoadingComponent,
    NotificacaoComponent
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    ...mapActions(useNotificacoes, ['setNotificacoes', 'dispatchNotificacoes']),
    logar(dados) {
      this.loading = true
      axios.post(useEndpoints().getAutenticacaoLogin, {
        email: dados.email,
        password: dados.password
      },{
        headers: {
          Accept: 'application/json'
        }
      }).then((res) => {
        if (dados.manterLogado) {
          localStorage.setItem('token', res.data.dados.token)
          localStorage.setItem('usuario', JSON.stringify(res.data.dados.usuario))
        }
        if (!dados.manterLogado) {
          sessionStorage.setItem('token', res.data.dados.token)
          sessionStorage.setItem('usuario', JSON.stringify(res.data.dados.usuario))
        }
        this.loading = false
      }).catch((err) => {
        if (err.response.data.errors) {
              const erros = Object.entries(err.response.data.errors)
              for (const [chave, valor] of erros) {
                switch (chave) {
                  case 'email':
                    this.setNotificacoes(valor[0], 'Campo de email', 'erro')
                    break
                  case 'password':
                    this.setNotificacoes(valor[0], 'Campo da senha', 'erro')
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