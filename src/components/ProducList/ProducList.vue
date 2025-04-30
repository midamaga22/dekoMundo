<template>
  <!-- PURCHASE-ONLINE-AREA START -->
  <div class="purchase-online-area pt-80 product-style-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h2 class="title-border">Purchase Online on Hurst</h2>
          </div>
        </div>
      </div>
      <div class="row">	
        <div class="col-lg-12">
          <div class="tab-content">
            <div class="tab-pane active" id="new-arrivals">
              <div class="row">
                <ProductItem 
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
  </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue'

const products = [
  {
    id: 1,
    name: "dummy Product name",
    image: "img/product/DEKOPAC_avatar_AMARILLO.jpg",
   
  },
  {
    id: 1,
    name: "dummy Product name",
    image: "img/product/1.jpg",
    
  },
  {
    id: 1,
    name: "dummy Product name",
    image: "img/product/3.jpg",
    
  },
  {
    id: 1,
    name: "dummy Product name",
    image: "img/product/4.jpg",
    
  },
  {
    id: 1,
    name: "dummy Product name",
    image: "img/product/2.jpg",
    
  },
  {
    id: 1,
    name: "dummy Product name",
    image: "img/product/5.jpg",
    
  },
  {
    id: 1,
    name: "dummy Product name",
    image: "img/product/6.jpg",
    
  },
  {
    id: 1,
    name: "dummy Product name",
    image: "img/product/7.jpg",
    
  },
  // ... resto de los productos
]
</script>