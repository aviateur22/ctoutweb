<template>
  <div class="home__container">    
    <!-- techno utilisé -->
    <TechnoContainer />
    <!-- hébergement -->
    <Hosting />
    <!-- ma présentation -->
    <AboutMe />
    <!-- formulaire de question -->    
    <ContactMe ref="contactMe" :disableSubmitButton="disableSubmitButton" @sendMessage="sendMessage" />
  </div>  
</template>

<script>
import tokenType from '../helper/tokenType';
export default {
    name: 'HomePage', 
    layout: 'addBanner',
    data(){
        return {
            token: null,
            disableSubmitButton: false,
        };        
    },
    created(){ 
        this.getToken();    
    },
    methods: {  
        /**
         * Récupération d'un token de soumission du formulaire
         */    
        async getToken(){        
            /**requête token */
            const token = await this.$store.dispatch('actionHandler/wrapperAction', { action: 'token/getCsurfToken', data: tokenType.message.name});  

            /**vérification */
            if(!token){
                return null;
            }
            
            this.token = token.token;
        },

        /**
         * Envoie d'un message
         */
        async sendMessage(formData){   
            // désactive le button de soumission
            this.disableSubmitButton = true; 
            
            if(this.token){
                formData.append('token', this.token);
            }
            
            const sendMessage = await this.$store.dispatch('actionHandler/wrapperAction', { action: 'message/sendMessage', data: formData });            

            //réactive le button de soumission
            this.disableSubmitButton = false; 

            // Echec
            if(!sendMessage){
                return null;
            }

            // Reste du formulaire
            this.$refs.contactMe.clearContent();
        }
        
    }
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