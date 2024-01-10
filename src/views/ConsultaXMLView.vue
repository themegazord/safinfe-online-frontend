<template>
  <v-app>
    <navbar-dashboard-component />
    <consulta-XML-component />
  </v-app>
</template>

<script>
import ConsultaXMLComponent from '../components/ConsultaXML/Contador/ConsultaXMLComponent.vue'
import NavbarDashboardComponent from '../components/Navbar/NavbarDashboardComponent.vue'
export default {
  components: {
    NavbarDashboardComponent,
    ConsultaXMLComponent
  }
}
</script>

<style>

</style>