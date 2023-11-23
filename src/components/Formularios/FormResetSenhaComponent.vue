<template>
  <form class="form-reset-senha">
    <v-container class="titulo-subtitulo">
      <h1>Vamos agora trocar sua senha:</h1>
      <h2>
        Insira por favor sua nova senha e confirme-a, quando terminar basta clicar no botão
        Continuar para finalizar a operação
      </h2>
    </v-container>
    <v-container class="form-body">
      <v-row>
        <v-col cols="12">
          <v-text-field
            type="password"
            v-model="dados.password"
            :error-messages="v$.dados.password.$errors.map((e) => e.$message)"
            counter="255"
            label="Insira sua nova senha"
            prepend-inner-icon="fas fa-lock"
            @input="v$.dados.password.$touch"
            @blur="v$.dados.password.$touch"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            type="password"
            v-model="dados.confirmaPassword"
            :error-messages="v$.dados.confirmaPassword.$errors.map((e) => e.$message)"
            counter="255"
            label="Confirme sua nova senha"
            prepend-inner-icon="fas fa-lock"
            @input="v$.dados.confirmaPassword.$touch"
            @blur="v$.dados.confirmaPassword.$touch"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-btn
      variant="tonal"
      color="primary"
      @click="enviaResetSenha"
      append-icon="fas fa-chevron-right"
      >Continuar</v-btn
    >
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { helpers, maxLength, required, sameAs } from '@vuelidate/validators'
export default {
  data() {
    return {
      dados: {
        password: '',
        confirmaPassword: ''
      }
    }
  },
  methods: {
    async enviaResetSenha() {
      if (await this.v$.dados.$validate()) {
        this.$emit('resetSenha', this.dados)
      }
    }
  },
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  validations() {
    return {
      dados: {
        password: {
          required: helpers.withMessage('O campo de senha e obrigatorio.', required),
          maxLength: helpers.withMessage('A senha deve conter ate 255 caracteres', maxLength(255))
        },
        confirmaPassword: {
          required: helpers.withMessage('O campo de senha e obrigatorio.', required),
          maxLength: helpers.withMessage('A senha deve conter ate 255 caracteres', maxLength(255)),
          sameAs: helpers.withMessage(
            'A confirmação deve ser idêntica a senha.',
            sameAs(this.dados.password)
          )
        }
      }
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 2560px) {
  .form-reset-senha {
    display: flex;
    padding: calc(4.3125rem * 2560 / 1440) calc(7.5rem * 2560 / 1440) calc(4.5rem * 2560 / 1440)
      calc(7.5rem * 2560 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 60%;
    border-radius: 15px;
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
    font-weight: 500;
    line-height: normal;
    padding: 1rem 0;
  }
}
@media screen and (max-width: 1920px) {
  .form-reset-senha {
    display: flex;
    padding: calc(4.3125rem * 1920 / 1440) calc(7.5rem * 1920 / 1440) calc(4.5rem * 1920 / 1440)
      calc(7.5rem * 1920 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 60%;
    border-radius: 15px;
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
    font-weight: 500;
    line-height: normal;
    padding: 1rem 0;
  }
}
@media screen and (max-width: 1600px) {
  .form-reset-senha {
    display: flex;
    padding: calc(4.3125rem * 1600 / 1440) calc(7.5rem * 1600 / 1440) calc(4.5rem * 1600 / 1440)
      calc(7.5rem * 1600 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 60%;
    border-radius: 15px;
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
    font-weight: 500;
    line-height: normal;
    padding: 1rem 0;
  }
}
@media screen and (max-width: 1440px) {
  .form-reset-senha {
    display: flex;
    padding: calc(4.3125rem * 1440 / 1440) calc(7.5rem * 1440 / 1440) calc(4.5rem * 1440 / 1440)
      calc(7.5rem * 1440 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 60%;
    border-radius: 15px;
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
    font-weight: 500;
    line-height: normal;
    padding: 1rem 0;
  }
}
@media screen and (max-width: 1366px) {
  .form-reset-senha {
    display: flex;
    padding: calc(4.3125rem * 1366 / 1440) calc(7.5rem * 1366 / 1440) calc(4.5rem * 1366 / 1440)
      calc(7.5rem * 1366 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 60%;
    border-radius: 15px;
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
    font-weight: 500;
    line-height: normal;
    padding: 1rem 0;
  }
}
@media screen and (max-width: 1280px) {
  .form-reset-senha {
    display: flex;
    padding: calc(4.3125rem * 1280 / 1440) calc(7.5rem * 1280 / 1440) calc(4.5rem * 1280 / 1440)
      calc(7.5rem * 1280 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 60%;
    border-radius: 15px;
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
    font-weight: 500;
    line-height: normal;
    padding: 1rem 0;
  }
}
@media screen and (max-width: 1024px) {
  .form-reset-senha {
    display: flex;
    padding: calc(4.3125rem * 1024 / 1440) calc(7.5rem * 1024 / 1440) calc(4.5rem * 1024 / 1440)
      calc(7.5rem * 1024 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 60%;
    border-radius: 15px;
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
    font-weight: 500;
    line-height: normal;
    padding: 1rem 0;
  }
}

/* Mobile */

@media screen and (max-width: 750px) {
  .form-reset-senha {
    display: flex;
    padding: calc(4.3125rem * 750 / 1440) calc(7.5rem * 750 / 1440) calc(4.5rem * 750 / 1440)
      calc(7.5rem * 750 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 60%;
    border-radius: 15px;
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
    font-weight: 500;
    line-height: normal;
    padding: 1rem 0;
  }
}

@media screen and (max-width: 640px) {
  .form-reset-senha {
    display: flex;
    padding: calc(4.3125rem * 640 / 1440) calc(7.5rem * 640 / 1440) calc(4.5rem * 640 / 1440)
      calc(7.5rem * 640 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 80%;
    border-radius: 15px;
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
    font-weight: 500;
    line-height: normal;
    padding: 1rem 0;
  }
}
@media screen and (max-width: 400px) {
  .form-reset-senha {
    display: flex;
    padding: calc(4.3125rem * 400 / 1440) calc(7.5rem * 400 / 1440) calc(4.5rem * 400 / 1440)
      calc(7.5rem * 400 / 1440);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 80%;
    border-radius: 15px;
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
    font-weight: 500;
    line-height: normal;
    padding: 1rem 0;
  }
}
</style>