<template>
    <section class="projects">
        <ProjectFilter/>
        <h2 class="projects__title title">Все проекты</h2>
        <div class="projects__wrap">
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
        </div>

        <div class="projects__pgn">
            <nuxt-link class="projects__pgn__item projects__pgn__item_active" to="#">1</nuxt-link>
            <nuxt-link class="projects__pgn__item" to="#">2</nuxt-link>
            <nuxt-link class="projects__pgn__item" to="#">3</nuxt-link>
            <p class="projects__pgn__points">...</p>
            <nuxt-link class="projects__pgn__item" to="#">50</nuxt-link>
        </div>
    </section>
</template>

<script>

    import ProjectFilter from '@/components/ProjectFilter'
    import ProjectItem from '@/components/ProjectItem'

    export default {
        components: {
            ProjectItem,
            ProjectFilter
        }
    }
</script>


<style>
    .projects {
        width: inherit;
        background-color: #F9F9F9;
        padding: 0 0 14.375rem 0;
    }

    .projects__wrap {
        width: 93%;
        display: flex;
        flex-wrap: wrap;
        margin: 0 3% 0 4%;
    }

    .projects__title {
        margin: 1.875rem 0 1.25rem 4%;
    }

    .projects__pgn {
        display: flex;
        align-items: center;
        margin: 0 0 0 4%;
    }

    .projects__pgn__points {
        margin: 0 .3125rem 0 0;
    }

    .projects__pgn__item {
        width: 2.1875rem;
        height: 2.1875rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #DADADA;
        border-radius: 3px;
        font-size: 1rem;
        color: #898989;
        margin: 0 .3125rem 0 0;
    }

    .projects__pgn__item_active {
        border: 1px solid #D76B53;
        color: #D76B53;
    }
</style>
