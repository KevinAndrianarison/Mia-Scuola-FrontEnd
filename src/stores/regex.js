import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRegex = defineStore('Regex', () => {
  function RegexPassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let valeur = regex.test(password)
  }

  function RegexEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let valeur = regex.test(email)
  }

  return {
    RegexPassword,
    RegexEmail
  }
})
