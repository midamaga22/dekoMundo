import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/css/responsive.css';
import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css';
import { createApp } from 'vue' // Importación correcta
import App from './App.vue'
import router from './router' // Import SIN llaves

// Crea la instancia de Vue correctamente
const app = createApp(App)

// Usa el router
app.use(router) // Ahora app.use será una función válida

// Monta la aplicación
app.mount('#app')