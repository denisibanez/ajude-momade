<template>
  <div class="container">
    <HeaderComponent />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import {
  HeaderComponent,
} from '@/components';
</script>