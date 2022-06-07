<template>
  <article class="article">
    <header class="article__header">
      <!-- containeur titre + image -->
      <div class="article__title-container">
        <!-- titre -->
        <h2 class="article__header-title">
          front-end
        </h2>
        <!-- commentaire sur la section -->
        <p class="article__title-comment">
          Tout savoir sur le FRONT-END
        </p>        
      </div>  
      <!-- image -->
      <img class="article__image" src="~/assets/image/front.png" alt="dessin de plusieurs personnages portant des logos">    
      <p class="article__introduction-text">
        Le FRONT-END est la partie visible sur votre écran.
        C’est l’interface entre vous et l’application. Cette partie doit être réactif et avoir une bonne érgonomie
      </p> 
    </header>
    <main class="article__main">
      <section class="article__presentation-conainer">
        <p class="article__presentation-text">
          De nos jours, il existe de nombreux outils permettant de rendre une interface réactive.
        </p>

        <p class="article__presentation-text">
          J’ai séléctionné VUEJS. C’est un framework utilisé par des millions de développeurs.
        </p>

        <p class="article__presentation-text">
          Afin d’améliorer le SEO des applications, j’ai rajouté NUXTJS.
          C’est un outils indispensable pour le améliorer le référencement et l’expérience développeur.
        </p>  
      </section>
      <section class="article__icone">
        <TechnoLogoContainer />
      </section>
    </main>
  </article>
</template>

<script>
export default {

};
</script>

<style scoped>

  .article{   
  }

  .article__header{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0em;
    background: #DEDDF5;
  }

  .article__title-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

 .article__header-title{
    text-transform: uppercase;
    color:#251AC7;    
    width: 100%;
    text-align: center;
    margin: 0.5em 0.5em;
  }

  .article__title-comment{
    width: 100%;
    color: #404040;
    margin: 0em;
    padding-bottom: 1em;
    text-align: center;
  }

   .article__image{
    max-height: 80%;
    padding: 1em;
  }
  .article__introduction-text{
    padding: 1em;
    text-align: justify;
  }  

  .article__main{
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .article__presentation-conainer{
    display: flex;
    flex-direction: column;
    background: #EDECFF;
    width: 100%;
    padding: 3em 0em;
  }

  .article__presentation-text{
    font-weight:300;
    padding: 0em 1em;
    text-align: justify;
  }  
</style>