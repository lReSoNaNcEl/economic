<template>
    <header class="header">
        <nav class="header__navmenu">
            <nuxt-link class="header__navmenu__item header__navmenu__item_active" to="/">Главная</nuxt-link>
            <nuxt-link class="header__navmenu__item" to="/projects">Все проекты</nuxt-link>
            <nuxt-link class="header__navmenu__item" to="/support">Поддержка пользователей</nuxt-link>
            <nuxt-link class="header__navmenu__item" to="/materials">Материалы</nuxt-link>
            <nuxt-link class="header__navmenu__item" to="/procedures">Общая информация о процедурах</nuxt-link>
            <nuxt-link class="header__navmenu__item" to="/about">О портале</nuxt-link>
        </nav>

        <nuxt-link to="/login" class="header__account">
            <div class="header__account__text">Личный <br> кабинет</div>
            <img class="header__account__icon" src="img/account.svg"/>
        </nuxt-link>
    </header>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .header {
        width: 90rem;
        height: 4.0625rem;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        color: #666666;
    }

    .header__navmenu {
        width: 65rem;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }

    .header__navmenu__item {
        display: flex;
        align-items: center;
        font-size: 1.125rem;
        height: inherit;
    }

    .header__account {
        display: flex;
        align-items: center;
    }

    .header__account__text {
        font-size: 1rem;
        padding: .875rem;
    }

    .header__account__icon {width: 2.5rem;}

    .header__navmenu__item_active {
        color: #B24429;
        border-bottom: 4px solid #B24429;
    }
</style>
