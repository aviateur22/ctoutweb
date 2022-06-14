<template>
  <p class="flash__text">
    {{ text }}
  </p>
</template>

<script>
export default {
    props: ['text', 'index'],
    data(){
        return {
            time: undefined
        };
    },
    mounted(){
        this.timer();
    },
    methods: {
        /**
        * Suppression du message au bout de 5sec
        */
        timer(){
            setTimeout(()=>{
                this.$emit('removeMessage', this.index);
            }, 5000);
        }
    }
};
</script>

<style>

</style>