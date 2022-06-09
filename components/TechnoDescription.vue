<template>
  <article class="article">
    <header class="article__header">            
      <!-- titre -->
      <h3 class="article__header-title">
        {{ data.title }}
      </h3>    
      <!-- conteneur image + text  -->
      <div class="article__image-container">
        <!-- image -->
        <img class="article__image" :src="require(`~/assets/image/${data.image.imageSource}`)" :alt="data.image.alt"> 
        <div class="article__introduction-text-container">
          <p class="article__introduction-text">
            {{ data.presentation }}
          </p>             
        </div>        
      </div>                            
    </header>
    <!-- description + incone techno -->
    <main class="article__main">
      <!-- description -->
      <section class="article__presentation-container">
        <p v-for="(comment, id) in data.comments" :key="id" class="article__presentation-text">
          {{ comment }}
        </p>
      </section>
      <!-- icone techno conteneur-->
      <section class="article__icone">
        <TechnoLogoContainer :data="data.logo" />
      </section>
    </main>
  </article>
</template>

<script>
import TechnoLogoContainer from './imageContainer/TechnoLogoContainer.vue';
export default {
    components: {
        TechnoLogoContainer
    },
    // eslint-disable-next-line vue/require-prop-types
    props: ['data']
};
</script>

<style scoped>

  .article{
    background: #EDECFF;
  }

  .article__header{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0em;
  } 

 .article__header-title{
    text-transform: uppercase;
    color:#251AC7;    
    width: 100%;
    text-align: center;
    margin: 0.5em 0.5em;
  }

  .article__image-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;    
  }

  .article__image{
    max-height: 100%;
    width: auto;
    border-radius: 100%;
    padding: 1em;
  }

  .article__title-comment{
    width: 100%;
    color: #404040;
    margin: 0em;
    padding-bottom: 1em;
    text-align: center;
  }

  .article__introduction-text-container{
    display: flex;
    justify-content: center;
  }

  .article__introduction-text{
    text-align: justify;
    max-width: 90%;
    padding: 1em 0em;
    line-height: 1.5;
  }  

  .article__main{
    display: flex;
    width: 100%;
    flex-direction: column;    
  }

  .article__presentation-container{
    display: flex;
    flex-direction: column;    
    width: 100%;
    padding: 3em 0em;
    align-items: center;
  }

  .article__presentation-text{
    font-weight:300;
    max-width: 90%;
    text-align: justify;
    padding: 1em 0em;
    line-height: 1.3;
  }  

  .article__icone{
    background: white;
  }

   @media  screen and (min-width: 768px) {

    .article__introduction-text{
      max-width: 70%;      
    } 

    .article__presentation-text{
      max-width: 50%;
    }

    .article__presentation-text{
      display: flex;
      align-items: center;
      flex-grow: 4;
    }

    .article__image-container{
      flex-direction: row;  
      justify-content: flex-start;    
    }
  }
</style>