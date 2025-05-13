import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/jquery-ui.min.css'
import '@/assets/css/meanmenu.min.css'
import '@/assets/css/default.css'
import '@/assets/css/style.min.css'
import '@/assets/css/responsive.css'
import 'animate.css'

import '@/assets/js/vendor/jquery-migrate-3.3.2.min.js'
import '@/assets/js/bootstrap.bundle.min.js'
import '@/assets/js/jquery.meanmenu.js'
import '@/assets/js/slick.min.js'
import '@/assets/js/jquery.treeview.js'
import '@/assets/js/jquery-ui.min.js'
import '@/assets/js/jquery.nicescroll.min.js'

// import '@/assets/js/lightbox.min.js'
import '@/assets/js/countdon.min.js'

// import '@/assets/js/wow.min.js'
import '@/assets/js/plugins.js'
// import '@/assets/js/main.min.js'

import { createApp, VueElement } from 'vue' // Importación correcta
import router from './router' // Import SIN llaves
import App from './App.vue'

// Crea la instancia de Vue correctamente
const app = createApp(App)

// Usa el router
app.use(router) // Ahora app.use será una función válida

// Monta la aplicación
app.mount('#app')