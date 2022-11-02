import { defineStore } from 'pinia'

export const useTokenStore = defineStore("TokenStore", {
    state: () => ({
        currentToken: {},
    }),
})