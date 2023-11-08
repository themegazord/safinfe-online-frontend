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
                  <v-btn variant="tonal" class="my-2" color="000511" @click="info(cliente.cliente_id)">Informações</v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
          <div class="paginacao-perpage">
            <Bootstrap5Pagination class="paginacao" :data="clientes" @pagination-change-page="buscaPaginacaoClientes">
            </Bootstrap5Pagination>
            <v-responsive max-width="200">
              <v-text-field label="Qtde por página" v-model="perPage" @blur="buscaPaginacaoClientes"></v-text-field>
            </v-responsive>
          </div>
        </div>
      </div>
      <div class="emitiu-nota">
        <v-img :width="300" v-if="emitiuNota" src="https://i.ibb.co/Lk8dtYV/E.png" style="border-radius: 10px;"></v-img>
        <v-img v-if="!emitiuNota" :width="300" style="border-radius: 10px;"
          src="https://i.ibb.co/zscnHBY/N-O-EMITIU-NOTA-FISCAL.png"></v-img>
      </div>
    </div>
    <div class="info-fiscais" v-if="emitiuNota">
      <h1>Informações fiscais e financeiras</h1>
      <h2>Aqui você poderá consultar informações fiscais e financeiras do cliente que você clicou no botão INFORMAÇÕES</h2>
      <div class="cards">
        <CardComponent titulo="Total vendido" subtitulo="Esse é o total (R$) vendido no mês vigente"
          :corpo="`R$ ${infoFin.totalNotas.toFixed(2)}`" />
        <CardComponent titulo="Total ICMS" subtitulo="Esse é o total de ICMS no mês vigente"
          :corpo="`R$ ${infoFin.totalICMS.toFixed(2)}`" />
        <CardComponent titulo="Total ICMS ST" subtitulo="Esse é o total de ICMS ST no mês vigente"
          :corpo="`R$ ${infoFin.totalST.toFixed(2)}`" />
        <CardComponent titulo="Total de PIS" subtitulo="Esse é o total de PIS no mês vigente"
          :corpo="`R$ ${infoFin.vPIS.toFixed(2)}`" />
        <CardComponent titulo="Total de COFINS" subtitulo="Esse é o total de COFINS no mês vigente"
          :corpo="`R$ ${infoFin.vCOFINS.toFixed(2)}`" />
        <CardComponent titulo="Impostos Federais"
          subtitulo="Esse é o total de imposto federal no mês vigente"
          :corpo="`R$ ${infoFin.valorApxImpostosFederais.toFixed(2)}`" />
      </div>
    </div>
  </v-main>
</template>

<script>
import axios from 'axios'
import LoadingComponent from '../../Utilitarios/LoadingComponent.vue'
import CardComponent from '../../Utilitarios/CardComponent.vue'
import { useEndpoints } from '../../../stores/endpoints'
import { Bootstrap5Pagination } from 'laravel-vue-pagination'
export default {
  components: { LoadingComponent, Bootstrap5Pagination, CardComponent },
  data() {
    return {
      loading: false,
      storage:
        JSON.parse(localStorage.getItem('usuario')) ||
        JSON.parse(sessionStorage.getItem('usuario')),
      clientes: {},
      infoFin: {
        totalNotas: 0,
        totalICMS: 0,
        totalST: 0,
        vPIS: 0,
        vCOFINS: 0,
        valorApxImpostosFederais: 0,
      },
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
          `${useEndpoints().getClientesPaginacao}/${btoa(this.storage.email)}/${this.perPage
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
    info(id) {
      this.loading = true
      this.buscaEmitiuNotaFiscal(id)
      this.buscaInformacaoFinanceira(id)
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
    },
    buscaInformacaoFinanceira(id) {
      axios.get(`${useEndpoints().getClienteInfoFinanceira}/${id}`, {
        headers: {
          Authorization: useEndpoints().getToken,
          Accept: 'application/json'
        }
      }).then((res) => {
        this.infoFin = res.data.infoFinanceira
        console.log(this.infoFin)
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

.info-1 {
  display: flex;
  justify-content: space-around;
  margin: 2rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  margin-inline: 1rem;
}

.info-fiscais {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.info-fiscais h1 {
  color: white;
    font-family: DM Sans;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.info-fiscais h2 {
  color: white;
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 1rem 0;
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