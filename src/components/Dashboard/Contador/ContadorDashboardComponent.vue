<template>
  <loading-component :loading="loading" />
  <v-main>
    <div class="info-1">
      <div class="listagem-cliente">
        <h1 class="listagem-cliente-titulo">Paginação de clientes</h1>
        <h2 class="listagem-cliente-subtitulo">
          Aqui você poderá verificar todos os seus clientes cadastrados no nosso banco de dados
        </h2>
        <div class="tabela-paginacao">
          <v-table density="compact" class="tabela">
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Nome</th>
                <th class="text-left">CPF/CNPJ</th>
                <th class="text-left">Email</th>
                <th class="text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cliente in clientes.data" :key="cliente.cliente_id">
                <td>{{ cliente.cliente_id }}</td>
                <td>{{ cliente.cliente_nome }}</td>
                <td>{{ cliente.cliente_cpf_cnpj }}</td>
                <td>{{ cliente.cliente_email }}</td>
                <td>
                  <v-btn
                    variant="tonal"
                    class="my-2"
                    color="000511"
                    @click="info(cliente.cliente_id)"
                  >Informações</v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
          <div class="paginacao-perpage">
            <Bootstrap5Pagination
              class="paginacao"
              :data="clientes"
              @pagination-change-page="buscaPaginacaoClientes"
            ></Bootstrap5Pagination>
            <v-responsive max-width="200">
              <v-text-field
                label="Qtde por página"
                v-model="perPage"
                @blur="buscaPaginacaoClientes"
              ></v-text-field>
            </v-responsive>
          </div>
        </div>
      </div>
      <div class="emitiu-nota">
        <v-img
          :width="300"
          v-if="emitiuNota"
          src="https://i.ibb.co/Lk8dtYV/E.png"
          style="border-radius: 10px;"
        ></v-img>
        <v-img
          v-if="!emitiuNota"
          :width="300"
          style="border-radius: 10px;"
          src="https://i.ibb.co/zscnHBY/N-O-EMITIU-NOTA-FISCAL.png"
        ></v-img>
      </div>
    </div>
    <div class="info-2">
      <div class="emitiu-nota">
        <h1>Emitiu nota</h1>
      </div>
      <div class="emitiu-nota">
        <h1>Emitiu nota</h1>
      </div>
    </div>
  </v-main>
</template>

<script>
import axios from 'axios'
import LoadingComponent from '../../Utilitarios/LoadingComponent.vue'
import { useEndpoints } from '../../../stores/endpoints'
import { Bootstrap5Pagination } from 'laravel-vue-pagination'
export default {
  components: { LoadingComponent, Bootstrap5Pagination },
  data() {
    return {
      loading: false,
      storage:
        JSON.parse(localStorage.getItem('usuario')) ||
        JSON.parse(sessionStorage.getItem('usuario')),
      clientes: {},
      perPage: 4,
      emitiuNota: false
    }
  },
  mounted() {
    this.buscaPaginacaoClientes()
  },
  methods: {
    buscaPaginacaoClientes(pagina = 1) {
      this.loading = true
      axios
        .get(
          `${useEndpoints().getClientesPaginacao}/${btoa(this.storage.email)}/${
            this.perPage
          }?page=${pagina}`,
          {
            headers: {
              Authorization: useEndpoints().getToken,
              Accept: 'application/json'
            }
          }
        )
        .then((res) => {
          this.loading = false
          this.clientes = res.data
          console.log(this.clientes)
        })
        .catch((err) => {
          this.loading = false
          console.log(err)
        })
    },
    info(id){
      this.loading = true
      this.buscaEmitiuNotaFiscal(id)
      this.loading = false
    },
    buscaEmitiuNotaFiscal(id) {
      axios.get(`${useEndpoints().getClienteEmitiuNotaFiscal}/${id}`, {
        headers: {
          Authorization: useEndpoints().getToken,
          Accept: 'application/json'
        }
      }).then((res) => {
        this.emitiuNota = res.data.emitiu_nota
        console.log(this.emitiuNota)
      }).catch((err) => {
        console.log(err)
      })  
    }
  }
}
</script>

<style scoped>
main {
  background-color: var(--darkblue);
  padding-top: 1rem;
}

.info-1,
.info-2 {
  display: flex;
  justify-content: space-around;
  margin: 2rem;
}

.listagem-cliente {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  width: 70%;
  height: auto;
}

.listagem-cliente-titulo {
  color: var(--darkblue);
  font-family: DM Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.listagem-cliente-subtitulo {
  color: var(--darkblue);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.tabela-paginacao {
  display: flex;
  flex-direction: column;
}

.paginacao-perpage {
  display: flex;
  justify-content: space-between;
}
</style>