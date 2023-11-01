<template>
  <navbar-component />
  <main>
    <form-reset-senha-component @reset-senha="(dados) => resetSenha(dados)"/>
  </main>
  <footer-component /> 
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue'
import FormResetSenhaComponent from '../components/Formularios/FormResetSenhaComponent.vue'
import NavbarComponent from '../components/NavbarComponent.vue'
export default {
  components: { NavbarComponent, FooterComponent, FormResetSenhaComponent },
  methods: {
    resetSenha(dados) {
      console.log(dados)
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