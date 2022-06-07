<template>
  <div class="techno">
    <section class="techno__title-section">      
      <div class="techno__title-main">
        <h2 class="techno__title-text">
          mes technologies de développement
        </h2>     
        <img class="techno__image" src="~/assets/image/techno.png" alt="dessin d'une femme qui est devant un tableau">
      </div>      
      <p class="techno__comment">
        Découvrez mes choix de technologie de développement pour le FRONT-END et BACK-END
      </p>
    </section>
    <section class="techno__section">
      <section class="techno__front">
        <FrontEnd />
      </section>
      <section class="techno__back">
        <BackEnd />
      </section>
    </section>        
  </div>
</template>
<script>
export default {

};
</script>

<style scoped>
  .techno{
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .techno__title-section{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .techno__title-main{
    display: flex;
    flex-direction: column;   
    align-items: center; 
    width: 100%;
  }

  .techno__title-text{
    color: #251AC7;
    text-transform: uppercase;
    width: 100%;
    padding-left: 1em;
  }

  .techno__image{
    max-height: 70%;
  }

  .techno__comment{
    padding:0em 1em;
    text-align: center;
  }
</style>