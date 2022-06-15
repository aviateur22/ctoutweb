<template>
  <!-- conteneur -->
  <article class="logo">
    <!-- image -->
    <header class="logo__header">
      <img data-aos="zoom-in-down" :data-aos-delay="delayIn" class="logo__image" :src="require(`~/assets/image/${data.imageSource}`)" :alt="data.alt">
    </header>
  </article>
</template>

<script>
export default {
    name: 'LogoTechno',
    props: ['data'],
    data() {
        return {
            delayOut: this.data.id * 100,
            delayIn: this.data.id * 200
        };
    },    
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
  background: white;
  border-radius: 10px;
  margin: 1em;  
}

.logo__text{
  text-transform: uppercase;
  letter-spacing: 1.5;
  font-weight: 800;
  font-size: 1.5em;
  padding: 0.5em 0em;
}

</style>