<template>
  <div class="donate__wrapper">
    <div class="donate__title">
      <h1 class="poppins-semibold">Ajude o Momade</h1>
      <p class="source-sans-pro">Com a sua doação, podemos continuar a <br> ajudar o Momade e sua vila a ter uma vida mais digna.</p>
    </div>

    <div class="donate__information">
      <small class="source-sans-pro">Doações</small>

      <ul>
        <li class="source-sans-pro"><strong>Paypal:</strong> assuatemomade05@gmail.com</li>
        <li class="source-sans-pro"><strong>Wester union:</strong><br>Momade Assuate Amade Muze <br>

          <strong>Carteira móvel:</strong>    +258846687817 <br>

Moçambique </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  
</script>

<style lang="scss" scoped>
@use '@/assets/scss/colors.scss' as colors;

  .donate {

    &__wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 86vh;
      width: 100%;
      background: url('@/assets/images/donate.png') no-repeat;
      background-size: contain;

      @media screen and (max-width: 1024px) {
        flex-direction: column;
        height: 100vh;
      }
    }

    &__title {
      font-size: 25px;
      margin-bottom: 1rem;
      text-align: left;
      color: colors.$secondary;

      @media screen and (max-width: 1024px) {
        padding: 1rem;
        
      }

      p {
        font-size: 23px;
        text-align: left;
        color: colors.$white; 
      }
    }


    &__information {
      display: flex;
      justify-content: center;
      flex-direction: column;
      small {
        font-size: 21px;
        line-height: 30px;
        font-weight: 700;
        text-align: center;
        margin: 0 auto;
        color: colors.$secondary;
        display: flex;
        cursor: pointer;

        &:after {
          content: '';
          display: block;
          width: 60px;
          height: 2px;
          background: colors.$secondary;
          margin: 1rem 1rem;
        }
      }

      ul {
        list-style: none;
        font-size: 23px;
        line-height: 30px;
        text-align: left;
        color: colors.$white;
        font-weight: 400;
        margin: 50px 0;
        
        li {
          margin-bottom: 1rem;
          font-size: 23px;

          strong {
            color: colors.$secondary;
          }
        }
      }
    }
  }
</style>