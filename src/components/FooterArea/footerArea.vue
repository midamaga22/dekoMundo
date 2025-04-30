<template>
    <footer class="site-footer">
      <div class="copyright-area copyright-2">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center mt-20">
              <div class="copyright">
                <img class="footer-logo" :src="logoUrl" alt="DekoMundo Logo" loading="lazy">
                <p class="mb-0">&copy; {{ currentYear }} Deko World LLC - Derechos reservados.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  // Definimos las variables reactivas
  const logoUrl = ref(new URL('@/assets/img/logo/logo.png', import.meta.url).href)
  const currentYear = ref(new Date().getFullYear())
  
  // Si necesitamos lógica cuando el componente se monta
  onMounted(() => {
    console.log('Footer montado')
  })
  </script>
  
  <style scoped>
  .site-footer {
    background-color: #f8f8f8;
    padding: 20px 0;
    margin-top: 40px;
  }
  
  .copyright-area {
    padding: 20px 0;
  }
  
  .footer-logo {
    width: 100px;
    margin-bottom: 15px;
  }
  
  .mt-20 {
    margin-top: 20px;
  }
  
  .mb-0 {
    margin-bottom: 0;
  }
  
  .text-center {
    text-align: center;
  }
  </style>