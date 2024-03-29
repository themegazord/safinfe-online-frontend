import { defineStore } from "pinia";

const url = "http://127.0.0.1:8000/"

export const useEndpoints = defineStore('endpoints', {
  state: () => ({
    token: `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}`,
    autenticacao: {
      login: `${url}api/v1/interno/autenticacao/login`,
      solicitaResetSenha: `${url}api/v1/interno/autenticacao/solicita_reset_senha`,
      resetaSenha: `${url}api/v1/interno/autenticacao/reset_senha`,
    },
    clientes: {
      paginacao: `${url}api/v1/interno/cliente/paginacao`,
      emitiuNotaFiscal: `${url}api/v1/interno/cliente/emitiu_nota`,
      infoFinanceira: `${url}api/v1/interno/cliente/info_fin`,
    },
    contador: {
      listagem_clientes: `${url}api/v1/interno/contador/listagem_clientes`
    },
  }),
  getters: {
    getToken: (state) => state.token,
    getAutenticacaoLogin: (state) => state.autenticacao.login,
    getAutenticacaoSolicitaResetSenha: (state) => state.autenticacao.solicitaResetSenha,
    getAutenticacaoResetaSenha: (state) => state.autenticacao.resetaSenha,
    getClientesPaginacao: (state) => state.clientes.paginacao,
    getClienteEmitiuNotaFiscal: (state) => state.clientes.emitiuNotaFiscal,
    getClienteInfoFinanceira: (state) => state.clientes.infoFinanceira,
    getContadorListagemClientes: (state) => state.contador.listagem_clientes
  }
})