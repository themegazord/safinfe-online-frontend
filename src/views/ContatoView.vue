<template>
  <NavbarComponent />
  <main>
    <FormContatoComponent @contato="(dados) => geraMensagem(dados)"/>
  </main>
  <FooterComponent />
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';
import FormContatoComponent from '../components/FormContatoComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
export default {
  components: {
    NavbarComponent,
    FormContatoComponent,
    FooterComponent
  },
  methods: {
    geraMensagem(dados) {
      const fullMessage = encodeURI(`Olá 😊.$Meu nome é *${dados.nomeCompleto
        }* e fiquei interessado no seu produto.$✉️ = *${dados.email}*.$📱 = *${
          dados.telefone}*.$🤔 = *${dados.assunto}*`);
      window.open(`https://api.whatsapp.com/send?phone=5567999832455&text=${fullMessage.replaceAll('$', '%0D')}`);
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