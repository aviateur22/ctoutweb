<template>
  <div>
    <div class="banner">
      <div class="banner__container">
        <h2 class="banner__text">
          <span class="banner--green"> Bienvenue sur </span>
          <span class="banner--upper"> ctoutweb </span> 
        </h2>
        <img class="banner__image right" src="~/assets/image/blueSquare.svg" alt="2 carrés bleus superposés">
        <img class="banner__image left" src="~/assets/image/greenSquare.svg" alt="2 carrés verts superposés">       
      </div>
      <p class="banner__comment">
        Développement d'application web javascript sur mesure
      </p>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
  .banner{  
    display: flex;
    width: 100%;
    height: var(--banner_height);
    margin-top: var(--navbar_height);
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .banner__container{
      position: relative;
  }

  .banner__text{
    font-size: 2em;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    font-weight: 800;
  }

  .banner--green{
    color:#00D5A8;
  }

  .banner__image{
    position: absolute;    
    height: 50%;
    z-index: -1;
  }

  .left{    
    bottom: -50px;
    left: 0px;
    animation: squareTranslateBottom 8s ease-in-out infinite;
  }

  .right{
    top: -15px;
    right: 0px;
    animation: squareTranslateTop 8s ease-in-out infinite;
  }

  .banner--upper{
    text-transform: uppercase;
    color: #251AC7;
  }

  .banner__comment{
    color: #3C4043;
    font-size: 1.5em;
    padding-top: 2.5em;
    font-weight: 500;
    text-align: center;
  }

  @keyframes squareTranslateBottom {
    0% {
      
      transform: translatey(0px);
    }
    50% {
      
      transform: translatey(-20px);
    }
    100% {
      
      transform: translatey(0px);
    }
  }

  @keyframes squareTranslateTop {
   0% {
    
    transform: translatey(0px);
    }
    50% {
      
      transform: translatey(20px);
    }
    100% {
      
      transform: translatey(0px);
    }
  }

  @media screen and (min-width: 768px) {
    .banner__text{
      font-size: 2.5em;
    }

   .left{          
      left: -100px;
    }

    .right{
      right: -140px;
    }

    .banner__image{     
      height: 100%;
    }    
  }
</style>