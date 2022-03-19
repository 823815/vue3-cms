import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.css'
import * as ElIcons from '@element-plus/icons'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

for (const name in ElIcons) {
  app.component(name, (ElIcons as any)[name])
}

app.use(router)
app.use(store)
app.mount('#app')
setupStore()
