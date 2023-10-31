<template>
  <navbar-component />
  <main>
    <form-esqueci-senha-component />
  </main>
  <footer-component />
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue'
import FormEsqueciSenhaComponent from '../components/Formularios/FormEsqueciSenhaComponent.vue'
import NavbarComponent from "../components/NavbarComponent.vue"

export default {
  components: { NavbarComponent, FooterComponent, FormEsqueciSenhaComponent },

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