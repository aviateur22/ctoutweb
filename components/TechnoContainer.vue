<template>
  <div class="techno">
    <section class="techno__title-section">      
      <!-- titre -->
      <h2 class="techno__title-text">
        technologies de développement
      </h2>  
      <!-- image + text -->
      <div class="techno__image-container">
        <!-- image -->
        <img src="~/assets/image/techno.png" alt="dessin d'une femme qui est devant un tableau">
        <!-- text -->
        <div class="techno__comment-container">
          <p class="techno__comment">
            Découvrez mes choix de technologie de développement pour le FRONT-END et BACK-END
          </p>
        </div>        
      </div>         
    </section>
    <!-- presentation des technos -->
    <section class="techno__section">
      <section class="techno__front">
        <TechnoDescription :data="frontData" />
      </section>
      <section class="techno__back">
        <TechnoDescription :data="backData" />
      </section>
    </section>        
  </div>
</template>
<script>
export default {
    data() {
        return {
            frontData: {
                title: 'front-end',
                image: {
                    imageSource: 'front.jpg',
                    alt: 'dessin de plusieurs personnages portant des boites avec un dessin de logo dans leurs mains'
                },                
                presentation: `Le FRONT-END est la partie visible sur votre écran.
                C’est l’interface entre vous et l’application. Cette partie doit être réactif et avoir une bonne érgonomie`,
                comments: [
                    'De nos jours, il existe de nombreux outils permettant de rendre une interface réactive.',
                    'J’ai séléctionné VUEJS. C’est un framework utilisé par des millions de développeurs.',
                    'Afin d’améliorer le SEO des applications, j’ai rajouté NUXTJS. C’est un outils indispensable pour le améliorer le référencement et l’expérience développeur.',
                ],
                logo: {
                    squarePositionRight: true,
                    logos: [
                        {   
                            id: 1,
                            text: 'nuxtjs',
                            imageSource: 'logoTechno/nuxtjs.jpg',
                            alt: 'dessin de 2 triangles'
                        },
                        {
                            id: 2,
                            text: 'vuejs',
                            imageSource: 'logoTechno/vuejs.jpg',
                            alt: 'dessin de 2 lettres en forme de V'
                        },
                        {
                            id: 3,
                            text: 'css',
                            imageSource: 'logoTechno/css.jpg',
                            alt: 'dessin de 2 triangles'
                        },
                        {
                            id: 4,
                            text: 'html',
                            imageSource: 'logoTechno/html.jpg',
                            alt: 'dessin de 2 lettres en forme de V'
                        },
                    ]
                }
            },
            backData: {
                title: 'back-end',
                image: {
                    imageSource: 'back.jpg',
                    alt: 'dessin de plusieurs personnages portant des boites avec un dessin de logo dans leurs mains'
                },               
                presentation: `Le back-end est une partie importante du développement, sans laquelle une application web ne pourrait marcher. Même s'il est indispensable, 
                                le back-end est un ensemble d'opérations qui ne sont pas visibles pour les visiteurs.
                                Le back-end peut être divisé en trois parties: le server, l'application et la base de données`,
                comments: [
                    'Comme pour le front-end, il existe de nombreuses technologies pour développer un back-end.',
                    'J’ai sélectionné Nodejs associé à la librairie express. Concernant les bases de données, j’ai retenu postgresql et mongodb ',
                ],
                logo: {
                    squarePositionRight: false,
                    logos: [
                        {
                            id: 1,
                            text: 'nodejs',
                            imageSource: 'logoTechno/nodejs.jpg',
                            alt: 'dessin representant le logo de nodejs'
                        },
                        { 
                            id: 2,
                            text: 'express',
                            imageSource: 'logoTechno/js.jpg',
                            alt: 'dessin représentant le logo de express'
                        },
                        {
                            id: 3,
                            text: 'postgresql',
                            imageSource: 'logoTechno/postgresql.jpg',
                            alt: 'logo de postgresql, il s\'agit d\'une tête d\'éléphant'
                        },
                        {
                            id: 4,
                            text: 'mangodb',
                            imageSource: 'logoTechno/mangodb.jpg',
                            alt: 'logo de mangodb, il s\'agit d\'une feuille d\'un arbre'
                        },
                    ]
                }
            }
        };
    }
};
</script>

<style scoped>
  .techno{
    display: flex;
    width: 100%;
    flex-direction: column;    
    background: #DEDDF5;
  }

  .techno__title-section{
    display: flex;
    flex-direction: column;
    align-items: center;  
    width: 100%;
  }

  .techno__image-container{
    display: flex;
    flex-direction: column;
    width:100%;
    align-items: center;
    justify-content: center;

  }

  .techno__title-text{
    color: #251AC7;
    text-transform: uppercase;
    width: 100%;
  }

  .techno__image{
    padding: 1em;
    max-height: 90%;
  }

  .techno__comment-container{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .techno__comment{
    padding-bottom: 1em;
    text-align: justify;
    max-width: 90%;
    font-weight: 500;
    line-height: 1.5;
  }

   @media  screen and (min-width: 768px) {
    .techno__comment{
      max-width: 70%;      
    } 

    .techno__image-container{
      flex-direction: row-reverse;
    }

    .techno__comment{
      padding-right: 1em;
    }
  }
</style>