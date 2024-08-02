import { defineStore } from 'pinia'
import { useUrl } from '@/stores/url'
import { useShow } from '@/stores/Show'
import { useDirecteur } from '@/stores/Directeur'
import { useUser } from '@/stores/User'
import axios from 'axios'
import { ref } from 'vue'

export const useEtablissement = defineStore('Etablissement', () => {
  const user = useUser()
  const URL = useUrl().url
  const directeur = useDirecteur()
  const show = useShow()
  const nom_etab = ref('')
  const slogan_etab = ref('')
  const descri_etab = ref('')
  const abr_etab = ref('')
  const logo_etab = ref(null)
  const dateCreation_etab = ref('')

  function createfirstConfig() {
    show.showSpinner = true
    const formDataEtab = {
      nom_etab: nom_etab.value,
      slogan_etab: slogan_etab.value,
      descri_etab: descri_etab.value,
      abr_etab: abr_etab.value,
      logo_etab: logo_etab.value,
      dateCreation_etab: dateCreation_etab.value.split('-').reverse().join('-')
    }

    const formDataUserDir = {
      status_user: 'Directeur',
      email: user.email,
      password: user.password,
      photo: user.photo
    }

    const createEtab = axios.post(`${URL}/api/etablissement`, formDataEtab, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    const createUserDir = axios.post(`${URL}/api/user/register`, formDataUserDir, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    Promise.all([createEtab, createUserDir])
      .then((response) => {
        const [responseFirst, responseSecond] = response
        if (responseSecond.data) {
          const formDataDir = {
            nomComplet_dir: directeur.nomComplet_dir,
            user_id: responseSecond.data.id
          }
          axios
            .post(`${URL}/api/directeur`, formDataDir, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
            .then((response) => {
              show.showSpinner = false
            })
            .catch((error) => {
              console.error('Erreur du POST Directeur : ', error)
              show.showSpinner = false
            })
        }
      })
      .catch((error) => {
        console.error('Erreur:', error)
        show.showSpinner = false
      })
  }

  return {
    nom_etab,
    slogan_etab,
    descri_etab,
    abr_etab,
    logo_etab,
    dateCreation_etab,
    createfirstConfig
  }
})
