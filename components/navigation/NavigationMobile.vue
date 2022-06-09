<template>
  <div v-if="mobileShow" class="mobile">
    <aside class="mobile__button-container">
      <button class="mobile__button" @click="toggleNavbarMobile">
        <svg viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
      </button>
    </aside>
    <nav class="mobile__nav">
      <section class="mobile__title-container">      
        <h1 class="mobile__title" @click="toggleNavbarMobile">
          <nuxt-link class="mobile__navlink-title" to="/">
            CTOUTWEB
          </nuxt-link>
        </h1>
      </section>
      <section class="mobile__item-container">        
        <ul class="mobile__item-list">
          <!-- utilisateur non connecté -->
          <li class="mobile__navlink" @click="toggleNavbarMobile">
            <nuxt-link to="/devis" class="mobile__navlink-item">
              devis
            </nuxt-link>
          </li>
          <li class="mobile__navlink" @click="toggleNavbarMobile">
            <nuxt-link class="mobile__navlink-item" to="/rendez-vous">
              rendez-vous
            </nuxt-link>
          </li>  
        </ul>
      </section>            
    </nav>
  </div>
</template>

<script>
export default {
    name: 'NavigationSite',
    data() {
        return {
            mobileShow: true
        };
    },
    methods: {
        /**action clic qur le boutton */
        toggleNavbarMobile(){
            this.$emit('menuMobileDisplay');
        }

    }

};
</script>

<style scoped>
  .mobile{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(0, 0, 0 ,0.2);
    z-index: 10;
    display: flex;
    flex-direction: column;
  }

  .mobile__button-container {
    position: absolute;
    right: 0px;
    width: 50px;
    height: 50px;
    margin-right: 1em;
  }
  .mobile__button{
    cursor: pointer;
    background: transparent;
    margin: 10px;
    border: none;
    color: white;
    width: 85%;;
  }

  .mobile__title{
    padding: 0.5em;
  }

  .mobile__nav{
    display: flex;    
    flex-direction: column;
    width: 80%;
    height: 100%;
    background: white;
  }

  .mobile__navlink-title{
    text-decoration: none;
    color: #251AC7;
    padding: 0em      
  }

  .mobile__item-list{
    padding: 1em;
  }

  .mobile__navlink{
    padding: 0.5em 0em;
  }

  .mobile__navlink-item{    
    text-decoration: none;  
    font-size: var(--link_size);
    color: #3C4043;
    font-weight: 500;
    font-size: 1.3em;
  }

</style>