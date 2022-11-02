import { defineStore } from 'pinia'

export const usePopup = defineStore('popup', {
    state: () => ({
        popup: {
            isOpen: false,
            message: ''
        }
    }),
})
