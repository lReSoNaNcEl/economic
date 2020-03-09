<template>
    <section class="search">
        <form class="search__form" action="#" method="GET">
            <input class="search__form__field" type="search" placeholder="Начните печатать название проекта">
            <button class="search__form__btn" type="submit">
                <img class="search__form__btn__icon" src="img/search.svg"/>
                <p>Поиск</p>
            </button>
        </form>
    </section>
</template>
<script>
    export default {

    }
</script>
<style>

    .search {
        width: inherit;
        padding: 3.125rem 0;
        background-color: #F9F9F9;
    }

    .search__form {
        width: 92%;
        background-color: #F9F9F9;
        margin: 0 auto;
    }

    .search__form__field {
        width: 84%;
        border-radius: 10px 0 0 10px;
        background-color: #FFFFFF;
        border: 1px solid #DADADA;
        text-indent: 1.625rem;
        color: #898989;
        font-weight: 400;
        letter-spacing: .01rem;
    }

    .search__form__btn {
        width: 16%;
        background-color: #F1795F;
        border-radius: 0 10px 10px 0;
        color: #FFFFFF;
        cursor: pointer;
        font-weight: 500;
    }

    .search,
    .search__form,
    .search__form__btn {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .search__form__field,
    .search__form__btn {
        height: 3.125rem;
        font-size: 1.125rem;
    }

    .search__form__btn__icon {
        width: 1.25rem;
        margin: 0 .625rem 0 0;
    }

</style>
