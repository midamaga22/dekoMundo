<template>
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="single-product">
        <div class="product-img">
          <a href="single-product.html">
            <img :src="`/src/assets/${product.image}`" :alt="product.name">
          </a>
        </div>
        <div class="product-info clearfix text-center">
          <div class="fix">
            <h4 class="post-title"><a href="#">{{ product.name }}</a></h4>
          </div>
         
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  
  defineProps({
    product: {
      type: Object,
      required: true
    }
  })
  </script>