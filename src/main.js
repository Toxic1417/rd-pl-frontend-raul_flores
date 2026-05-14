import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
// se realizo una instalacion e importación de bootstrap para poder darle mayor estilo a la pagina

const app = createApp(App)

app.use(router)

app.mount('#app')
