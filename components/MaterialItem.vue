<template>
    <nuxt-link to="#" class="material">
        <img class="material__logo" src="img/word.svg">
        <div class="material__theme">План проведения оценки фактического воздействия нормативных правовых актов на 2019 год</div>
        <div class="material__date">21.10.2019</div>
    </nuxt-link>
</template>

<script>

    export default {

    }
</script>

<style scoped>

    .material {
        width: 23%;
        background-color: #FFFFFF;
        margin: 1.25rem 1.25rem 0 0;
        padding: 1.25rem 1rem 2.5rem 1rem;
        clip-path: polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 0% 100%); /*(X1 Y1, X2 Y2, X3 Y3, X4 Y4, X5 Y5)  (X1, Y1 - левый верхний угол)*/
        border: 1px solid #CBCBCB;
    }

    .material__logo {
        margin: 0 0 1.25rem 0;
    }

    .material__theme {
        line-height: 170%;
        font-size: 1.125rem;
        color: #1D1E25;
        margin: 0 0 3.5rem 0;
    }

    .material__date {
        color: #898989;
        font-size: 1rem;
    }


</style>
