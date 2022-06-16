<template>
  <div class="cookie__footer">
    <!-- button masquer cookier banner -->
    <section v-if="displayCloseButton" class="cookie__footer-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">   
        <path fill="#00D5A8" class="cookie__button" d="M21.7 2.8C18.9 0 11.7-.3 5.1 5.4c-6.1 5.3-6 11.7-1.3 15.2 4.4 3.3 10.5 3.8 15.2-1.3 5.7-6.1 5.5-13.8 2.7-16.5z" @click="toggleButton" />
        <path class="cookie__button" fill="#fff" d="M15.8 9.4l-.8-.8-3 3.1-3.1-3.1-.7.8 3.1 3.1-3.1 3.1.8.8 3.1-3.1 3.1 3.1.8-.8-3.1-3.1 2.9-3.1z" @click="toggleButton" />          
      </svg>
    </section>
    <!-- button afficher cookier banner -->
    <section v-else class="cookie__footer-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path fill="#00D5A8" class="cookie__button" d="M21.7 2.8C18.9 0 11.7-.3 5.1 5.4c-6.1 5.3-6 11.7-1.3 15.2 4.4 3.3 10.5 3.8 15.2-1.3 5.7-6.1 5.5-13.8 2.7-16.5z" @click="toggleButton" />        
        <svg class="cookie__button" viewBox="-15 -15 110 110" @click="toggleButton">
          <path fill="#fff" d="M12,0v2h8.6L8.3,14.3l1.4,1.4L22,3.4v8.5h2V0H12z M18,22H2V6h10l2-2H0v20h20V10l-2,2V22z" />
        </svg>
      </svg>
    </section>             
  </div>
</template>

<script>
export default {
    props: ['displayCloseButton'],
    methods: {
        /**
        * Modification de l'affichage du button 
        */
        toggleButton(){
            this.$emit('toggleButton');
        }
    }
};
</script>

<style scoped>
.cookie__footer{
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: block;  
  padding: 0.7em;
  width: 150px;
  z-index: 5;
  }

  .cookie__footer-button{
    height: 70px;
  }

  .cookie__button{
    cursor: pointer;
  }

</style>