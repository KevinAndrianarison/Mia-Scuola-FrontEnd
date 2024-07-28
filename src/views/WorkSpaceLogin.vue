<template>
  <div class="login">
    <div class="form">
      <div class="head">
        <div class="header">
          <div class="logo"></div>
          <h1 class="nextLogo">UniNex</h1>
        </div>
        <div class="textgetStarted">Bienvenue ! Connectez-vous !</div>
      </div>
      <div class="inputButton">
        <div class="mt-[20%]">
          <input
            type="text"
            placeholder="Identifiant"
            class="pl-3 pr-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
          />
        </div>
        <div class="mt-[10%] relative">
          <input
            placeholder="Mot de passe"
            :type="show.showPassword ? 'text' : 'password'"
            class="pl-3 pr-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[rgba(45, 52, 54,1.0)] focus:ring-2 focus:ring-inset focus:ring-[rgba(0, 184, 148,1.0)] focus:outline-none"
          />
          <button
            type="button"
            @click="show.togglePasswordVisibility()"
            class="absolute inset-y-0 right-3 pl-3 flex items-center text-gray-600"
          >
            <EyeIcon v-if="!show.showPassword" class="h-5 w-5" />
            <EyeSlashIcon v-else class="h-5 w-5" />
          </button>
        </div>
        <Button class="btn mt-[8%]">Connexion</Button>
      </div>
      <div class="text">
        <p class="textbtn">Mot de passe oublié ?</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/solid'
import { useShow } from '@/stores/Show'
const show = useShow()
</script>

<style scoped src="../styles/Login.css">
</style>
