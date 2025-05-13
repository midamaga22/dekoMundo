<script setup>


import NavBarArea from '@/components/NavBar/navBarArea.vue'


import footerArea from './components/FooterArea/footerArea.vue';

</script>

<template>
  <div class="wrapper bg-dark-white">
    <div id="app">
   
   <NavBarArea/>
   <router-view />
   
   <footerArea/>
 
 
    
   </div>
  </div>
 
</template>


