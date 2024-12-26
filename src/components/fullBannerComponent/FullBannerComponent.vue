<template>
  <div class="fullBannerComponent__wrapper">
    <div class="fullBannerComponent__image"></div>

    <div class="fullBannerComponent__information">
      <h1 class="poppins-semibold">
        Transforme nossa comunidade em Moçambique!
      </h1>
      <p class="source-sans-pro">
        Com seu apoio, podemos melhorar a vida de crianças e famílias, construir
        um futuro mais brilhante. Doe, compartilhe e faça parte dessa mudança
        positiva que impactará gerações!
      </p>

      <small class="source-sans-pro" @click="navigate"> Doações</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigate = () => {
  router.push('/doacoes');
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/colors.scss' as colors;

.fullBannerComponent {
  &__wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    background: colors.$primary;
    color: colors.$white;
    position: relative;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }

  &__image {
    width: 100%;
    height: 75vh;
    background: url('@/assets/images/full-banner.png') no-repeat center;
    background-size: cover;
    position: absolute;
    top: 0;

    @media (max-width: 1024px) {
      height: 35vh;
      position: relative;
    }
  }

  &__information {
    max-width: 600px;
    text-align: center;
    z-index: 1;
    margin-top: 7rem;

    @media screen and (max-width: 1024px) {
      margin-top: -8rem;
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 55px;
      line-height: 55px;
      margin-bottom: 1rem;
      text-align: left;

      @media screen and (max-width: 1024px) {
        font-size: 35px;
        line-height: 35px;
        margin: 0 15px;
      }
    }

    p {
      font-size: 23px;
      line-height: 30px;
      text-align: left;
      max-width: 450px;
      font-weight: 400;
      margin: 2rem 0 2rem 5rem;

      @media screen and (max-width: 1024px) {
        margin: 35px 15px 25px;
      }
    }

    small {
      font-size: 21px;
      line-height: 30px;
      font-weight: 700;
      text-align: center;
      margin: 0 auto;
      color: colors.$secondary;
      display: flex;
      max-width: 170px;
      cursor: pointer;

      &:after {
        content: '';
        display: block;
        width: 60px;
        height: 2px;
        background: colors.$secondary;
        margin: 1rem auto;
      }
    }
  }
}
</style>
