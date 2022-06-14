<template>  
  <article class="article">
    <!-- image -->
    <div class="article__image-container">
      <img class="article__image-square" src="~/assets/image/greenSquareBig.svg" alt="">
    </div>    
    <header class="article__header">
      <div class="article__flash-container">
        <!-- flash message -->
        <span v-if="flashVisibility" class="article__flash-message">
          Message de test
        </span>
      </div>      
      <h2 class="article__title">
        Envoyer un message
      </h2>

      <p class="article__comment">
        Envie de nous écrire. N'hésitez pas, je réponds a vos questions en 48h maxi.
        <br>
        Ou mon téphone: 06 23 27 41 01 et email: ctoutweb@gmail.com
      </p>
    </header>
    <main class="article__main">
      <form class="article__form" @submit.prevent="sendMessage">
        <!-- reason -->
        <div class="article__input-container">
          <label for="reason" class="article__label">Raison du message</label>
          <input type="text" name="reason" placeholder="J'ai une question" class="article__input" required>        
        </div>

        <!-- email -->
        <div class="article__input-container">
          <label for="email" class="article__label">Email</label>
          <input type="email" name="email" placeholder="toto@hotmail.fr" class="article__input" required>        
        </div>

        <!-- nom -->
        <div class="article__input-container">
          <label for="name" class="article__label">Nom et prénom</label>
          <input type="text" name="name" placeholder="Jean Lagaffe" class="article__input" required>        
        </div>

        <!-- tel -->
        <div class="article__input-container">
          <label for="phone" class="article__label">Téléphone</label>
          <input type="text" name="phone" placeholder="06 23 ..." class="article__input" required>        
        </div>

        <!-- textaera -->
        <div class="article__input-container">
          <label for="message" class="article__label">Votre message</label>
          <textarea type="text" name="message" placeholder="votre message" class="article__input input-area" required />
        </div>

        <input type="submit" value="envoyer" class="article__submit-button"> 
      </form>       
    </main>
  </article>
</template>

<script>
export default {
    // eslint-disable-next-line vue/require-prop-types
    data(){
        return {
            flashVisibility: false
        };
    },
    methods: {
        /**
         * Envoie d'un message via le formulaire 
         */
        sendMessage(e){
            const formData = new FormData(e.target);            
            return this.$emit('sendMessage', formData);
        }
    }
};
</script>

<style scoped>
  .article{
    display: flex;
    flex-direction: column;
    background: #EDECFF;
    position: relative;
  }

  .article__image-container{
    position: absolute;
    right: 05px;
    top: -70px;
    width: 90px
  }
  
  .article__image-square{
    width: 100%;
  }
  .article__header{
    font-display: flex;    
  }

  .article__comment{
    padding-left: 2em;
    padding-top: 2em;
    text-align: justify;
    max-width: 90%;
    font-weight: 500;
    line-height: 1.5;
  }

  .article__main{
    display: flex;
    flex-direction: column;
    padding: 2em 1em;
    width: 100%;
  }

  .article__form{
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .article__input-container{
    display: flex;
    flex-direction: column;
    padding: 1em;
  }

  .article__label{
    font-weight: 800;
    padding-bottom: 0.3em;
  }

  .article__input{
    border: 0.1px solid #251AC7;
    height: 35px;
    border-radius: 10px;
    padding-left: 5px;
    text-decoration: none;        
    outline: none;
  }

  .input-area{
    height: 200px;
    margin-bottom: 3em;
  }

  .article__submit-button{
    color: #251AC7;
    font-weight: 600;
    font-size: 1.0em;
    text-transform: uppercase;
    padding: 0.5em;
    background:white;
    border: 1px solid #251AC7;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .article__submit-button:hover{
    background:rgba(0,0,0,0.1);
  }

  @media screen and (min-width:768px) {
    .article__main{
      flex-direction: row;  
      justify-content: center;    
    }

    .article__form{
      width: 50%;
    }  
    
    .article__image-container{      
      right: 05px;
      top: -80px;
      width: 150px
    }
  }

</style>