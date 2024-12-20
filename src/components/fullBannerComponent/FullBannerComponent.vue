<template>
  <div class="fullBannerComponent__wrapper">
    <div class="fullBannerComponent__image">
    </div>
  </div>
</template>

<script setup lang="ts">
  
</script>

<style lang="scss" scoped>
@use '@/assets/scss/colors.scss' as colors;

.fullBannerComponent {
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: colors.$primary;
    color: colors.$white;
    position: relative;
  }

  &__image {
    width:100%;
    height: 88vh;
    background: url('@/assets/images/full-banner.png') no-repeat center;
    background-size: cover;
    position: absolute;
    top: 0;
  }
}
</style>