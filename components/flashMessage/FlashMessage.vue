<template>
  <!--liste de messages -->
  <section class="flash__section">
    <div v-for="(flashMessage) in flashMessages" :key="flashMessage.id" :class="{background__red: flashMessage.error}" class="flash__container">
      <FlashText :data="flashMessage" @removeMessage="removeMessage" />
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

  .flash__container{
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 213, 168, 0.7);
    border:0.5px solid green;
    border-radius: 10px;
    padding: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    width: 90%;
  }

  .background__red{
    background: rgba(255, 25, 0, 0.7) !important;
    border:0.5px solid red !important;
  }

  @media  screen and (min-width: 768px) {
    .flash__container{
      width: 768px;
    }    
  }
</style>