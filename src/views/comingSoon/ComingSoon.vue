<template>
  <div class="comingSoonComponent__wrapper">
    <div class="container">
      <HeaderComponent />
      <div class="comingSoonComponent__body">
        <img src="@/assets/images/cooming.png" alt="" />
        <h1 class="poppins-semibold">Em Breve</h1>
        <ButtonsComponent
          text="Voltar"
          background="#C32F34"
          color="#ffffff"
          @handleButtonClick="navigate"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ButtonsComponent, HeaderComponent } from '@/components';

import { useRouter } from 'vue-router';

const router = useRouter();

const navigate = () => {
  router.push('/');
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/colors' as colors;

.comingSoonComponent__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  img {
    width: 500px;

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }
  h1 {
    font-size: 50px;
    color: colors.$secondary;
    text-transform: uppercase;
    margin: 1rem 0;
  }
}
</style>
