<template>
  <div class="col-6 col-md-4 col-lg-3">
    <div class="single-product">
      <div class="product-img">
        <a :href="product.link">
          <img :src="product.image" :alt="product.name" />
        </a>
      </div>
      <div class="product-info clearfix text-center">
        <div class="fix">
          <h4 class="post-title">
            <a :href="product.link">{{ product.name }}</a>
          </h4>
        </div>
        <div class="fix">
          <span class="pro-rating">
            <RatingStars :rating="product.rating" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RatingStars from './RatingStars.vue';

defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>