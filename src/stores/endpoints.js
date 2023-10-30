import { defineStore } from "pinia";

const url = "http://127.0.0.1:8000/"

export const useEndpoints = defineStore('endpoints', {
  state: () => ({
    autenticacao: {
      login: `${url}api/v1/interno/autenticacao/login`
    },
    token: `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}`,
  }),
  getters: {
    getAutenticacaoLogin: (state) => state.autenticacao.login
  }
})