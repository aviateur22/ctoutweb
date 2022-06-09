<template>
  <footer class="footer">
    <section class="footer__section-information">
      <!-- text d'information -->
      <div class="footer__text-container">
        <p class="footer__text">
          CTOUTWEB | Cyrille Cadé
          <br>
          <br>
          <span class="text--space">Société spécialisée dans le développement informatique.</span> 
        </p>
        <p class="footer__text">
          RCS 911 273 852
        </p>
        <p class="footer__text">
          Téléphone: 06 23 27 41 01
        </p>
        <p class="footer__text">
          Contact ctoutweb@gmail.com
        </p>
        <p class="footer__text">
          AUTERIVE 31190
        </p>
        <p class="footer__text">
          Hebergement: Heroku
        </p>
      </div>        
    </section>
    <!-- links  -->
    <section class="footer__section-link">
      <!-- portfolio -->
      <a href="https://cyrillecade.netlify.app/" target="_blank" class="footer__link">
        <img class="footer__link-image" src="~/assets/image/book.png" alt="image d'un livre avec un stylo">
      </a>

      <!-- linkedin -->
      <a href="https://www.linkedin.com/in/cyrille-cade-b58323206/" target="_blank" class="footer__link blue"> In </a>      
    </section>
  </footer>  
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
  display: flex;
  flex-direction: column;
  width: 100%;
  background: rgb(66, 66, 66);
  align-items: center;
  justify-content: center;
}

.footer__section-link, .footer__section-information{
    padding: 1em;
}

.footer__section-link{
  display: flex;
  justify-content: space-between;
  width: 200px
}

.footer__text{
    color: white;
    padding: 0.5em;
}

.footer__section-information{
  border-bottom: 1px solid white;

}

.text--space{
  padding-left: 2em;
}

.footer__link{
  text-decoration: none;
  color: white;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
  border-radius: 50%;
  width: 45px;
  height: 45px;  
  cursor: pointer;   
  margin: 1em; 
  text-transform: uppercase;  
  transition: all 0.3s ease; 
  background:#00D5A8;
}

.footer__link:hover{
  width: 50px;
  height: 50px; 

}

.footer__link-image{
  width: 60%;
  object-fit: contain;
}

.blue{
  background: rgb(46, 46, 255);
}

@media screen and (min-width: 768px) {
  .footer{
    flex-direction: row;
    justify-content: flex-start;
  }

  .footer__section-information{
    border-right: 1px solid white;
    justify-content: center;
    display: flex;   
    width: 50%; 
  }

   .footer__section-link{
    justify-content: center;   
    width: 50%; 
  }
  
}

</style>