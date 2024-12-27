<template>
  <div class="about__wrapper">
    <!-- BANNER -->
    <img src="@/assets/images/about.png" alt="Banner" class="about__banner" />

    <!-- ABOUT -->
    <div class="about__content">
      <div>
        <h1 class="about__title poppins-semibold">Sobre Momade</h1>
      </div>
      
      <div class="flex">
       <div>
        <iframe src="//instagram.com/p/DEAZg99okjp/embed/" width="612" height="710" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
       </div>
        <div>
          <p class="about__text source-sans-pro">
        Momade Assuate é um jovem inspirador que sonha em ser professor e encontrou uma maneira de ensinar, mesmo fora da sala de aula. Com o apoio de seu irmão deficiente, que já produzia conteúdo na internet, Momade começou a criar vídeos que revelam a dura realidade de sua comunidade, onde a agricultura e a pesca, uma vez fontes de emprego para muitos, enfrentam sérias dificuldades.
        </p>

        <p class="about__text source-sans-pro">
          Através da internet, seus vídeos começaram a alcançar pessoas que se sensibilizaram com sua história. Um de seus vídeos viralizou na página "Razões para Acreditar", e desde então, Momade conquistou cerca de 50 mil seguidores. Ele nos ensina que o bem pode ser feito independentemente da posição social, basta ter garra e determinação.
        </p>

        <p class="about__text source-sans-pro">
          Agora, pedimos sua ajuda para que Momade possa continuar sua missão de educar e inspirar. Contribua para a sua vaquinha social e faça parte dessa transformação! Cada doação fará a diferença na vida de muitos. Juntos, podemos construir um futuro melhor!
        </p>

        <div class="button">
          <ButtonsComponent
          text="Instagram"
          background="#C32F34"
          color="#ffffff"
          @handleButtonClick="navigate"
        />
        </div>
        </div>

      </div>
     


    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    ButtonsComponent,
  } from '@/components';

  const navigate = () => {
    window.open('https://www.instagram.com/momade01/', '_blank')
  };
</script>

<style lang="scss" scoped>
@use '@/assets/scss/colors.scss' as colors;

  .about {
    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      width: 100%;
      flex-direction: column;

      @media screen and (max-width: 1024px) {
        img {
          width: 100%;
        }
      }
      
    }

    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      padding: 0 20px;
      margin: 50px 0;
      gap: 30px;

      @media screen and (max-width: 1024px) {
        padding: 0;
      }

      h1 {
          &:after {
          content: '';
          display: block;
          width: 60px;
          height: 2px;
          background: colors.$secondary;
          margin: 1rem auto;
        }
      }

      .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        width: 100%;

        div {
          @media screen and (max-width: 1024px) {
            width: 100%;
            
          }
        }

        @media screen and (max-width: 1024px) {
          flex-direction: column;

          p {
            margin: 0 15px;
          }

          iframe {
            width: 100%;
          }
        }

        div {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          gap: 20px;
          height: 720px;

          &.button{
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            margin-bottom: 20px;

            @media screen and (max-width: 1024px) {
              justify-content: center;
              align-items: center;
              
            }
            div {
              max-height: 30px;
            max-width: 200px;
            }
          }
        }
      }
    }

    &__title {
      color: colors.$secondary;
      text-align: center;
    }

    &__text {
      color: colors.$white;
      font-size: 1.4rem;
      text-align: left;
    }
  }
</style>