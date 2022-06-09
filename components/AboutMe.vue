<template>
  <article class="article">
    <header class="article__header">
      <!-- titre -->
      <section class="article__section-title">
        <h2 class="article__title">
          qui suis je
        </h2>
      </section>
      <!-- text de présentation -->
      <section class="article__section-text">
        p.article
      </section>
    </header>
    <!-- image -->
    <main class="article__main">     
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
    background: #EDECFF;

  }

  .article__header{
    width: 100%;
    display: flex;
    flex-direction: column;
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
    clip-path: circle(100% at 10% 100%);
    position: absolute;
    height: 100%;
    background:  #F1F3F4; 
  }

  .article__image{
    height: 100%;
    width: 200px;
    object-fit: fill  ;
    object-position:  left top;
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
    }

    .image--border{
      clip-path: circle(80% at 100% 40%);
      right: 0px !important;
    }

    .article__image{
      height: 100%;
      width: 200px;
      object-fit: cover;
      object-position: left top;
      margin-left: 20px;
    }
    
  }

</style>