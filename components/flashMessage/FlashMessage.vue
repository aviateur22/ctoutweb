<template>
  <!--liste de messages -->
  <section class="flash__section">
    <div v-for="(flashMessage, i) in flashMessages" :key="i" :class="{background__red: flashMessage.error}" class="flash__Container">
      <FlashText :text="flashMessage.message" :index="i" @removeMessage="removeMessage" />
    </div>  
  </section>
</template>

<script>
export default {
    data(){
        return { 
            
        };
    },    
    computed: {
        /**
         * récupération du message
         */
        flashMessages(){    
            return this.$store.getters['flashMessage/getFlashMessage'];
        }
    },
    methods: {
        /**
        * Suppression d'un message de la liste
        */
        removeMessage(index){            
            return this.$store.commit('flashMessage/removeFlashMessage', index);
        }
      
    },
};
</script>

<style scoped>
  .flash__section{    
    display: flex;
    flex-direction: column;
    width: 100%;    
    align-items: center;
    justify-content: center;
    z-index: 2;
    position: fixed;
    top:0px;
  }

  .flash__Container{
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(122, 199, 46,0.7);
    border:0.5px solid green;
    border-radius: 10px;
    padding: 0.5em;
    margin: 0.5em;
    width: 100%;
  }

  .list-move,
  .list-enter-active,
  .list-leave-active {
      transition: all 1s;        
  }
  .list-enter,
  .list-leave-to /* .list-leave-active below version 2.1.8 */ {
      opacity: 0;
      transform: translateX(30px);
  }

  .list-leave-active {
      position: absolute;

  }

  @media  screen and (min-width: 768px) {
    .flash__Container{
      width: 768px;
    }    
  }
</style>