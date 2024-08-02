import { defineStore } from 'pinia'
import { useShow } from '@/stores/Show'
import { ref } from 'vue'

export const useUser = defineStore('User', () => {
  const show = useShow()
  const email = ref('')
  const status_user = ref('')
  const password = ref('')
  const passwordVerifier = ref('')
  const photo = ref(null)

  function verifierPasword() {
    show.showMessageErrorConfirmMdp = true
    if (password.value === passwordVerifier.value) {
      show.showMessageErrorConfirmMdp = false
    }
    if (passwordVerifier.value === "") {
      show.showMessageErrorConfirmMdp = false
    }
  }


  return {
    status_user,
    email,
    password,
    photo,
    passwordVerifier,
    verifierPasword,
  }
})
