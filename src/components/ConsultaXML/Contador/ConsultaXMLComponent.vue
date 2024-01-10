<template>
  <loading-component :loading="loading" />
  <notificacao-component />
  <v-main>
    <div class="form-consulta">
      <h1>Aqui vamos consultar os XML dos seus clientes, baseando-se nos filtros selecionados</h1>
      <form>
        <v-row class="linha">
          <v-col cols="6" :class="{ 'v-col-12': isMobile }">
            <v-select
              v-model="pesquisa.cliente_cpf_cnpj"
              :items="clientes"
              item-title="cliente_nome"
              item-value="cliente_cpf_cnpj"
              label="Cliente: "
            ></v-select>
          </v-col>
          <v-col cols="3" v-show="!isMobile">
            <label for="dataInicial">Data inicial: </label>
            <input type="date" name="dataInicial" id="dataInicial" v-model="pesquisa.diaInicial" />
          </v-col>
          <v-col cols="3" v-show="!isMobile">
            <label for="dataFinal">Data final: </label>
            <input type="date" name="dataFinal" id="dataFinal" v-model="pesquisa.diaFinal" />
          </v-col>
        </v-row>
        <v-row v-show="isMobile">
          <v-col cols="6">
            <label for="dataInicial">Data inicial: </label>
            <input type="date" name="dataInicial" id="dataInicial" v-model="pesquisa.diaInicial" />
          </v-col>
          <v-col cols="6">
            <label for="dataFinal">Data final: </label>
            <input type="date" name="dataFinal" id="dataFinal" v-model="pesquisa.diaFinal" />
          </v-col>
        </v-row>
        <v-row class="linha">
          <v-col cols="6" :class="{ 'v-col-12': isMobile }">
            <v-text-field
              label="Insira o número da nota inicial"
              v-model="pesquisa.notaInicial"
            ></v-text-field>
          </v-col>
          <v-col cols="6" :class="{ 'v-col-12': isMobile }">
            <v-text-field
              label="Insira o número da nota final"
              v-model="pesquisa.notaFinal"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="linha">
          <v-col cols="6" :class="{ 'v-col-12': isMobile }">
            <v-combobox
              multiple
              chips
              label="Informe o status que deseja procurar:"
              v-model="pesquisa.status"
              :items="status"
            ></v-combobox>
          </v-col>
          <v-col cols="6" :class="{ 'v-col-12': isMobile }">
            <v-combobox
              multiple
              chips
              label="Informe o modelo que deseja procurar:"
              v-model="pesquisa.modelo"
              :items="modelos"
            ></v-combobox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn @click="envia" variant="tonal">Pesquisar</v-btn>
          </v-col>
        </v-row>
      </form>
    </div>
  </v-main>
</template>

<script>
import axios from 'axios'
import LoadingComponent from '../../Utilitarios/LoadingComponent.vue'
import NotificacaoComponent from '../../Utilitarios/NotificacaoComponent.vue'
import { useEndpoints } from '../../../stores/endpoints'
import { mapActions } from 'pinia'
import { useNotificacoes } from '../../../stores/notificacao'
export default {
  components: {
    LoadingComponent,
    NotificacaoComponent
  },
  data() {
    return {
      loading: false,
      clientes: [],
      usuario: {},
      mobile: false,
      pesquisa: {
        cliente_cpf_cnpj: undefined,
        status: undefined,
        modelo: undefined,
        notaInicial: undefined,
        notaFinal: undefined,
        diaInicial: undefined,
        diaFinal: undefined
      },
      status: ['TODOS', 'AUTORIZADA', 'CANCELADA', 'INUTILIZADA'],
      modelos: ['TODOS', '55', '65']
    }
  },
  mounted() {
    this.loading = true
    this.usuario = JSON.parse(localStorage.getItem('usuario') || sessionStorage.getItem('usuario'))
    axios
      .get(`${useEndpoints().getContadorListagemClientes}/${this.usuario.email}`, {
        headers: {
          Authorization: useEndpoints().getToken,
          Accept: 'application/json'
        }
      })
      .then((res) => {
        this.clientes = res.data.clientes
        this.loading = false
      })
      .catch((err) => {
        if (err.response.data.erro) {
          this.setNotificacoes(err.response.data.erro, 'Erro', 'erro')
        }
        this.loading = false
      })
    this.updateColClass()
    window.addEventListener('resize', this.updateColClass)
  },
  watch: {
    isMobile() {
      this.updateColClass()
    }
  },
  methods: {
    ...mapActions(useNotificacoes, ['setNotificacoes']),
    updateColClass() {
      this.isMobile = window.innerWidth < 750
    },
    // Usar quando arrumarem o range do v-date-picker do vuetify
    // ordenaDatas() {
    //   this.data.sort((a, b) =>{
    //     return a - b
    //   })
    //   this.pesquisa.diaInicial = this.configuraData(this.data[0])
    //   this.pesquisa.diaFinal = this.configuraData(this.data[this.data.length - 1])
    // },
    // configuraData(data) {
    //   var dataOriginal = new Date(data)
    //   return `${dataOriginal.getFullYear()}-${("0" + (dataOriginal.getMonth() + 1)).slice(-2)}-${("0" + dataOriginal.getDate()).slice(-2)}`
    // },
    envia() {
      // this.ordenaDatas()
      console.log(this.pesquisa)
    }
  }
}
</script>

