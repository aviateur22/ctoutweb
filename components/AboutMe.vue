<template>
  <article class="article">
    <header class="article__header">
      <!-- image -->
      <div data-aos="zoom-in-up" data-aos-duration="1000" class="article__image-container">
        <img class="article__image-square" src="~/assets/image/greenSquareBig.svg" alt="">
      </div>    
      <!-- titre -->
      <section class="article__section-title">
        <h2 class="article__title">
          qui suis je
        </h2>
      </section>
      <!-- text de présentation -->
      <section class="article__section-text">
        <p class="article__text">
          Issue d'une carrière de 15 ans dans le transport aérien, j'ai toujours eu plaisir à concevoir des applications webs ou des logiciels.          
          <br>
          En 2021, je décide de me réorienter dans le développement web en intégrant l'école O'Clock. 

          <br>
          Juin 2022 je passe mon examen d'état DWWM pour obtenir le titre de développeur web et web mobile.
        </p>  

        <p class="article__text">
          Basé à Auterive 31190 proche de Toulouse, je reste disponible pour vous rencontrer.
        </p>  
      </section>
    </header>
    <!-- image -->
    <main class="article__main">      
      <!-- couleur back pour changement de l'image -->
      <div class="article__background-image" />
      <div class="image--border">        
        <transition name="fade">
          <img v-show="imageVisible" class="article__image" :src="require(`~/assets/image/aboutMe/${activeImage.imageSource}`)" :alt="activeImage.alt">
        </transition>        
      </div>       
    </main>
  </article>
</template>

<script>
export default {
    data() {
        return {
            imageVisible: true,
            activeImage: {
                id: 1,
                imageSource: 'city.png',
                alt: 'undefined'              
            },
            images: [
                {
                    id: 1,
                    imageSource: 'city.png',
                    alt: 'image representant le plan de la ville d\'Auterive',
                },
                {
                    id: 2,
                    imageSource: 'moi.png',
                    alt: 'mon image de profil, sourian et propre',
                }
            ]
        };
    },
    created() {
        this.callImageUpdate();
    },
    methods: {
        /**
         * 
         */
        imageUpdate(){   
            /** */
            this.imageVisible = false;            
            
            setTimeout(()=>{
                const id = this.activeImage.id + 1 > this.images.length ? 1 : this.activeImage.id + 1; 
                this.activeImage = this.images[id - 1]; 
                setTimeout(()=>{
                    this.imageVisible = true;
                }, 200);                
            }, 700);          
        },

        callImageUpdate(){
            setInterval(()=>{
                this.imageUpdate();
            }, 5000);
        }
    }

};
</script>

<style scoped>
  .article{
    display: flex;
    flex-direction: column;
    background: white;
    position: relative;
    padding-bottom: 2em;

  }

  .article__header{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .article__image-container{
    position: absolute;
    left: 20px;
    top: -75px;
    width: 100px;
    height: auto;
  }

  .article__image-square {
    width: 100%;  
  }

  .article__section-title{
    width: 100%;
  }

  .article__section-text{    
    width: 80%;   
    padding: 2em 0em;
  }

  .article__text{
    padding: 1em 0em;
    line-height: 1.5;
    text-align: justify;
  }

  .article__main{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 250px;
    position: relative;   
  }

  .image--border{    
    position: absolute;
    height: 200px;
    width: 200px;
    background:  #F1F3F4; 
    overflow: hidden;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    object-position: top;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .article__background-image{
    position: absolute;
    height: 100%;
    background:  #F1F3F4; 
    overflow: hidden;
    left: 50%;
    transform: translateX(-50%);
  }

  .article__image{
    height: 100%;
    width: 200px;
    object-fit: cover;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .8s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  @media screen and (min-width: 768px){

    .article{
      flex-direction: row;
      justify-content: space-between;
    }

    .article__main{
      justify-content: flex-end;
      flex-shrink: 2;
    }

    .article__image-container{   
      left: 10px;
      top: -100px;
      width: 135px;
    }
    .article__background-image{
      clip-path: circle(80% at 100% 40%);
    }
    
  }

</style>