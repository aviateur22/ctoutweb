<template>
  <p class="flash__text">
    {{ data.message }}
  </p>
</template>

<script>
export default {
    props: ['data'],
    data(){
        return {
            id: this._uid,
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
                this.$emit('removeMessage', this.data);
            }, 5000);
        }
    }
};
</script>

<style scoped>
    .flash__text{
        text-transform: uppercase;
        font-weight: 500;
        color: white;
    }

</style>