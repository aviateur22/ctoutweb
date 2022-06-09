<template>
  <div class="home__container">
    <AboutMe />
    <TechnoContainer />
    <Hosting />
  </div>  
</template>

<script>
export default {
    name: 'HomePage', 
    layout: 'addBanner'
};
</script>

<style scoped>
  .home__container{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;    
    min-height: calc( 100vh - var(--navbar_height));   
    background: white;
    width: 100%;
    
  }
</style>