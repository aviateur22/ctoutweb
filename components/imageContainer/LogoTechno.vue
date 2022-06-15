<template>
  <!-- conteneur -->
  <article data-aos="flip-up" :data-aos-delay="delayOut" data-aos-duration="2000" class="logo">
    <!-- image -->
    <header class="logo__header">
      <img data-aos="zoom-in-down" :data-aos-delay="delayIn" class="logo__image" :src="require(`~/assets/image/${data.imageSource}`)" :alt="data.alt">
    </header>
    <!-- nom de techno -->
    <main class="logo__main">
      <p class="logo__text">
        {{ data.text }}
      </p>
    </main>
  </article>
</template>

<script>
export default {
    name: 'LogoTechno',
    props: ['data'],
    data(){
        return {
            delayOut: this.data.id * 100,
            delayIn: this.data.id * 300
        };
    }
};
</script>

<style scoped>

.logo{
  width: 170px;
  height: 170px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #F3F2FD;
  border-radius: 10px;
  margin: 1em;
}

.logo__header{
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 5px 5px; 
  border-radius: 100%;
  background: white;
}

.logo__text{
  text-transform: uppercase;
  letter-spacing: 1.5;
  font-weight: 800;
  font-size: 1.5em;
  padding: 0.5em 0em;
}

</style>