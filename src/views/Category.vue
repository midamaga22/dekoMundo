<template>
<div class="col-12">
    <div class="heading-banner-area overlay-bg">
        <div class="heading-banner-title">
            <h2>{{ $route.params.name }}</h2>
        </div>
    </div>

    <div class="container ">
        <h4 class=" pt-4 text-center"> 
        Se adecuan perfectamente a todo tipo de espacios, incluyendo oficinas, tiendas, escuelas, hospitales, restaurantes, hoteles, espacios públicos y hogares. Sus increíbles tonos y variadas texturas transformarán tus espacios de manera fácil y rápida en lugares acogedores y elegantes.
        </h4>
    </div>
</div>
<div class="row justify-content-center my-4">
    <div class="col-auto ">
        <a href="" class="btn btn-outline-secondary d-flex align-items-center">
        <i class="zmdi zmdi-smartphone-android zmdi-hc-2x p-2 "></i> DekoVisualizer</a>
    </div>
</div>
        
<div class="row">
    <ProductList/>
</div>
             

</template>
  
<script setup>

   import ProductList from '@/components/Product/ProductList.vue'



</script>
  
<style scoped>
/* Estilo para el banner con imagen de fondo */
.heading-banner-area {
background-image: url('/src/assets/img/bg/piso_flotante.png');
width: 100% ; 
}
  
/* Asegura que el contenido esté sobre el overlay */
.heading-banner {
position: relative;
z-index: 1;
}
  
/* Estilo para los botones de catálogo */
.btn-outline-primary {
border-width: 2px;
font-weight: 500;
min-width: 180px;
margin-bottom: 10px;
transition: all 0.3s ease;
color: black;
}
  
.btn-outline-primary:hover {
 background-color: #cc8830;
color: white;
}
  
@media (max-width: 768px) {
.btn-outline-primary {
width: 100%;
margin: 5px 0;
}
}
</style>