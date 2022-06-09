<template>
  <article class="article">
    <header class="article__header">
      <h2 class="article__title">
        Prendre un rendez-vous
      </h2>
    </header>
    <main class="article__main">
      <p class="article__text big--letter">
        Bientôt,
      </p>
      <p class="article__text animation--right">
        vous aurez la possibilité de prendre rendez-vous
      </p>
    </main>
  </article>
</template>

<script>
export default {

};
</script>

<style scoped>

  .article{
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: calc( 100vh - var(--navbar_height));
    align-items: center;
  }

  .article__header{
    width: 100%;
    overflow: hidden;
  }

  .article__title{
    width: 100%;  
  }

  .article__main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    height: 100%;
    padding: 5em;
    max-width: 60%;
  }

  .article__text{
    font-weight: 800;
    font-size: 2em;
    width: 100%;
    text-align: center;
    color: #251AC7;
  }

  .big--letter{
    font-size: 3em;
    padding-bottom: 2em;
    color:#00D5A8;
    animation: slidingFromLeft 2s ease-in-out;
  }

  .animation--right{    
    animation: slidingFromRight 2s  ease-in-out;
  }

  @keyframes slidingFromLeft{
    0%{
      transform: translateX(-80%);
      opacity:0;
    }

    100% {
      transform: translateX(0%);
      opacity:1;
    }
  }

  @keyframes slidingFromRight{
    0%{
      transform: translateX(80%);
      opacity:0;
    }

    100% {
      transform: translateX(0%);
      opacity:1;
    }
}
</style>