<template>
  <v-card class="card">
    <template v-slot:title>{{ titulo }}</template>
    <template v-slot:subtitle>{{ subtitulo }}</template>
    <template v-slot:text>{{ corpo }}</template>
  </v-card>
</template>

<script>
export default {
  props: {
    titulo: String,
    subtitulo: String,
    corpo: String
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #000;
  padding: 5px;
  text-align: center;
  font-family: Poppins;
  border-radius: 10px;
}
</style>