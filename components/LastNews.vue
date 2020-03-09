<template>
    <section class="ln-container">
        <article class="ln">
            <div class="ln__wrap">
                <h3 class="ln__title">Новости портала</h3>
                <nuxt-link to="#" class="ln__link btn-link">
                    Все новости
                    <img class="ln__link__icon" src="img/arraw.svg"/>
                </nuxt-link>
            </div>
            <nuxt-link to="#" class="ln__news">
                <div class="ln__news__date">24 Ноября 2019</div>
                <div class="ln__news__caption">Выставка полка «Нормандия-Неман» откроется в областном центре</div>
            </nuxt-link>
            <nuxt-link to="#" class="ln__news">
                <div class="ln__news__date">24 Ноября 2019</div>
                <div class="ln__news__caption">Выставка полка «Нормандия-Неман» откроется в областном центре</div>
            </nuxt-link>
            <nuxt-link to="#" class="ln__news">
                <div class="ln__news__date">24 Ноября 2019</div>
                <div class="ln__news__caption">Выставка полка «Нормандия-Неман» откроется в областном центре</div>
            </nuxt-link>
        </article>
        <article class="rating">
            <h3 class="rating__title">Высший уровень</h3>
            <p class="rating__info">в рейтинге качества осуществления ОРВ и экспертизы в регионах (Минэкономразвития)</p>
            <nuxt-link to="#" class="rating__link btn-link">
                Рейтинг минэкомразивития
                <img class="rating__link__icon" src="img/arraw.svg"/>
            </nuxt-link>
        </article>
    </section>
</template>

<script>
    export default {

    }
</script>


<style>
    .ln-container {
        display: flex;
        justify-content: space-between;
        background-color: white;
        padding: 0 4% 3.75rem 4%;
    }

    .ln {width: 66%;}

    .ln__wrap {
        display: flex;
        justify-content: space-between;
        padding: 0 0 .875rem 0;
    }

    .ln__link {
        width: 13.125rem;
        height: 2.25rem;
    }

    .ln__title,
    .rating__title {
        color: #898989;
        font-weight: 500;
        line-height: 130%;
        font-size: 1.125rem;
    }

    .ln__news {
        display: block;
        border-top: 1px solid #F2F2F2;
        padding: .875rem 0 1rem 0;
    }

    .ln__news__date {
        color: #898989;
        margin: 0 0 .5rem 0;
    }

    .ln__news__caption {
        font-size: 1.125rem;
        color: #1D1E25;
    }

    .rating {width: 32%;}

    .rating__title {
        margin: 0 0 2.5rem 0;
    }

    .rating__info {
        padding: 0 20% 0 0;
        font-size: 1.125rem;
        line-height: 150%;
        margin: 0 0 5.625rem 0;
    }

    .rating__link {
        width: 100%;
        height: 2.8125rem;
    }

    .ln__link__icon,
    .rating__link__icon {
        margin: 0 0 0 .9375rem;
    }

</style>
