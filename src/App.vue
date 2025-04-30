<script setup>


import NavBarArea from './components/navbar/menuArea.vue'

import footerArea from './components/FooterArea/footerArea.vue';

</script>

<template>
  <div id="app">
   
  <NavBarArea/>
  <router-view />
  
  <footerArea/>


   
  </div>
</template>


