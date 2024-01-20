<script setup lang='ts'>
import { isPrime } from './need-tree-shake'
import Carousel_0_0 from '@/components/Carousel_0_0.vue'
</script>

<template>
  <div class='root'>
    <div class='wrapper'>
      <Carousel_0_0 />
    </div>
    <div class='wrapper'>
      <Carousel_0_0 />
      <Carousel_0_0 />
    </div>
  </div>
</template>

<style scoped>
.root {
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  width: 1500px;
}

.wrapper {
  display: flex;
  alignItems: 'center';
  justifyItems: 'center';
}
</style>
