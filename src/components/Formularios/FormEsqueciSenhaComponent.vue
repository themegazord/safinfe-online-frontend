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
    <v-btn variant="tonal" @click="enviarEsqueciSenha" append-icon="fas fa-chevron-right"
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
.form-esqueciSenha {
  margin: 5rem 0;
}

@media screen and (max-width: 2560px) {
  .form-esqueciSenha {
    display: flex;
    padding: calc(11.125em * 2560 / 1440) calc(5.8rem * 2560 / 1440) calc(9rem * 2560 / 1440)
      calc(5.8rem * 2560 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 50%;
    border-radius: 15px;
    gap: 2rem;
  }

  .titulo-subtitulo h1 {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(1.75rem * 2560 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo h2 {
    color: var(--darkblue);
    font-family: Poppins;
    font-size: calc(1rem * 2560 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 0.5rem;
  }

  .v-btn {
    width: calc(10.5rem * 2560 / 1440);
    padding: 1.5rem 0;
    display: flex;
    background-color: var(--darkblue);
    color: white;
  }
}
@media screen and (max-width: 1920px) {
  .form-esqueciSenha {
    display: flex;
    padding: calc(11.125em * 1920 / 1440) calc(5.8rem * 1920 / 1440) calc(9rem * 1920 / 1440)
      calc(5.8rem * 1920 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 50%;
    border-radius: 15px;
    gap: 2rem;
  }

  .titulo-subtitulo h1 {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(1.75rem * 1920 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo h2 {
    color: var(--darkblue);
    font-family: Poppins;
    font-size: calc(1rem * 1920 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 0.5rem;
  }

  .v-btn {
    width: calc(10.5rem * 1920 / 1440);
    padding: 1.5rem 0;
    display: flex;
    background-color: var(--darkblue);
    color: white;
  }
}
@media screen and (max-width: 1600px) {
  .form-esqueciSenha {
    display: flex;
    padding: calc(11.125em * 1600 / 1440) calc(5.8rem * 1600 / 1440) calc(9rem * 1600 / 1440)
      calc(5.8rem * 1600 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 50%;
    border-radius: 15px;
    gap: 2rem;
  }

  .titulo-subtitulo h1 {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(1.75rem * 1600 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo h2 {
    color: var(--darkblue);
    font-family: Poppins;
    font-size: calc(1rem * 1600 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 0.5rem;
  }

  .v-btn {
    width: calc(10.5rem * 1600 / 1440);
    padding: 1.5rem 0;
    display: flex;
    background-color: var(--darkblue);
    color: white;
  }
}
@media screen and (max-width: 1440px) {
  .form-esqueciSenha {
    display: flex;
    padding: calc(11.125em * 1440 / 1440) calc(5.8rem * 1440 / 1440) calc(9rem * 1440 / 1440)
      calc(5.8rem * 1440 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 50%;
    border-radius: 15px;
    gap: 2rem;
  }

  .titulo-subtitulo h1 {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(1.75rem * 1440 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo h2 {
    color: var(--darkblue);
    font-family: Poppins;
    font-size: calc(1rem * 1440 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 0.5rem;
  }

  .v-btn {
    width: calc(10.5rem * 1440 / 1440);
    padding: 1.5rem 0;
    display: flex;
    background-color: var(--darkblue);
    color: white;
  }
}
@media screen and (max-width: 1366px) {
  .form-esqueciSenha {
    display: flex;
    padding: calc(11.125em * 1366 / 1440) calc(5.8rem * 1366 / 1440) calc(9rem * 1366 / 1440)
      calc(5.8rem * 1366 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 50%;
    border-radius: 15px;
    gap: 2rem;
  }

  .titulo-subtitulo h1 {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(1.75rem * 1366 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo h2 {
    color: var(--darkblue);
    font-family: Poppins;
    font-size: calc(1rem * 1366 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 0.5rem;
  }

  .v-btn {
    width: calc(10.5rem * 1366 / 1440);
    padding: 1.5rem 0;
    display: flex;
    background-color: var(--darkblue);
    color: white;
  }
}
@media screen and (max-width: 1280px) {
  .form-esqueciSenha {
    display: flex;
    padding: calc(11.125em * 1280 / 1440) calc(5.8rem * 1280 / 1440) calc(9rem * 1280 / 1440)
      calc(5.8rem * 1280 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 50%;
    border-radius: 15px;
    gap: 2rem;
  }

  .titulo-subtitulo h1 {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(1.75rem * 1280 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo h2 {
    color: var(--darkblue);
    font-family: Poppins;
    font-size: calc(1rem * 1280 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 0.5rem;
  }

  .v-btn {
    width: calc(10.5rem * 1280 / 1440);
    padding: 1.5rem 0;
    display: flex;
    background-color: var(--darkblue);
    color: white;
  }
}
@media screen and (max-width: 1024px) {
  .form-esqueciSenha {
    display: flex;
    padding: calc(11.125em * 1024 / 1440) calc(5.8rem * 1024 / 1440) calc(9rem * 1024 / 1440)
      calc(5.8rem * 1024 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 50%;
    border-radius: 15px;
    gap: 2rem;
  }

  .titulo-subtitulo h1 {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(1.75rem * 1024 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo h2 {
    color: var(--darkblue);
    font-family: Poppins;
    font-size: calc(1rem * 1024 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 0.5rem;
  }

  .v-btn {
    width: calc(10.5rem * 1024 / 1440);
    padding: 1.5rem;
    display: flex;
    background-color: var(--darkblue);
    color: white;
    font-size: .5rem;
  }
}

/* Mobile */

@media screen and (max-width: 750px) {
  .form-esqueciSenha {
    display: flex;
    padding: calc(11.125em * 750 / 1440) calc(5.8rem * 750 / 1440) calc(9rem * 750 / 1440)
      calc(5.8rem * 750 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 80%;
    border-radius: 15px;
    gap: 2rem;
  }

  .titulo-subtitulo h1 {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(1.75rem * 750 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo h2 {
    color: var(--darkblue);
    font-family: Poppins;
    font-size: calc(1rem * 750 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 0.5rem;
  }

  .v-btn {
    width: calc(10.5rem * 750 / 1440);
    padding: 1.5rem;
    display: flex;
    background-color: var(--darkblue);
    color: white;
    font-size: .5rem;
  }
}
@media screen and (max-width: 640px) {
  .form-esqueciSenha {
    display: flex;
    padding: calc(11.125em * 640 / 1440) calc(5.8rem * 640 / 1440) calc(9rem * 640 / 1440)
      calc(5.8rem * 640 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 80%;
    border-radius: 15px;
    gap: 2rem;
    margin-bottom: 10rem;
  }

  .titulo-subtitulo h1 {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(1.75rem * 640 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo h2 {
    color: var(--darkblue);
    font-family: Poppins;
    font-size: calc(1rem * 640 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 0.5rem;
  }

  .v-btn {
    width: calc(10.5rem * 640 / 1440);
    padding: 1.5rem;
    display: flex;
    background-color: var(--darkblue);
    color: white;
    font-size: .3rem;
  }
}
@media screen and (max-width: 400px) {
  .form-esqueciSenha {
    display: flex;
    padding: calc(11.125em * 400 / 1440) calc(5.8rem * 400 / 1440) calc(9rem * 400 / 1440)
      calc(5.8rem * 400 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 80%;
    border-radius: 15px;
    gap: 2rem;
    margin-bottom: 10rem;
  }

  .titulo-subtitulo h1 {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(1.75rem * 400 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo h2 {
    color: var(--darkblue);
    font-family: Poppins;
    font-size: calc(1rem * 400 / 1440);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 0.5rem;
  }

  .v-btn {
    width: calc(10.5rem * 400 / 1440);
    padding: 1.5rem;
    display: flex;
    background-color: var(--darkblue);
    color: white;
    font-size: .2rem;
  }
}
</style>