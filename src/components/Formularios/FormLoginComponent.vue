<template>
  <form>
    <v-container class="titulo-subtitulo">
      <h1>Que bom te ver de novo!</h1>
      <h3>Acesse e use agora mesmo!</h3>
    </v-container>
    <v-container class="form">
      <v-row>
        <v-col cols="12">
          <v-text-field
            type="email"
            v-model="dados.email"
            :error-messages="v$.dados.email.$errors.map((e) => e.$message)"
            counter="255"
            label="E-mail"
            prepend-inner-icon="fas fa-envelope"
            @input="v$.dados.email.$touch"
            @blur="v$.dados.email.$touch"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            type="password"
            v-model="dados.password"
            :error-messages="v$.dados.password.$errors.map((e) => e.$message)"
            counter="255"
            label="Senha (mínimo de 8 dígitos)"
            prepend-inner-icon="fas fa-lock"
            @input="v$.dados.password.$touch"
            @blur="v$.dados.password.$touch"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="opcoes">
      <v-switch v-model="dados.manterLogado" color="var(--darkblue)" label="Lembrar senha">
        <template v-slot:label>
          <span class="labelSwitch">Lembrar senha</span>
        </template>
      </v-switch>
      <router-link class="esqueceuSenha" to="esqueciSenha">Esqueceu sua senha?</router-link>
    </v-container>
    <v-btn variant="tonal" color="primary" @click="enviaLogin" append-icon="fas fa-chevron-right"
      >Entrar</v-btn
    >
  </form>
</template>

<script>
import { helpers, required, maxLength, email } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
export default {
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      dados: {
        email: '',
        password: '',
        manterLogado: false
      }
    }
  },
  methods: {
    async enviaLogin() {
      if (await this.v$.dados.$validate()) {
        this.$emit('login', this.dados)
      }
    }
  },
  validations() {
    return {
      dados: {
        email: {
          required: helpers.withMessage('O campo de email e obrigatorio.', required),
          maxLength: helpers.withMessage('O email deve conter ate 255 caracteres', maxLength(255)),
          email: helpers.withMessage('O email e invalido.', email)
        },
        password: {
          required: helpers.withMessage('O campo de senha e obrigatorio.', required),
          maxLength: helpers.withMessage('A senha deve conter ate 255 caracteres', maxLength(255))
        }
      }
    }
  }
}
</script>

<style scoped>

form {
  margin: 4rem 0;
}

@media screen and (max-width: 2560px) {
  form {
    display: flex;
    padding: calc(4.3125rem * 2560 / 1920) calc(7.5rem * 2560 / 1920) calc(4.5rem * 2560 / 1920)
      calc(7.5rem * 2560 / 1920);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: calc(50% * 2560 / 1920);
    border-radius: 15px;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(0.875rem * 2560 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .opcoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .esqueceuSenha {
    font-size: calc(1rem * 2560 / 1920);
  }
}
@media screen and (max-width: 1920px) {
  form {
    display: flex;
    padding: calc(4.3125rem * 1920 / 1920) calc(7.5rem * 1920 / 1920) calc(4.5rem * 1920 / 1920)
      calc(7.5rem * 1920 / 1920);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: calc(50% * 1920 / 1920);
    border-radius: 15px;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(0.875rem * 1920 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .labelSwitch {
    font-size: 1rem;
  }

  .opcoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .esqueceuSenha {
    font-size: 1rem;
  }
}
@media screen and (max-width: 1600px) {
  form {
    display: flex;
    padding: calc(4.3125rem * 1600 / 1920) calc(7.5rem * 1600 / 1920) calc(4.5rem * 1600 / 1920)
      calc(7.5rem * 1600 / 1920);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: calc(50% * 1600 / 1920);
    border-radius: 15px;
  }

  .esqueceuSenha {
    font-size: calc(1rem * 1600 / 1920);
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(0.875rem * 1600 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .opcoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
@media screen and (max-width: 1440px) {
  form {
    display: flex;
    padding: calc(4.3125rem * 1440 / 1920) calc(7.5rem * 1440 / 1920) calc(4.5rem * 1440 / 1920)
      calc(7.5rem * 1440 / 1920);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: calc(50% * 1440 / 1920);
    border-radius: 15px;
  }

  .labelSwitch {
    font-size: calc(1rem * 1440 / 1920);
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(0.875rem * 1440 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .esqueceuSenha {
    font-size: calc(1rem * 1440 / 1920);
  }
  .opcoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
@media screen and (max-width: 1366px) {
  form {
    display: flex;
    padding: calc(4.3125rem * 1366 / 1920) calc(7.5rem * 1366 / 1920) calc(4.5rem * 1366 / 1920)
      calc(7.5rem * 1366 / 1920);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 50%;
    border-radius: 15px;
  }

  .esqueceuSenha {
    font-size: calc(1rem * 1366 / 1920);
  }

  .labelSwitch {
    font-size: calc(1rem * 1366 / 1920);
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(0.875rem * 1366 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .opcoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
@media screen and (max-width: 1280px) {
  form {
    display: flex;
    padding: calc(4.3125rem * 1280 / 1920) calc(7.5rem * 1280 / 1920) calc(4.5rem * 1280 / 1920)
      calc(7.5rem * 1280 / 1920);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 50%;
    border-radius: 15px;
  }

  .esqueceuSenha {
    font-size: calc(1rem * 1280 / 1920);
  }

  .labelSwitch {
    font-size: calc(1rem * 1280 / 1920);
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .opcoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
@media screen and (max-width: 1024px) {
  form {
    display: flex;
    padding: calc(4.3125rem * 1300 / 1920) calc(7.5rem * 1300 / 1920) calc(4.5rem * 1300 / 1920)
      calc(7.5rem * 1300 / 1920);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 50%;
    border-radius: 15px;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .esqueceuSenha {
    font-size: calc(1rem * 1300 / 1920);
  }

  .opcoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

/* Mobile */

@media screen and (max-width: 750px) {
  form {
    display: flex;
    padding: calc(4.3125rem * 750 / 1920) calc(7.5rem * 750 / 1920) calc(4.5rem * 750 / 1920)
      calc(7.5rem * 750 / 1920);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 80%;
    border-radius: 15px;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .esqueceuSenha {
    font-size: calc(1rem * 750 / 1920);
  }

  .opcoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

@media screen and (max-width: 640px) {
  form {
    display: flex;
    padding: calc(4.3125rem * 640 / 1920) calc(7.5rem * 640 / 1920) calc(4.5rem * 640 / 1920)
      calc(7.5rem * 640 / 1920);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 80%;
    border-radius: 15px;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: 0.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .esqueceuSenha {
    font-size: calc(1rem * 640 / 1920);
  }

  .opcoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

@media screen and (max-width: 400px) {
  form {
    display: flex;
    padding: calc(4.3125rem * 400 / 1920) calc(7.5rem * 400 / 1920) calc(4.5rem * 400 / 1920)
      calc(7.5rem * 400 / 1920);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 80%;
    border-radius: 15px;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: 0.1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .esqueceuSenha {
    font-size: calc(1rem * 400 / 1920);
  }

  .opcoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>