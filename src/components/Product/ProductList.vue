<template>
  <section class="purchase-online-area pt-40 product-style-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h2 class="title-border">Nuestros Productos</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="tab-content">
            <div class="tab-pane active" id="new-arrivals">
              <div class="row">
                <ProductCard
                  v-for="product in products"
                  :key="product.id"
                  :product="product"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ProductCard from '@/components/Product/ProductCard.vue';

const products = ref([
  {
    id: 1,
    name: 'dummy Product name',
    image: 'src/assets/img/product/1.jpg',
    rating: 3,
    link: 'single-product.html'
  },
  {
    id: 2,
    name: 'dummy Product name',
    image: 'src/assets/img/product/2.jpg',
    rating: 3,
    link: 'single-product.html'
  },
  {
    id: 3,
    name: 'dummy Product name',
    image: 'src/assets/img/product/3.jpg',
    rating: 3,
    link: 'single-product.html'
  },
  {
    id: 4,
    name: 'dummy Product name',
    image: 'src/assets/img/product/4.jpg',
    rating: 3,
    link: 'single-product.html'
  },
  {
    id: 5,
    name: 'dummy Product name',
    image: 'src/assets/img/product/5.jpg',
    rating: 3,
    link: 'single-product.html'
  },
  {
    id: 6,
    name: 'dummy Product name',
    image: 'src/assets/img/product/6.jpg',
    rating: 3,
    link: 'single-product.html'
  },
  {
    id: 7,
    name: 'dummy Product name',
    image: 'src/assets/img/product/7.jpg',
    rating: 3,
    link: 'single-product.html'
  },
  {
    id: 8,
    name: 'Maya martinez',
    image: 'src/assets/img/product/8.jpg',
    rating: 4.5,
    link: 'single-product.html'
  }
]);
</script>

<style scoped>
/* Puedes agregar estilos específicos del componente aquí si es necesario */
</style>