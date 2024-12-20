<template>
  <div class="headerComponent__wrapper">
    <div class="headerCompoment__logo">
      <img src="@/assets/images/brand.png" alt="Logo" />
    </div>

    <div class="headerComponent__menu">
      <ul>
        <li class="source-sans-pro">
          <router-link to="/">Início</router-link>
        </li>
        <li class="source-sans-pro">
          <router-link to="/sobre">Conheça</router-link>
        </li>
        <li class="source-sans-pro">
          <router-link to="/doe">Como Doar</router-link>
        </li>
        <li class="source-sans-pro">
          <router-link to="/contato">Contato</router-link>
        </li>
      </ul>
    </div>
    
    <div class="headerComponent__buttons">
      <button>Entrar</button>
      <button>Cadastre-se</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@use '@/assets/scss/colors.scss' as colors;

.headerComponent {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    height: 86px;
    background: colors.$primary;
    color: colors.$white;
  }

  &__menu {
    ul {
      display: flex;
      list-style: none;
      gap: 4rem;
      li {
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        cursor: pointer;

        a {
          color: colors.$white;
          font-size: 18px;
          line-height: 20px;
          text-decoration: none;
        }

        &:hover {
          background-color: colors.$secondary;
          transition:all 0.3s;
        }
      }
    }
  }

  &__buttons {
    display: flex;
    gap: 1rem;
  }
}
</style>