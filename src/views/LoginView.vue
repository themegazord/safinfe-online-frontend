<template>
  <NavbarComponent />
  <main>
    <FormLoginComponent @login="(dados) => logar(dados)"/>
  </main>
  <FooterComponent />
</template>

<script>
import FormLoginComponent from '../components/FormLoginComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
export default {
  components: {
    NavbarComponent,
    FormLoginComponent,
    FooterComponent
  },
  methods: {
    logar(dados) {
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