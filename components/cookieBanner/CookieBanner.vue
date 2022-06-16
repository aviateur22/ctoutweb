<template>
  <div class="cookie__main-container">  
    <transition name="slide-fade">
      <article v-if="displayCloseButton" class="cookie">
        <!-- tritre + image de cookie -->
        <header class="cookie__header">
          <img class="cookie__image" src="~/assets/image/cookieBanner.png" alt="dessin avec un fond vert et 2 cookies">
          <p>
            Nos cookies
          </p>
        </header>
        <!-- text -->
        <main class="cookie__main">
          <p>Afin de faire fonctionner ce site, nous utilisons des cookies.</p>
        </main>      
      </article>
    </transition>  
    <!-- bouton d'affichage -->    
    <CookieButton :displayCloseButton ="displayCloseButton" @toggleButton="toggleButton" />
  </div>  
</template>

<script>
export default {
    data(){
        return {            
            //affichage button fermeture
            displayCloseButton: true,
        };
    },
    methods: {
        /**Affichage banniere de cookie + bouton caché */
        toggleButton(){
            this.displayCloseButton = !this.displayCloseButton;
        }
    }
};
</script>

<style scoped>
  .cookie__main-container{            
    display: flex;
    flex-direction: column;

  } 
  .cookie{  
    position: fixed;
    bottom: 7%;
    left: 1%;      
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    width: 310px;
    height: 200px;
    background: white;
    border-radius: 10px;  
    overflow: hidden;  
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    z-index: 5;
  }

  .cookie__header{
    padding: 1em;
    position: relative;
    font-weight: 800;
  }

  .cookie__image{
    position: absolute;
    right: 0px;
    top: 0px;
  }

  .cookie__main{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 1em;
    height: 50%;
  }

  .slide-fade-enter-active {            
    animation: slide-fade-in var(--transition_time_long);
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {            
    opacity: 0; 
    transform: translateX(-400px);
  }

  @keyframes slide-fade-in {
    0% {
        transform: translateX(-400px);
    }
    100% {
        transform: translateX(0px);
    }
  }

</style>