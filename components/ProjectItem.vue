<template>
    <div class="project">
        <div class="project__progress"></div>
        <div class="project__statistic">
            <div class="project__statistic__items">
                <nuxt-link to="#" class="project__statistic__items__item">
                    <img class="project__statistic__items__item__icon" src="img/last_projects/eye.svg"/>
                    <div class="project__statistic__items__item__count">78</div>
                </nuxt-link>
                <nuxt-link to="#" class="project__statistic__items__item">
                    <img class="project__statistic__items__item__icon" src="img/last_projects/star.svg"/>
                    <div class="project__statistic__items__item__count">999</div>
                </nuxt-link>
                <nuxt-link to="#" class="project__statistic__items__item">
                    <img class="project__statistic__items__item__icon" src="img/last_projects/chat.svg"/>
                    <div class="project__statistic__items__item__count">12</div>
                </nuxt-link>
            </div>
            <div class="project__statistic__status">
                <div class="project__statistic__status__circle"></div>
                <div class="project__statistic__status__text">Завершение</div>
            </div>
        </div>
        <div class="project__name">Липецкий областной Совет депутатов</div>
        <div class="project__description">Об утверждении Порядка осуществления регионального государственного контроля за соблюдением законодательства об архивном деле в Российской Федерации на территории Липецкой области</div>
        <div class="project__type">Проект закона</div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .project {
        width: 26.9rem;
        background-color: #FFFFFF;
        border-radius: 6px;
        border: 1px solid #F2F2F2;
        margin: 0 1rem 1rem 0;
    }

    .project__progress {
        border-top-left-radius: 6px;
        height: .3125rem;
        width: 50%;
        background-color: #D76B53;
    }

    .project__statistic {
        display: flex;
        justify-content: space-between;
        padding: 1.125rem 1.375rem 1.125rem 1.375rem;
        border-bottom: 1px solid #F2F2F2;
    }

    .project__statistic__items {
        display: flex;
    }

    .project__statistic__items__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 1.375rem 0 0;
    }

    .project__statistic__items__item__icon {
        margin: 0 .375rem 0 0;
        height: 1.125rem;
    }

    .project__statistic__status {
        display: flex;
    }

    .project__statistic__status__circle {
        width: 1.25rem;
        height: 1.25rem;
        background-color: #7BC883;
        border-radius: 100%;
        margin: 0 .375rem 0 0;
    }

    .project__statistic__status__text {
        color: #7BC883;
        font-size: 1.125rem;
        font-weight: 400;
    }

    .project__name {
        font-size: 1rem;
        color: #898989;
        margin: 1.375rem 0 1rem 0;
    }

    .project__description {
        font-size: 1.125rem;
        color: #1D1E25;
        line-height: 150%
    }

    .project__type {
        font-size: 1rem;
        font-weight: 300;
        color: #898989;
        padding: 1.25rem 1.375rem 1.5625rem 1.375rem;
    }

    .project__name,
    .project__description {
        padding: 0 1.375rem 0 1.375rem;
    }
</style>
