<template>
  <div class="firstsetup">
    <div class="content">
      <div class="titre"><p>Configuration de votre plateforme.</p></div>
      <div class="form">
        <p class="infos">Informations sur votre établissement :</p>

        <div class="class formInput border-b border-gray-900/10 pb-12">
          <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900"
                >Nom de l'établissement</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  class="pl-3 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="country" class="block text-sm font-medium leading-6 text-gray-900"
                >Abréaviation du nom</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  class="pl-3 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900"
                >Slogan</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  class="pl-3 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="country" class="block text-sm font-medium leading-6 text-gray-900"
                >Description</label
              >

              <div class="mt-2">
                <textarea
                  type="text"
                  class="pl-3 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
                ></textarea>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
                >Date de création</label
              >
              <div class="mt-2">
                <input
                  type="date"
                  class="pl-3 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900"
                >Votre logo</label
              >
              <div class="mt-2">
                <div class="relative flex items-center">
                  <input
                    @change="onFileChange"
                    class="absolute inset-0 opacity-0 cursor-pointer"
                    type="file"
                  />
                  <div
                    class="file-label bg-green-100 text-green-800 py-2 px-4 rounded-md border border-green-300"
                  >
                    📂 Choisissez une image
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="infos">Compte administrateur :</p>

        <div class="class formInput border-b border-gray-900/10 pb-12">
          <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900"
                >Adresse e-mail</label
              >
              <div class="mt-2">
                <input
                  type="email"
                  class="pl-3 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
                />
              </div>
              <p class="err" v-if="show.showMessageErrorEmail">Adresse email invalide</p>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900"
                >Créer un mot de passe</label
              >
              <div class="mt-2 relative">
                <input
                  :type="show.showCreatePassword ? 'text' : 'password'"
                  class="pl-3 pr-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
                />
                <button
                  type="button"
                  @click="show.toggleCreatePasswordVisibility()"
                  class="absolute inset-y-0 right-3 pl-3 flex items-center text-gray-600"
                >
                  <EyeIcon v-if="!show.showCreatePassword" class="h-5 w-5" />
                  <EyeSlashIcon v-else class="h-5 w-5" />
                </button>
              </div>
              <p class="err" v-if="show.showMessageErrorMdp">
                Entrer un mot de passe avec Majuscule, Chiffre et Caractère spécial
              </p>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium leading-6 text-gray-900"
                >Confirmer votre mot de passe</label
              >
              <div class="mt-2 relative">
                <input
                  :type="show.showVerifyPassword ? 'text' : 'password'"
                  class="pl-3 pr-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
                />
                <button
                  type="button"
                  @click="show.toggleVerifyPasswordVisibility()"
                  class="absolute inset-y-0 right-3 pl-3 flex items-center text-gray-600"
                >
                  <EyeIcon v-if="!show.showVerifyPassword" class="h-5 w-5" />
                  <EyeSlashIcon v-else class="h-5 w-5" />
                </button>
              </div>
              <p class="err" v-if="show.showMessageErrorConfirmMdp">Vérifier votre mot de passe</p>
            </div>
          </div>
        </div>
      </div>

      <div class="btn">
        <Button class="retour BTN" @click="testAnimation()">Retour</Button>
        <div  @click="testAnimationCont()" class="continuer BTNdiv">
          <Button>Continuer</Button><ArrowRightIcon class="h-5 w-5 ml-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EyeIcon, EyeSlashIcon, ArrowRightIcon } from '@heroicons/vue/24/solid'
import { useShow } from '@/stores/Show'
const show = useShow()

function testAnimationCont() {
  show.showLogin = true
  show.showFirstConfig = false
}

function testAnimation() {
  show.showHome = true
  show.showFirstConfig = false
}
</script>

<style scoped src="../styles/FirstSetup.css"></style>
