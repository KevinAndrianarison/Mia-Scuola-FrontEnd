<template>
  <div class="dashboard-container">
    <header class="header">
      <div class="left">
        <div class="logo"></div>
        <h1>UniNex</h1>
      </div>
      <div class="right">
        <div class="profil">
          <div class="image"></div>
          <p>ANDRIANARISON Steeve Kevin</p>
        </div>
        <Button class="btn">Publier</Button>
        <Switch
          v-model="enabled"
          :class="enabled ? 'bg-gray-800' : 'bg-gray-400'"
          class="relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          <span class="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            :class="enabled ? 'translate-x-6' : 'translate-x-0'"
            class="pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
          />
        </Switch>
      </div>
    </header>
    <nav class="sidebar">
      <ul>
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton class="compte w-[170px] text-sm">
              <UserCircleIcon class="h-5 w-5 mr-2" />
              Comptes
              <ChevronDownIcon
                class="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute ml-[80px] w-[200px] divide-gray-100 rounded-sm bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    class="btndrop"
                    :class="[
                      active ? 'bg-[#FDCB6E] text-white' : 'text-gray-900',
                      'w-[99%] rounded-sm px-2 py-2 text-sm'
                    ]"
                  >
                    <EditIcon
                      :active="active"
                      class="mr-2 h-5 w-5 text-violet-400"
                      aria-hidden="true"
                    />
                    📌 Compte du directeur
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    class="btndrop"
                    :class="[
                      active ? 'bg-[#FDCB6E]  text-white' : 'text-gray-900',
                      'w-[99%] rounded-sm px-2 py-2 text-sm'
                    ]"
                  >
                    <DuplicateIcon
                      :active="active"
                      class="mr-2 h-5 w-5 text-violet-400"
                      aria-hidden="true"
                    />
                    🔗 Aures comptes
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <li><CheckBadgeIcon class="h-5 w-5 mr-2" /> Rôles</li>
        <li><ChatBubbleLeftRightIcon class="h-5 w-5 mr-2" /> Discussions</li>
        <li><NewspaperIcon class="h-5 w-5 mr-2" /> Annonces</li>
      </ul>
      <ul>
        <li><Cog6ToothIcon class="h-5 w-5 mr-2" />Paramètres</li>
        <li><ArrowRightStartOnRectangleIcon class="h-5 w-5 mr-2" />Déconnexion</li>
      </ul>
    </nav>
    <main class="main-content">
      <section>
        <h2>Section Principale</h2>
        <p>Contenu principal du tableau de bord...</p>
      </section>
    </main>
  </div>
</template>

<script setup>
import axios from 'axios'
import {
  CheckBadgeIcon,
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon,
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  NewspaperIcon
} from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const enabled = ref(false)

</script>

<style scoped>
.profil {
  display: flex;
  align-items: center;
  width: 180px;
}

.image {
  background: rgba(255, 0, 0, 0.35);
  width: 30%;
  height: 39px;
  border-radius: 100%;
}

h1 {
  margin-left: 120px;
  font-family: 'oswald', sans-serif;
  font-size: 26px;
  font-weight: bold;
}
.logo {
  width: 150px;
  height: 150px;
  background-image: url('../assets/Blue_Modern_Free_Academy_Logo-removebg-preview.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
}

.compte {
  display: flex;
}

.btndrop {
  text-align: left;
}

.right {
  display: flex;
  align-items: center;
}

.dashboard-container {
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar main';
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  min-width: 1024px;
}

.left {
  display: flex;
  align-items: center;
}

.message {
  width: 38px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

.message:hover {
  background-color: rgba(128, 128, 128, 0.803);
}

.header {
  grid-area: header;
  padding: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-bottom: 2px rgba(128, 128, 128, 0.147) solid;
}

.sidebar {
  grid-area: sidebar;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 15px;
  color: var(--color-text-main);
}

.sidebar:hover {
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.2s ease-in-out;
  margin-left: 8px;
  margin-right: -8px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li,
.compte {
  margin-bottom: 1rem;
  padding: 5px 8px 5px 15px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  font-size: 14px;
  display: flex;
}

.sidebar li:hover,
.compte:hover {
  border-radius: 25px;
  background-color: rgba(0, 184, 147, 0.537);
}

.main-content {
  grid-area: main;
  padding: 1rem;
  overflow-y: scroll;
}

.btn {
  background-color: var(--color-third);
  padding: 5px 15px 5px 15px;
  border: 2px var(--color-third) solid;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  margin-right: 15px;
}

.btn:hover {
  background-color: var(--color-background-main);
  color: var(--color-third);
}
</style>
