import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.css'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
setupStore()
