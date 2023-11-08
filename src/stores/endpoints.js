import { defineStore } from "pinia";

const url = "http://127.0.0.1:8000/"

export const useEndpoints = defineStore('endpoints', {
  state: () => ({
    autenticacao: {
      login: `${url}api/v1/interno/autenticacao/login`,
      solicitaResetSenha: `${url}api/v1/interno/autenticacao/solicita_reset_senha`,
      resetaSenha: `${url}api/v1/interno/autenticacao/reset_senha`,
    },
    clientes: {
      paginacao: `${url}api/v1/interno/cliente/paginacao`,
      emitiuNotaFiscal: `${url}api/v1/interno/cliente/emitiu_nota`
    },
    token: `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}`,
  }),
  getters: {
    getAutenticacaoLogin: (state) => state.autenticacao.login,
    getAutenticacaoSolicitaResetSenha: (state) => state.autenticacao.solicitaResetSenha,
    getAutenticacaoResetaSenha: (state) => state.autenticacao.resetaSenha,
    getClientesPaginacao: (state) => state.clientes.paginacao,
    getClienteEmitiuNotaFiscal: (state) => state.clientes.emitiuNotaFiscal,
    getToken: (state) => state.token
  }
})