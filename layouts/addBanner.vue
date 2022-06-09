<template>
  <div class="layout__banner">
    <Navigation />
    <Banner />
    <div class="main__container">
      <div class="container">
        <nuxt />
      </div>
    </div>    
    <FooterContent />
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>  
  *{
    /* font-family: 'DM Sans', sans-serif; */
    font-family: 'Raleway', sans-serif;  
  }

  .layout__banner{
    animation: identifier 2s ease-in-out;
  }

  .main__container{
    display: flex;
    justify-content: center;
    min-height: calc( 100vh - var(--navbar_height)); 
    background: #F7F7F5;
  } 
  
  .container{
    display: flex;
    justify-content: center;
    width: 100%;
  }  

  @keyframes identifier {
    from{
      opacity: 0;
    }

    to{
      opacity: 1;
    }    
  }

  @media  screen and (min-width: 768px) {
    .container{
      width: 768px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }    
  }
   @media  screen and (min-width: 1024px) {
    .container{
      width: 1024px
    }    
  }

</style>