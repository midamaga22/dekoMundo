<template>
  <div class="contact-details">
    <h4 class="title-1 title-border text-uppercase">Contacto por país</h4>
    
    <div class="contact-grid">
      <!-- Venezuela -->
      <div class="country-gr">
        <h5>Venezuela</h5>
        <div class="contact-item">
          <div class="icon-wrapper">
            <i class="zmdi zmdi-pin"></i>
          </div>
          <div class="contact-text">
            <span>Av. Intercomunal El Hatillo</span>
            <span>C.S Plaza La Boyera Nivel A, local NA-6</span>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon-wrapper">
            <i class="zmdi zmdi-phone"></i>
          </div>
          <div class="contact-text">
            <span>+58 (212) 961.20.55</span>
            <span>+58 (212) 761.17.86</span>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon-wrapper">
            <i class="zmdi zmdi-email"></i>
          </div>
          <div class="contact-text">
            <span>info@dekomundo.com</span>
          </div>
        </div>
      </div>
      
      <!-- Perú -->
      <div class="country-group">
        <h5>Perú</h5>
        <div class="contact-item">
          <div class="icon-wrapper">
            <i class="zmdi zmdi-pin"></i>
          </div>
          <div class="contact-text">
            <span>Av. General Mendiburu 686.</span>
            <span>Miraflores. Lima - Perú</span>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon-wrapper">
            <i class="zmdi zmdi-phone"></i>
          </div>
          <div class="contact-text">
            <span>+51 (933) 438 517</span>
            <span>+51 (981) 352 054 / +51 (981) 591 433</span>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon-wrapper">
            <i class="zmdi zmdi-email"></i>
          </div>
          <div class="contact-text">
            <span>info@dekomundo.com</span>
          </div>
        </div>
      </div>
      
      <!-- Horario -->
      <div class="country-group">
        <h5>Horario de atención</h5>
        <div class="contact-item">
          <div class="icon-wrapper">
            <i class="zmdi zmdi-time"></i>
          </div>
          <div class="contact-text">
            <span>Lunes a Viernes: 9am - 9pm.</span>
            <span>Sábados y Domingos: 9am - 4pm</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No se necesitan cambios en el script
</script>

<style scoped>
.contact-details {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.title-border {
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}



.country-group h5 {
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: #333;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 7px;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0
  
}

.contact-item i {
  font-size: 1.2rem;
  color: #555;
  line-height: 1;
}

.contact-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-text span {
  line-height: 1.4;
  color: #555;
  font-size: 0.95rem;
}

/* Alineación perfecta para items de una sola línea */
.contact-item:has(.contact-text span:only-child) .icon-wrapper {
  align-items: flex-start;
  height: auto;
  padding-top: 2px;
}
</style>