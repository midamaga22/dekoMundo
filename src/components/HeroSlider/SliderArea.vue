<script setup>
import { ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const slides = ref([
  {
    image: new URL('@/assets/img/slider/slider-2/01.jpg', import.meta.url).href,
    alt: 'Slide 1',
  },
  {
    image: new URL('@/assets/img/slider/slider-2/02.jpg', import.meta.url).href,
    alt: 'Slide 2',
  },
  {
    image: new URL('@/assets/img/slider/slider-2/03.jpg', import.meta.url).href,
    alt: 'Slide 3',
  },
 
]);


const carouselSettings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
  wrapAround: true, 
  autoplay: 3000,
  pauseAutoplayOnHover: true, 
 
  paginationEnabled: true,
  paginationActiveColor: '#42b983', 
  paginationColor: '#cccccc', 
  navigationEnabled: true,
  navigationNextLabel: '›',
  navigationPrevLabel: '‹',
});
</script>

<template>
  <Carousel v-bind="carouselSettings">
    <Slide v-for="(slide, index) in slides" :key="index">
      <img :src="slide.image" :alt="slide.alt" class="carousel__item">
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style scoped>
.carousel__item {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Estilos para los botones de navegación */
.carousel__prev,
.carousel__next {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.carousel__prev:hover,
.carousel__next:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

/* Estilos para la paginación */
.carousel__pagination-button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
}

.carousel__pagination-button--active {
  transform: scale(1.3);
}
</style>