<template>
  <navbar-component />
  <main>
    <v-container class="main-body">
      <h2 class="titulo">E-mail enviado!</h2>
      <p class="subtitulo">
        Caso o e-mail esteja cadastrado na SF Sistemas, você receberá uma mensagem em
        <span>{{ emailDescriptografado }}</span> com as instruções para definir uma nova senha.
      </p>
      <v-divider class="divisor border-opacity-75"></v-divider>
      <p class="info">
        Caso não tenha recebido a mensagem, verifique se digitou o endereço de e-mail corretamente
        ou se caiu na caixa de spam.
      </p>
      <a class="reenviar" :href="$route.path">Reenviar e-mail</a>
    </v-container>
  </main>
  <footer-component />
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue'
import NavbarComponent from '../components/NavbarComponent.vue'
export default {
  components: { NavbarComponent, FooterComponent },
  computed: {
    emailDescriptografado() {
      return atob(this.$route.params.emailHash)
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
@media screen and (max-width: 2560px) {
  .main-body {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    padding: calc(12rem * 2560 / 1920);
    gap: 1rem;
    border-radius: 10px;
  }

  .titulo {
    font-size: calc(28px * 2560 / 1920);
    font-family: DM Sans;
    color: #000511;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .subtitulo {
    font-size: calc(16px * 2560 / 1920);
    font-family: Poppins;
    color: #000511;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 80%;
  }

  .subtitulo span {
    font-weight: 700;
  }

  .info {
    color: rgba(0, 5, 17, 0.58);
    font-family: Poppins;
    font-size: calc(16px * 2560 / 1920);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 75%;
  }

  .divisor {
    width: 80%;
  }
}
@media screen and (max-width: 1920px) {
  .main-body {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    padding: calc(12rem * 1920 / 1920);
    gap: 1rem;
    border-radius: 10px;
  }

  .titulo {
    font-size: calc(28px * 1920 / 1920);
    font-family: DM Sans;
    color: #000511;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .subtitulo {
    font-size: calc(16px * 1920 / 1920);
    font-family: Poppins;
    color: #000511;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 80%;
  }

  .subtitulo span {
    font-weight: 700;
  }

  .info {
    color: rgba(0, 5, 17, 0.58);
    font-family: Poppins;
    font-size: calc(16px * 1920 / 1920);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 75%;
  }

  .divisor {
    width: 80%;
  }
}
@media screen and (max-width: 1600px) {
  .main-body {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    padding: calc(12rem * 1600 / 1920);
    gap: 1rem;
    border-radius: 10px;
  }

  .titulo {
    font-size: calc(28px * 1600 / 1920);
    font-family: DM Sans;
    color: #000511;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .subtitulo {
    font-size: calc(16px * 1600 / 1920);
    font-family: Poppins;
    color: #000511;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 80%;
  }

  .subtitulo span {
    font-weight: 700;
  }

  .info {
    color: rgba(0, 5, 17, 0.58);
    font-family: Poppins;
    font-size: calc(16px * 1600 / 1920);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 75%;
  }

  .divisor {
    width: 80%;
  }
}
@media screen and (max-width: 1440px) {
  .main-body {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    padding: calc(12rem * 1440 / 1920);
    gap: 1rem;
    border-radius: 10px;
  }

  .titulo {
    font-size: calc(28px * 1440 / 1920);
    font-family: DM Sans;
    color: #000511;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .subtitulo {
    font-size: calc(16px * 1440 / 1920);
    font-family: Poppins;
    color: #000511;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 80%;
  }

  .subtitulo span {
    font-weight: 700;
  }

  .info {
    color: rgba(0, 5, 17, 0.58);
    font-family: Poppins;
    font-size: calc(16px * 1440 / 1920);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 75%;
  }

  .divisor {
    width: 80%;
  }
}
@media screen and (max-width: 1366px) {
  .main-body {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    padding: calc(12rem * 1366 / 1920);
    gap: 1rem;
    border-radius: 10px;
  }

  .titulo {
    font-size: calc(28px * 1366 / 1920);
    font-family: DM Sans;
    color: #000511;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .subtitulo {
    font-size: calc(16px * 1366 / 1920);
    font-family: Poppins;
    color: #000511;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 80%;
  }

  .subtitulo span {
    font-weight: 700;
  }

  .info {
    color: rgba(0, 5, 17, 0.58);
    font-family: Poppins;
    font-size: calc(16px * 1366 / 1920);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 75%;
  }

  .divisor {
    width: 80%;
  }
}
@media screen and (max-width: 1280px) {
  .main-body {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    padding: calc(12rem * 1280 / 1920);
    gap: 1rem;
    border-radius: 10px;
  }

  .titulo {
    font-size: calc(28px * 1280 / 1920);
    font-family: DM Sans;
    color: #000511;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .subtitulo {
    font-size: calc(16px * 1280 / 1920);
    font-family: Poppins;
    color: #000511;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 80%;
  }

  .subtitulo span {
    font-weight: 700;
  }

  .info {
    color: rgba(0, 5, 17, 0.58);
    font-family: Poppins;
    font-size: calc(16px * 1280 / 1920);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 75%;
  }

  .divisor {
    width: 80%;
  }
}
@media screen and (max-width: 1024px) {
  .main-body {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    padding: calc(12rem * 1024 / 1920);
    gap: 1rem;
    border-radius: 10px;
  }

  .titulo {
    font-size: calc(28px * 1024 / 1920);
    font-family: DM Sans;
    color: #000511;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .subtitulo {
    font-size: calc(16px * 1024 / 1920);
    font-family: Poppins;
    color: #000511;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 80%;
  }

  .subtitulo span {
    font-weight: 700;
  }

  .info {
    color: rgba(0, 5, 17, 0.58);
    font-family: Poppins;
    font-size: calc(16px * 1024 / 1920);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 75%;
  }

  .divisor {
    width: 80%;
  }
}
</style>