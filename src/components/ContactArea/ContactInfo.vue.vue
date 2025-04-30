<template>
    <div class="contact-details">
      <h4 class="title-1 title-border text-uppercase">Contacto por país</h4>
      <ul>
        <li>
          <h5>Venezuela</h5>
          <i class="zmdi zmdi-pin"></i>
          <span>Av. Intercomunal El Hatillo</span>
          <span>C.S Plaza La Boyera Nivel A, local NA-6</span>
        </li>
        <li>
          <i class="zmdi zmdi-phone"></i>
          <span>+58 (212) 961.20.55</span>
          <span>+58 (212) 761.17.86</span>
        </li>
        <li>
          <i class="zmdi zmdi-email"></i>
          <span>info@dekomundo.com</span>
        </li>
      </ul>
      
      <ul>
        <li>
          <h5>Perú</h5>
          <i class="zmdi zmdi-pin"></i>
          <span>Av. General Mendiburu 686.</span>
          <span>Miraflores. Lima - Perú</span>
        </li>
        <li>
          <i class="zmdi zmdi-phone"></i>
          <span>+51 (933) 438 517</span>
          <span>+51 (981) 352 054 / +51 (981) 591 433</span>
        </li>
        <li>
          <i class="zmdi zmdi-email"></i>
          <span>info@dekomundo.com</span>
        </li>
      </ul>
      
      <ul>
        <li>
          <h5>Horario de atención</h5>
          <i class="zmdi zmdi-pin"></i>
          <span>Lunes a Viernes: 9am - 9pm.</span>
          <span>Sábados y Domingos: 9am - 4pm</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  // Lógica del componente si es necesaria
  </script>
  
  <style scoped>
  .contact-details {
    padding: 20px;
  }
  
  .contact-details ul {
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
  }
  
  .contact-details li {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
  }
  
  .contact-details h5 {
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .title-border {
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
    margin-bottom: 20px;
  }
  </style>