<template>
  <div class="home__wrapper">
    <div class="container">
       <!-- Header Component -->
    <HeaderComponent />

<!-- Full Banner -->
<FullBannerComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
 import { HeaderComponent, FullBannerComponent } from '@/components'; 
</script>

<style lang="scss" scoped>
.home {
  &__wrapper {
    .container {
      max-width: 1453px;
      margin: 0 auto;
    }
  }
} 
</style>