<template>
  <div class="breadcumbs pb-3 text-center">
    <ul class="list-unstyled d-inline-block">
      <li class="btn btn-dark p-3 d-inline-block" v-for="(item, index) in items" :key="index">
        <router-link v-if="item.to" :to="item.to" class="text-white text-decoration-none">{{ item.text }}</router-link>
        <span v-else class="text-white">{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>
  
  <script setup>
  const props = defineProps({
    items: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(item => typeof item.text === 'string')
      }
    }
  })
  </script>
  
  <style scoped>
 
  .Ml{
    margin-left: 70px;
  }
  
  .separator {
    margin: 0 5px;
    color: #777;
  }
  
  .breadcumbs a {
    color: #f9fafc;
    text-decoration: none;
  }
  

  </style>