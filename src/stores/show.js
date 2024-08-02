import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useShow = defineStore('Show', () => {
  const showHome = ref(false)
  const showSpinner = ref(false)
  const showFirstConfig = ref(false)
  const showCreatePassword = ref(false)
  const showMessageErrorMdp = ref(false)
  const showMessageErrorConfirmMdp = ref(false)
  const showMessageErrorEmail = ref(false)
  const showLogin = ref(true)
  const showVerifyPassword = ref(false)
  const showPassword = ref(false)
  const showAdmin = ref(false)

  function toggleCreatePasswordVisibility() {
    showCreatePassword.value = !showCreatePassword.value
  }

  function togglePasswordVisibility() {
    showPassword.value = !showPassword.value
  }

  function toggleVerifyPasswordVisibility() {
    showVerifyPassword.value = !showVerifyPassword.value
  }

  return {
    showHome,
    showSpinner,
    showFirstConfig,
    showCreatePassword,
    showVerifyPassword,
    showAdmin,
    showPassword,
    showLogin,
    showMessageErrorMdp,
    showMessageErrorConfirmMdp,
    showMessageErrorEmail,
    toggleCreatePasswordVisibility,
    togglePasswordVisibility,
    toggleVerifyPasswordVisibility
  }
})
