<template>
  <div>
    <nav class="nav">
      <div class="nav__container">
        <section class="nav__title-section">
          <img class="nav__image" src="~/assets/image/logoSquare.svg" alt="icone du site fait avec des carrés bleu et vert">
          <h1 class="nav__title">
            CTOUTWEB
          </h1>
        </section>
        <section v-if="!burgerVisibility" class="nav__list-section">
          <ul class="nav__list">
            <li class="nav__link">
              <nuxt-link class="nav__link-item" to="/">
                Accueil
              </nuxt-link>
            </li>
            <li class="nav__link">
              <nuxt-link class="nav__link-item" to="/devis">
                Devis
              </nuxt-link>
            </li>
            <li class="nav__link">
              <nuxt-link class="nav__link-item" to="/rendez-vous">
                Rendez-vous
              </nuxt-link>
            </li>
          </ul>      
        </section>
        <section v-else class="nav__mobile">
          <div class="burger">
            <div class="line" />
            <div class="line" />
            <div class="line" />
          </div>
        </section>
      </div>      
    </nav>
  </div>  
</template>

<script>
export default {
    name: 'NavigationSite',
    data() {
        return {           
            burgerDisplaySize: 768,
            burgerVisibility: true
        };
    },
    mounted() {
        window.addEventListener('resize', this.setBurgerVisibility);
        this.setBurgerVisibility();
    },
    methods: {
        /**
         * gestion affichage burger menu
         */
        setBurgerVisibility() {
            //Supprime la navbarMobile
            if(!this.mobileBreakPoint(window.innerWidth)) {
                this.burgerVisibility = false;
            } else {
                this.burgerVisibility = true;
            }
        },

        /**
        * Vérification si width affichage >  burgerDisplaySize
        */
        mobileBreakPoint(screenSize){
            console.log(this.burgerVisibility)
            if(Number(screenSize) <= Number(this.burgerDisplaySize)){
                return true;
            }
            return false;
        },
    },    
};
</script>

<style scoped>
  .nav{
    display: flex;    
    justify-content: center;
    position: fixed;
    top: 0px;
    left: 0px;
    height: var(--navbar_height);    
    width: 100%;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 1px -2px;
    z-index: 2;
  }

  .nav__container{
    display: flex;
    justify-content: space-between;
    height: var(--navbar_height);    
    width: 100%;
  }

  .nav__title-section{
    position: relative;
  }

  .nav__title{
    padding-left: 1.5em;
    color: #251AC7;
    font-weight: 900;
  }

  .nav__image{
    position: absolute;
    left:15px;
    top: 20px;
    height: 40%;
    
  }

  .nav__list-section{
    display: flex;
  }

  .nav__list{
    display: flex;   
    align-items: center;
    padding-right: 1em;
  }

  .nav__link{
    padding: 0em 0.5em;
    list-style: none;    
  }

   .nav__link-item{
    text-decoration: none;
    font-size: var(--link_size);
    color: #3C4043
  }

  .nav__mobile{
    display: flex;
  }

  .burger{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0em 1em;
    cursor: pointer;
  }

  .line{
    width: 30px;
    height: 3px;
    margin: 2px 0px;
    background-color:black;
    border-radius: 5px;

  }

  @media  screen and (min-width: 768px) {
    .nav__container{
      width: 768px;     
    }    
  }
   @media  screen and (min-width: 1024px) {
    .nav__container{
      width: 1024px
    }    
  }
</style>