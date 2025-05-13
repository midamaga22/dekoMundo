<template>
  <template v-for="n in 5" :key="n">
    <a href="#">
      <i
        :class="[
          'zmdi',
          n <= fullStars ? 'zmdi-star' : n === fullStars + 1 && hasHalfStar ? 'zmdi-star-half' : 'zmdi-star-outline'
        ]"
      ></i>
    </a>
  </template>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  rating: {
    type: Number,
    required: true,
    validator: value => value >= 0 && value <= 5
  }
});

const fullStars = computed(() => Math.floor(props.rating));
const hasHalfStar = computed(() => props.rating % 1 >= 0.5);
</script>