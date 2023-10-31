<template>
  <form class="form-esqueciSenha">
    <v-container class="titulo-subtitulo">
      <h1>Esqueceu sua senha?</h1>
      <h2>
        Informe seu e-mail cadastrado na SF Sistemas para enviarmos as instruções de redefinição da
        senha.
      </h2>
    </v-container>
    <v-container class="form">
      <v-row>
        <v-col cols="12">
          <v-text-field
            type="email"
            v-model="email"
            :error-messages="v$.email.$errors.map((e) => e.$message)"
            counter="255"
            label="E-mail"
            prepend-inner-icon="fas fa-envelope"
            @input="v$.email.$touch"
            @blur="v$.email.$touch"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-btn
      variant="tonal"
      color="primary"
      @click="enviarEsqueciSenha"
      append-icon="fas fa-chevron-right"
      >Continuar</v-btn
    >
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { helpers, maxLength, required, email } from '@vuelidate/validators'
export default {
  data() {
    return {
      email: ''
    }
  },
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage('O campo de email e obrigatorio.', required),
        maxLength: helpers.withMessage('O email deve conter ate 255 caracteres', maxLength(255)),
        email: helpers.withMessage('O email é inválido', email)
      }
    }
  },
  methods: {
    async enviarEsqueciSenha() {
      if (await this.v$.email.$validate()) {
        this.$emit('esqueciSenha', this.email)
      }
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 2560px) {
  .form-esqueciSenha {
    display: flex;
    padding: calc(3.5rem * 2560 / 1920) calc(7.5rem * 2560 / 1920) calc(3.5rem * 2560 / 1920)
      calc(7.5rem * 2560 / 1920);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 50%;
    border-radius: 15px;
    gap: 2rem;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(1.25rem * 2560 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }


  .titulo-subtitulo h2{
    color: var(--darkblue);
    font-family: Poppins;
    font-size: calc(1rem * 2560 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 70%;
    padding-top: .5rem;
  }
}
@media screen and (max-width: 1920px) {
  .form-esqueciSenha {
    display: flex;
    padding: calc(3.5rem * 1920 / 1920) calc(7.5rem * 1920 / 1920) calc(3.5rem * 1920 / 1920)
      calc(7.5rem * 1920 / 1920);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 50%;
    border-radius: 15px;
    gap: 2rem;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(1.25rem * 1920 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo h2{
    color: var(--darkblue);
    font-family: Poppins;
    font-size: calc(1rem * 1920 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 70%;
    padding-top: .5rem;
  }
}
@media screen and (max-width: 1600px) {
  .form-esqueciSenha {
    display: flex;
    padding: calc(3.5rem * 1600 / 1920) calc(7.5rem * 1600 / 1920) calc(3.5rem * 1600 / 1920)
      calc(7.5rem * 1600 / 1920);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 50%;
    border-radius: 15px;
    gap: 2rem;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(1.25rem * 1600 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }


  .titulo-subtitulo h2{
    color: var(--darkblue);
    font-family: Poppins;
    font-size: calc(1rem * 1600 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 70%;
    padding-top: .5rem;
  }
}
@media screen and (max-width: 1440px) {
  .form-esqueciSenha {
    display: flex;
    padding: calc(3.5rem * 1440 / 1920) calc(7.5rem * 1440 / 1920) calc(3.5rem * 1440 / 1920)
      calc(7.5rem * 1440 / 1920);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 50%;
    border-radius: 15px;
    gap: 2rem;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(1.25rem * 1440 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }


  .titulo-subtitulo h2{
    color: var(--darkblue);
    font-family: Poppins;
    font-size: calc(1rem * 1440 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 70%;
    padding-top: .5rem;
  }
}
@media screen and (max-width: 1366px) {
  .form-esqueciSenha {
    display: flex;
    padding: calc(3.5rem * 1366 / 1920) calc(7.5rem * 1366 / 1920) calc(3.5rem * 1366 / 1920)
      calc(7.5rem * 1366 / 1920);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 50%;
    border-radius: 15px;
    gap: 2rem;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(1.25rem * 1366 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }


  .titulo-subtitulo h2{
    color: var(--darkblue);
    font-family: Poppins;
    font-size: calc(1rem * 1366 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 70%;
    padding-top: .5rem;
  }
}
@media screen and (max-width: 1280px) {
  .form-esqueciSenha {
    display: flex;
    padding: calc(3.5rem * 1280 / 1920) calc(7.5rem * 1280 / 1920) calc(3.5rem * 1280 / 1920)
      calc(7.5rem * 1280 / 1920);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 50%;
    border-radius: 15px;
    gap: 2rem;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(1.25rem * 1280 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }


  .titulo-subtitulo h2{
    color: var(--darkblue);
    font-family: Poppins;
    font-size: calc(1rem * 1280 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 70%;
    padding-top: .5rem;
  }
}
@media screen and (max-width: 1024px) {
  .form-esqueciSenha {
    display: flex;
    padding: calc(3.5rem * 1024 / 1920) calc(7.5rem * 1024 / 1920) calc(3.5rem * 1024 / 1920)
      calc(7.5rem * 1024 / 1920);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 50%;
    border-radius: 15px;
    gap: 2rem;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(1.25rem * 1024 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }


  .titulo-subtitulo h2{
    color: var(--darkblue);
    font-family: Poppins;
    font-size: calc(1rem * 1024 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 70%;
    padding-top: .5rem;
  }
}
</style>