import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import icons from './icons'

addIcons(...icons)

const app = createApp(App)

app.use(router)

app.component('v-icon', OhVueIcon)

app.mount('#app')
