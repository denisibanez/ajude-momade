<template>
  <div class="highlightComponet__wrapper">
    <ul>
      <li v-for="(item, key) in highlights" :key="key">
        <div>
          <img :src="returnIcon(item.icon)" alt="">
        </div>
        <div>
          <span class="source-sans-pro">{{ item.label }}</span>
          <span>{{ item.value }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';

import DollarIcon from '@/assets/images/dollar.svg';
import DonateIcon from '@/assets/images/donate.svg';

interface HighlightInterface {
  id: number;
  label: string;
  value: string;
  icon: string;
}

const highlights: Ref<HighlightInterface[]> = ref([
  {
    id: 1,
    label: 'Doações',
    value: '20',
    icon: 'donate'
  },
  {
    id: 2,
    label: 'Vaquinha virtual',
    value: '0k',
    icon: 'dollar'
  },
  {
    id: 3,
    label: 'Total Arrecadado',
    value: '2k',
    icon: 'dollar'
  },
]);

const returnIcon = (icon: string) => {
  switch (icon) {
    case 'dollar':
      return DollarIcon;
    case 'donate':
      return DonateIcon;
    default:
      break;
  }
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/colors.scss' as colors;

  .highlightComponet {
    &__wrapper {
      position: absolute;
      z-index: 9;
      bottom: 30px;
      margin: 0 auto;
      width: 1453px;

      @media screen and (max-width: 1024px) {
        width: 100%;
        position: relative;
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 120px;
        background: #feece4;
        left: 0;
        bottom: -30px;
        z-index: -1;
      }

      ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        justify-content: center;
        
        @media(max-width: 1024px) {
          flex-direction: column;
        }

        li {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: colors.$accent-dark;
          width: 413px;
          height: 180px;
          
          &:first-child {
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            background: colors.$accent-light;
          }

          &:nth-child(2) {
            position: relative;
            bottom: 16px;

            @media screen and (max-width: 1024px) {
              bottom: 0;
            }

            &:before {
              content: '';
              position: absolute;
              width: 100%;
              height: 16px;
              background: colors.$accent-light;
              left: 0;
              bottom:-16px;
              z-index: 10;

              @media screen and (max-width: 1024px) {
                display: none;
                
              }
            }
          }

          &:last-child {
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            background: colors.$accent-light;
          }

          div {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;

            img {
              margin-left: 2rem;
            }

            &:last-child {
              margin-top: 1.5rem;
            }
          }

          span {
            font-size: 1.3rem;
            font-weight: 600;
            margin-left: 0.5rem;
            color: colors.$secondary;

            &:last-child {
              font-size: 4rem;
              font-weight: 700;
              color: colors.$white;
            }
          }


          @media(max-width: 1024px) {
            margin: 15px auto;
            height: 200px;
            max-width: 90%;
            border-radius: 10px;
          }
        }
      }
    }
  }
</style>
