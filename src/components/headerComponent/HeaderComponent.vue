<template>
  <div class="headerComponent__wrapper">
    <div class="headerComponent__logo">
      <img src="@/assets/images/brand.png" alt="Logo" @click="() => router.push('/')" />
    </div>

    <div class="headerComponent__menu" :class="{ 'is-active': isMenuActive }">
      <ul>
        <li :class="['source-sans-pro', { 'active' : item.active }]" v-for="(item, key) in menu" :key="key" @click="navigate(item)">
         <span>{{ item.name }}</span>
        </li>
        <li v-if="isMobile">
          <ButtonsComponent v-for="(button, key) in buttons" :key="key" v-bind="button" @handleButtonClick="navigate(button)" />
        </li>
      </ul>
    </div>
    
    <div class="headerComponent__buttons">
      <ButtonsComponent v-for="(button, key) in buttons" :key="key" v-bind="button" @handleButtonClick="navigate(button)" />
    </div>

    <button class="hamburger" :class="{ 'is-active': isMenuActive }" @click="toggleMenu">
      <span class="hamburger__line"></span>
      <span class="hamburger__line"></span>
      <span class="hamburger__line"></span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, type Ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { ButtonsComponent } from '@/components';

import type { ButtonsProps } from '@/components/base/buttonsComponent/ButtonsComponent.vue';

interface MenuInterface {
  id: number;
  name: string;
  link?: string;
  active: boolean;
}

const route = useRoute();
const router = useRouter();

const isMenuActive: Ref<boolean> = ref(false);
const menu: Ref<MenuInterface[]> = ref([
  {
    id: 1,
    name: 'Início',
    active: true,
    link: '/'
  },
  {
    id: 2,
    name: 'Conheça',
    active: false,
    link: '/sobre'
  },
  {
    id: 3,
    name: 'Como Doar',
    active: false,
    link: '/doe'
  },
  {
    id: 4,
    name: 'Contato',
    active: false,
    link: '/contato'
  }
]);

const buttons: Ref<ButtonsProps[]> = ref([
  {
    text: 'Doar',
    background: '#C32F34',
    color: '#ffffff',
    link: '/doe'
  },
  {
    text: 'Vaquinha',
    background: '#F2902F',
    color: '#522222',
    link: '/vaquinha'
  }
]);

const navigate = (button: ButtonsProps | MenuInterface) => {
  const isVaquinha = button.link === '/vaquinha';
  if (isVaquinha) {
    window.open('https://www.vakinha.com.br/vaquinha/ajude-mocambique', '_blank');
    return
  };

  router.push(button.link);
};

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
};

const isMobile = computed(() => window.innerWidth <= 1024);

watch(() => route.path, (value: string) => {
  menu.value = menu.value.map((item) => {
    item.active = item.link === value;
    return item;
  });
}, { immediate: true });
</script>

<style lang="scss" scoped>
@use '@/assets/scss/colors.scss' as colors;

.headerComponent {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 1rem 1rem 2rem 1rem;
    height: 86px;
    background: colors.$primary;
    color: colors.$white;

    @media screen and (max-width: 1024px) {
      height: 38px;
      padding: 0.5rem 1rem 1rem 1rem;
      align-items: center;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      position: relative;
      top:2px;

      @media screen and (max-width: 1024px) {
        width: 200px;
        top: 2px;
      }
    }
  }

  &__menu {
    margin-bottom: 6px;
    ul {
      display: flex;
      list-style: none;
      gap: 2.5rem;
      li {
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        border-radius: 60px;
        cursor: pointer;
        background-color: transparent;

        &.active {
          background-color: colors.$accent-dark;
        }

        span {
          color: colors.$white;
          font-size: 18px;
          line-height: 20px;
          text-decoration: none;
          font-weight: 400;
        }

        &:hover {
          background-color: colors.$accent-dark;
          transition: all .5s ease;
        }
      }
    }
  }

  &__buttons {
    display: flex;
    gap: 1rem;

    @media(max-width: 1024px) {
      display: none;
    }
  }
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: transform 0.3s ease;

  &__line {
    width: 30px;
    height: 3px;
    background: colors.$white;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  &.is-active {
    &__line:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    &__line:nth-child(2) {
      opacity: 0;
    }

    &__line:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  }
}

@media (max-width: 1024px) {
  .headerComponent__menu {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: colors.$primary;
    flex-direction: column;
    align-items: center;
    z-index: 99;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    height: 0;

    &.is-active {
      display: flex;
      opacity: 1;
      height: 100%;
    }

    ul {
      flex-direction: column;
      width: 100%;
      gap: 0;
      li {
        margin: 0;
        padding: 0;
        border-bottom: 1px solid colors.$accent-dark;
        border-radius: 0;
        width: 100%;
        span {
          font-size: 1.3rem;
          padding: 1rem;
        }

        &:last-child {
          display: flex;
          justify-content: center;
          height: 120px;
          gap: 2rem;
          border-bottom: none;
          position: fixed;
          bottom: 0;
        }
      }
    }
  }

  .hamburger {
    display: flex;
  }
}
</style>