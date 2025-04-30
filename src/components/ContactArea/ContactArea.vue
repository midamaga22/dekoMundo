<template>
  <!-- Sección de banner superior -->
  <div class="contact-banner">
    <img src="http://dekomundo.com/wp-content/uploads/2023/10/MUESTRAS_2126x586.jpg" alt="Muestras Dekomundo">
    <div class="text-center mt-30">
      <h2>VENDE CON MUESTRAS, NO CON PALABRAS</h2>
      <h4>Solicita muestras y crea MATCH ideal.</h4>
    </div>
  </div>
  
  <!-- Área de contacto -->
  <div class="contact-us-area">
    <div class="container">	
      <div class="contact-us customer-login bg-white">
        <div class="row">
          <!-- Columna de información de contacto -->
          <div class="col-lg-6 col-md-6">
            <ContactInfo />
          </div>
          
          <!-- Columna del formulario -->
          <div class="col-lg-6 col-md-6 mt-xs-30">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ContactInfo from '../ContactArea/ContactForm.vue';
import ContactForm from '../ContactArea/ContactInfo.vue.vue';
</script>

<style scoped>
.contact-banner {
  margin-bottom: 30px;
}

.contact-banner img {
  width: 100%;
  height: auto;
  display: block;
}

.text-center {
  text-align: center;
}

.mt-30 {
  margin-top: 30px;
}

/* Puedes agregar más estilos específicos del componente aquí */
</style>