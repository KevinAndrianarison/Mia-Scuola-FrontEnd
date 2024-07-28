import './assets/main.css'
import '@fontsource/oswald'
import '@fontsource/montserrat-alternates'
import '@fontsource/montserrat'
import '@fontsource/nunito'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import routes from './router/index'

const app = createApp(App)
app.use(createPinia())
app.use(routes)

app.mount('#app')
