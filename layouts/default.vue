<template>
  <div>
    <Navigation />
    <div class="main__container">
      <div class="container">
        <nuxt />
      </div>
    </div>    
  </div>
</template>

<style scoped>  
  *{
    /* font-family: 'DM Sans', sans-serif; */
    font-family: 'Raleway', sans-serif;
  }
  .main__container{
    display: flex;
    justify-content: center;
    min-height: calc( 100vh - var(--navbar_height));   
    margin-top: var(--navbar_height);
  } 
  
  .container{
    display: flex;
    justify-content: center;
    width: 100%;
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