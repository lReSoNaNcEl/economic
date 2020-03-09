<template>
    <section class="materials">
        <h2 class="materials__title title">Материалы</h2>
        <div class="materials__items">
            <MaterialItem/>
            <MaterialItem/>
            <MaterialItem/>
            <MaterialItem/>
            <MaterialItem/>
            <MaterialItem/>
        </div>
    </section>
</template>

<script>
    import MaterialItem from '@/components/MaterialItem';
    export default {
        components: {
            MaterialItem
        }
    }
</script>

<style scoped>
    .materials {
        width: inherit;
        background-color: #F9F9F9;
        padding: 0 0 14rem 0;
    }

    .materials__title {
        margin: 2.8125rem 0 2.5rem 3.125rem;
    }

    .materials__items {
        margin: 0 0 0 3.125rem;
        display: flex;
        flex-wrap: wrap;
    }
</style>
