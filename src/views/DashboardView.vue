<template>
  <v-app>
    <navbar-dashboard-component />
    <contador-dashboard-component v-show="role == 'CONTADOR'"/>
  </v-app>
</template>

<script>
import ContadorDashboardComponent from '../components/Dashboard/Contador/ContadorDashboardComponent.vue'
import NavbarDashboardComponent from '../components/Navbar/NavbarDashboardComponent.vue'
export default {
  components: { NavbarDashboardComponent, ContadorDashboardComponent },
  computed: {
    role() {
      return JSON.parse(localStorage.getItem('usuario')) || JSON.parse(sessionStorage.getItem('usuario')).role
    }
  }
}
</script>

<style>
</style>