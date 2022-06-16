<template>
  <div class="error__container">
    <Navigation />
    <article class="error__article">
      <header class="error__header">
        <h2 v-if="error.statusCode === 404" class="error__text">
          Cette page n'existe pas
        </h2>
        <h2 v-else class="error__text">
          Oups il y a eut une erreur
        </h2>
      </header>
      <main class="error__main">
        <div class="box box--one" />
        <div class="box box--two" />
        <div class="box box--three" />
        <div class="box box--four" />
      </main>
    </article>    
  </div>
</template>

<script>
export default {    
    props: ['error'],    
};
</script>

<style scoped>
*{
    /* font-family: 'DM Sans', sans-serif; */
    font-family: 'Raleway', sans-serif;
  }
  .error__container{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc( 100vh - var(--navbar_height)); 
    background: #00D5A8;
    width: 100%;
  } 

  .error__article{
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 50%;
    background: white;
    align-items: center;
    justify-content: center;  
    border-radius: 20px;  
  }

  .error__header{
    height: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .error__text{
    padding: 0.5em;
    text-align: center;
    color: #251AC7;
    font-weight: 800;
  }

  .error__main{
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes bounce {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(
        var(--bounce-offset)
      );
    }
  }

  .box {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    animation:
      bounce alternate infinite
      cubic-bezier(.2, .65, .6, 1);
      margin: 0.5em
  }
  .box.box--one {
    width: 4em;
    height: 4em;
    background: #251AC7;
    --bounce-offset: -20px;
    animation-duration: 200ms;
  }
  .box.box--two {
    width: 3em;
    height: 3em;
    background: #00D5A8;
    --bounce-offset: -30px;
    animation-duration: 300ms;
  }
  .box.box--three {
     width: 2em;
    height: 2em;
    background: #251AC7;
    --bounce-offset: -40px;
    animation-duration: 400ms;
  }

  .box.box--four {
     width: 1em;
    height: 1em;
    background: #00D5A8;
    --bounce-offset: -50px;
    animation-duration: 500ms;
  }

   @media screen and (min-width: 768px) {
    .error__article{
    width: 50%;
    }

  }

</style>