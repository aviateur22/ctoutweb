<template>
  <article class="article">
    <!-- text intro logo -->
    <header class="article__header">
      <!-- image carré bleu -->
      <div :class="{right: data.squarePositionRight, left: !data.squarePositionRight}" class="article__image-square-container">
        <img class="article__image-square" src="~/assets/image/logoSquare.png" alt="2 carré bleus transparent">
      </div>      
      <!-- image pointillés -->
      <img class="artcile__image-point" src="~/assets/image/points.svg" alt="nuage de point bleu">
      <h2 class="article__title">
        en résumé
      </h2>
      <!-- image pointillés -->
      <img src="~/assets/image/points.svg" alt="nuage de point bleu">
    </header>
    <main class="article__main">
      <LogoTechno v-for="logo in data.logos" :key="logo.id" :data="logo" />
    </main>
  </article>
</template>

<script>
import LogoTechno from './LogoTechno.vue';
export default {
    name: 'TechnoContainer',
    components: {
        LogoTechno
    },
    // eslint-disable-next-line vue/require-prop-types
    props: ['data']

};
</script>

<style scoped>
  .article{
    position: relative;
    background: white !important;    
    padding-bottom: 3em;
  }

  .article__header{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4em;
  }

  .article__title{
    text-transform: uppercase;
    color:#251AC7;
    padding: 1em 1em;
  }

  .article__image-square-container{
    position: absolute;  
    display: flex;
    width: 100px;
    top: -35px;
  }

  .article__image-square{     
    width: 100%;    
  }

  .right{
    right: 20px;    
  }

  .left{
    left: 20px;
  }

  .article__main{
    padding: 2em 0em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 768px) {      
    .article__image-square-container{      
      width: 180px;
      top: -70px
    }
  }
  @media screen and (min-width: 1024px) {   
    .article__header{
      padding-top: 1em;
      flex-direction: row;

    } 
  }
</style>