<style scoped>
.v-main {
  background-color: var(--darkblue);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-consulta {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  width: 80%;
  height: auto;
  background-color: white;
  border-radius: 10px;
}

.form-consulta h1 {
  font-size: 1.75rem;
  font-family: DM Sans;
  font-weight: 700;
}

form {
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
}

form .v-btn {
  background-color: var(--darkblue);
  color: white;
}

label {
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 500;
  margin-right: 1rem;
}

input[type='date']::-webkit-inner-spin-button,
input[type='date']::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}

@media screen and (max-width: 2560px) {
  .form-consulta h1 {
    font-size: calc(1.75rem * 2560 / 1920);
  }

  label {
    font-size: calc(1rem * 2560 / 1920);
    margin-right: calc(1rem * 2560 / 1920);
  }
}
@media screen and (max-width: 1920px) {
  .form-consulta h1 {
    font-size: calc(1.75rem * 1920 / 1920);
    padding: calc(1rem * 1920 / 1920);
  }

  label {
    font-size: calc(1rem * 1920 / 1920);
    margin-right: calc(1rem * 1920 / 1920);
  }
}
@media screen and (max-width: 1600px) {
  .form-consulta h1 {
    font-size: calc(1.75rem * 1600 / 1920);
  }
  label {
    font-size: calc(1rem * 1600 / 1920);
    margin-right: calc(1rem * 1600 / 1920);
  }
}
@media screen and (max-width: 1440px) {
  .form-consulta h1 {
    font-size: calc(1.75rem * 1440 / 1920);
  }

  label {
    font-size: calc(1rem * 1440 / 1920);
    margin-right: calc(1rem * 1440 / 1920);
  }
}
@media screen and (max-width: 1366px) {
  .form-consulta h1 {
    font-size: calc(1.75rem * 1366 / 1920);
  }

  label {
    font-size: calc(1rem * 1366 / 1920);
    margin-right: calc(1rem * 1366 / 1920);
  }
}

/* Mobile */
@media screen and (max-width: 750px) {
  .form-consulta h1 {
    font-size: calc(1.75rem * 750 / 1920);
  }

  label {
    font-size: calc(1rem * 750 / 1920);
    margin-right: calc(1rem * 750 / 1920);
  }

  form {
    padding: calc(3rem * 750 / 1920);
  }

  .linha {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 640px) {
  .form-consulta h1 {
    font-size: calc(1.75rem * 640 / 1920);
  }

  label {
    font-size: calc(1rem * 640 / 1920);
    margin-right: calc(1rem * 640 / 1920);
  }

  form {
    padding: calc(3rem * 640 / 1920);
  }

  .linha {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 400px) {
  .form-consulta h1 {
    font-size: calc(1.75rem * 400 / 1920);
  }

  label {
    font-size: calc(1rem * 400 / 1920);
    margin-right: calc(1rem * 400 / 1920);
  }

  form {
    padding: calc(3rem * 400 / 1920);
  }

  .linha {
    display: flex;
    flex-direction: column;
  }
}
</style>