<template>
    <section class="lp">
        <div class="lp__header">
            <h2 class="lp__header__title title">Последние проекты</h2>
            <nuxt-link to="/projects" class="lp__header__link">
                Все проекты
                <img class="lp__header__link__icon" src="img/arraw.svg"/>
            </nuxt-link>
        </div>
        <div class="lp__projects">
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
        </div>
    </section>
</template>
<script>
    import ProjectItem from '@/components/ProjectItem';
    export default {
        components: {
            ProjectItem
        }
    }
</script>
<style scoped>

    .lp {
        width: inherit;
        background-color: #F9F9F9;
        color: #434656;
        padding: 0 0 2.625rem 0;
    }

    .lp__header {
        width: 92%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto 1.625rem auto;
    }

    .lp__header__link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 12.5rem;
        height: 2.25rem;
        background-color: #FFFFFF;
        border: 1px solid #DADADA;
        font-size: 1.125rem;
        color: #898989;
        font-weight: 400;
        border-radius: 6px;
    }

    .lp__header__link__icon {
        margin: 0 0 0 .9375rem;
    }

    .lp__projects {
        width: 93%;
        display: flex;
        flex-wrap: wrap;
        margin: 0 3% 0 4%;
    }
</style>
