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

      <a class="banner__link-action" href="#techno">
        <span>d</span>
        <span>e</span>
        <span>c</span>
        <span>o</span>
        <span>u</span>
        <span>v</span>
        <span>r</span>
        <span>i</span>
        <span>r</span>
      </a>
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
    flex-direction: column;
    width: 100%;
    height: 100vh;
    /* height: var(--banner_height); */
    margin-top: var(--navbar_height);
    align-items: center;
    justify-content: center;    
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

  .banner__link-action{
    margin: 2em;
    padding: 0.5em;
    font-size: 1.5em;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 800;
    color: #00D5A8;
    border:1px solid #00D5A8;
    border-radius: 10px;
    transition: all .3s;

  }

  a span{
    transition: all .3s;
  }

  span:nth-child(2){
    transition-delay: .1s;
  }

  span:nth-child(3){
    transition-delay: .15s;
  }

  span:nth-child(4){
    transition-delay: .2s;
  }

  span:nth-child(5){
    transition-delay: .25s;
  }

  span:nth-child(6){
    transition-delay: .2s;
  }

    span:nth-child(7){
    transition-delay: .15s;
  }

  span:nth-child(8){
    transition-delay: .1s;
  }

  a:hover span{   
    text-shadow: -2px 2px 2px rgba(0,54,42,0.9);
  }

   a:hover {
    transform: scale(1.1);
    border:2px solid #00D5A8
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

    .banner__comment{
      padding-top: 4em;
      font-weight: 600;
      text-align: center;
    }

    .banner__image{     
      height: 100%;
    }    

    .banner__link-action{
      margin: 3em;
      padding: 1.5em;
      font-weight: 900;
      font-size: 2.0em;
    }
  }
</style>