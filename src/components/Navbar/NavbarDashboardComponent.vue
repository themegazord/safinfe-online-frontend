<template>
  <v-navigation-drawer permanent="true" rail color="#74bbe0">
    <v-list>
      <v-list-item prepend-icon="fas fa-user" :title="getNome" :subtitle="getEmail"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="fas fa-list" title="XML" value="xml"></v-list-item>
      <v-list-item
        prepend-icon="fas fa-cog"
        title="Administração"
        value="adm"
        v-if="isAdmin"
      ></v-list-item>
      <v-list-item prepend-icon="fas fa-sign-out-alt" class="bg-red" @click="logout">
        Sair
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      storage: JSON.parse(localStorage.getItem('usuario')) || JSON.parse(sessionStorage.getItem('usuario'))
    }
  },
  computed: {
    getNome() {
      return this.storage.name
    },
    getEmail() {
      return this.storage.email
    },
    isAdmin() {
      return this.storage.role == 'ADMINISTRADOR'
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('usuario')
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('usuario')
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
</style>