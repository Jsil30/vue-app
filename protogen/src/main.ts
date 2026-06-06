import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

document.documentElement.setAttribute('data-theme', 'dark')

const app = createApp(App)

app.use(router)

app.mount('#app')
