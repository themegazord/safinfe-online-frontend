<template>
  <form class="form-contato">
    <v-container class="titulo-subtitulo">
      <h1>Entre em contato conosco!</h1>
      <h2>
        Quer contratar ou saber mais sobre as nossas soluções? Solicite o contato do nosso time
        preenchendo o formulário abaixo:
      </h2>
    </v-container>
    <v-container class="body-form">
      <v-row>
        <v-col cols="12">
          <v-text-field
            type="text"
            v-model="dados.nomeCompleto"
            :error-messages="v$.dados.nomeCompleto.$errors.map((e) => e.$mesage)"
            counter="155"
            label="Nome Completo"
            @input="v$.dados.nomeCompleto.$touch"
            @blur="v$.dados.nomeCompleto.$touch"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            type="email"
            v-model="dados.email"
            :error-messages="v$.dados.email.$errors.map((e) => e.$mesage)"
            counter="255"
            label="E-mail"
            @input="v$.dados.email.$touch"
            @blur="v$.dados.email.$touch"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            type="text"
            v-model="dados.telefone"
            :error-messages="v$.dados.telefone.$errors.map((e) => e.$mesage)"
            counter="20"
            label="Telefone"
            @input="v$.dados.telefone.$touch"
            @blur="v$.dados.telefone.$touch"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            type="text"
            v-model="dados.assunto"
            :error-messages="v$.dados.assunto.$errors.map((e) => e.$mesage)"
            counter="255"
            label="Assunto"
            @input="v$.dados.assunto.$touch"
            @blur="v$.dados.assunto.$touch"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-btn
      variant="tonal"
      color="primary"
      @click="$emit('contato', dados)"
      append-icon="fas fa-chevron-right"
      >Enviar</v-btn
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
        nomeCompleto: '',
        email: '',
        telefone: '',
        assunto: ''
      }
    }
  },
  validations() {
    return {
      dados: {
        nomeCompleto: {
          required: helpers.withMessage('O campo de nome completo e obrigatorio.', required),
          maxLength: helpers.withMessage(
            'O nome completo deve conter ate 155 caracteres',
            maxLength(155)
          )
        },
        email: {
          required: helpers.withMessage('O campo de email e obrigatorio.', required),
          maxLength: helpers.withMessage('O email deve conter ate 255 caracteres', maxLength(255)),
          email: helpers.withMessage('O email e invalido.', email)
        },
        telefone: {
          required: helpers.withMessage('O campo de telefone e obrigatorio.', required),
          maxLength: helpers.withMessage('O telefone deve conter ate 20 caracteres', maxLength(20))
        },
        assunto: {
          required: helpers.withMessage('O campo de asssunto e obrigatorio.', required),
          maxLength: helpers.withMessage(
            'O asssunto deve conter ate 255 caracteres',
            maxLength(255)
          )
        }
      }
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 2560px) {
  .form-contato {
    display: flex;
    padding: calc(3.5rem * 2560 / 1920) calc(7.5rem * 2560 / 1920) calc(3.5rem * 2560 / 1920)
      calc(7.5rem * 2560 / 1920);
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
    font-size: calc(0.875rem * 2560 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(0.875rem * 2560 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
@media screen and (max-width: 1920px) {
  .form-contato {
    display: flex;
    padding: calc(3.5rem * 1920 / 1920) calc(7.5rem * 1920 / 1920) calc(3.5rem * 1920 / 1920)
      calc(7.5rem * 1920 / 1920);
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
    font-size: calc(0.875rem * 1920 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(0.875rem * 1920 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
@media screen and (max-width: 1600px) {
  .form-contato {
    display: flex;
    padding: calc(3.5rem * 1600 / 1920) calc(7.5rem * 1600 / 1920) calc(3.5rem * 1600 / 1920)
      calc(7.5rem * 1600 / 1920);
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
    font-size: calc(0.875rem * 1600 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(0.875rem * 1600 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
@media screen and (max-width: 1440px) {
  .form-contato {
    display: flex;
    padding: calc(3.5rem * 1440 / 1920) calc(7.5rem * 1440 / 1920) calc(3.5rem * 1440 / 1920)
      calc(7.5rem * 1440 / 1920);
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
    font-size: calc(0.875rem * 1440 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(0.875rem * 1440 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
@media screen and (max-width: 1366px) {
  .form-contato {
    display: flex;
    padding: .5rem calc(7.5rem * 1366 / 1920) .5rem
      calc(7.5rem * 1366 / 1920);
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
    font-size: calc(0.875rem * 1366 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(0.875rem * 1366 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
@media screen and (max-width: 1280px) {
  .form-contato {
    display: flex;
    padding: .5rem calc(7.5rem * 1280 / 1920) .5rem
      calc(7.5rem * 1280 / 1920);
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
    font-size: calc(0.875rem * 1280 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(0.875rem * 1280 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
@media screen and (max-width: 1024px) {
  .form-contato {
    display: flex;
    padding: .5rem calc(7.5rem * 1024 / 1920) .5rem
      calc(7.5rem * 1024 / 1920);
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
    font-size: calc(0.875rem * 1024 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .titulo-subtitulo {
    color: var(--darkblue);
    font-family: DM Sans;
    font-size: calc(0.875rem * 1024 / 1920);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
</style>