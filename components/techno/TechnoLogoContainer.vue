<template>
  <article class="article">
    <header class="article__header">
      <img class="article__image-top" src="~/assets/image/logoSquare.png" alt="2 carré bleus transparent">
      <img src="~/assets/image/points.svg" alt="nuage de point bleu">
      <h2 class="article__title">
        en résumé
      </h2>
      <img src="~/assets/image/points.svg" alt="nuage de point bleu">
    </header>
    <main class="article__main">
      <LogoTechno />
    </main>
  </article>
</template>

<script>
import LogoTechno from './LogoTechno.vue';
export default {
    name: 'TechnoContainer',
    components: {
        LogoTechno
    }

};
</script>

<style scoped>
  .article{
    position: relative;
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
    padding: 0em 1em;
  }
  .article__image-top{
    position: absolute;
    right: 20px;
    top: -55px;
    height: 30%;
  }

  .article__main{
    padding: 2em 0em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>