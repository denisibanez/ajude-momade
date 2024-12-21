<template>
  <div class="home__wrapper">
    <div class="container">
       <!-- Header Component -->
    <HeaderComponent />

<!-- Full Banner -->
<FullBannerComponent />

<!-- Highlight Component -->
<HighlightComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
 import { HeaderComponent, FullBannerComponent, HighlightComponent } from '@/components'; 
</script>

<style lang="scss" scoped>
</style>