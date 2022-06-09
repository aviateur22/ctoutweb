<template>
  <article class="article">   
    <header class="article__header">
      <!-- image -->
      <div class="article__image-container">
        <img class="article__image" src="~/assets/image/greenSquareBig.svg" alt="">
      </div>    
      <!-- titre section -->
      <h2 class="article__title">
        hébergement des applications webs
      </h2>
    </header>
    <main class="article__main">     
      <section class="article__section-presentation">
        <!-- text de présentation déploiement -->
        <div class="article__text-container">
          <p class="article__text">
            Une fois le développement terminé et les tests passés avec succés, il est temps de mettre en ligne l'application web.
            Cette action de déploiement passe par une sélection d'un hebergement.
          </p>
          <p class="article__text">
            Je vous présente ici mes choix pour déployer les applications webs.
          </p>
        </div>        
        <div class="article__image-point-container">
          <!-- image pointillés -->
          <img class="artcile__image-point" src="~/assets/image/points.svg" alt="nuage de point bleu">
          <!-- image pointillés -->
          <img class="artcile__image-point" src="~/assets/image/points.svg" alt="nuage de point bleu">
        </div>        
      </section>
      <section class="article__section-logo">
        <Host v-for="host in hosting.hosts" :key="host.id" :data="host" />
      </section>
    </main>
  </article> 
</template>

<script>
import Host from './imageContainer/Host.vue';
export default {
    components: {
        Host
    },
    data() {
        return {
            hosting: {
                hosts: [
                    {
                        id: 1,
                        imageSource: 'hosting/heroku.jpg',
                        alt: 'image du logo de heroku',
                        text: 'heroku',
                        link: 'https://www.heroku.com/platform'
                    },
                    {
                        id: 2,
                        imageSource: 'hosting/aws.jpg',
                        alt: 'image du logo de aws',
                        text: 'aws',
                        link: 'https://aws.amazon.com/fr/'
                    },
                    {
                        id: 3,
                        imageSource: 'hosting/netlify.png',
                        alt: 'image du logo de netlify',
                        text: 'netlify',
                        link: 'https://www.netlify.com/'
                    },
                    {
                        id: 4,
                        imageSource: 'hosting/vercel.png',
                        alt: 'image du logo de vercel',
                        text: 'vercel',
                        link: 'https://vercel.com/'
                    }
                ]
            }

        };
    }
};
</script>
<style scoped>
  
  .article {
    position: relative;
    background-color: #EDECFF;
    padding-bottom: 5em;
  }

  .article__image-container{
    position: absolute;
    right: 30px;
    top: -70px;
    width: 100px;
    height: auto;    

  }

  .article__image {
    width: 100%;  
  }

  .article__main{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .article__section-presentation{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .article__text-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3em 0em;
    max-width: 90%;    
  }

  .article__text{
    padding: 1em 0em;
    padding-left: 1em;
    width: 100%;
    text-align: justify;
    font-weight: 500;
    line-height: 1.5;
  }
  
  .article__image-point-container{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-bottom: 3em;
  }

  .artcile__image-point{    
    height: 100%;
  }

  .article__section-logo{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 768px){

    .article__image-container{
      position: absolute;
      right: 30px;
      top: -80px;
      width: 150px;
      height: auto;    
    }
    .article__text-container{     
      max-width: 60%;    
    }    
  }

</style>