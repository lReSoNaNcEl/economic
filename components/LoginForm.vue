<template>
    <form class="lf" action="#" method="POST">
        <h2 class="lf__title">Вход в личный кабинет</h2>

        <label class="lf__label" for="login">Логин</label>
        <input class="lf__field" type="text" id="login" placeholder="Почта / номер телефона">

        <label class="lf__label" for="password">Пароль</label>
        <input class="lf__field" type="text" id="password" placeholder="Введите пароль">

        <div class="lf__wrap">
            <button class="lf__btn" type="submit">Войти</button>
            <nuxt-link class="lf__footnote" to="#">Забыли пароль?</nuxt-link>
        </div>

        <nuxt-link class="lf__footnote" to="/signup">Ещё не зарегистрированы?</nuxt-link>
    </form>
</template>

<script>

    export default {
    }
</script>

<style scoped>
    .lf {
        width: 60%;
        display: flex;
        flex-direction: column;
        background-color: #F9F9F9;
        border-radius: 10px;
        margin: 0 auto;
        padding: 2.5rem 3.125rem 4rem 3.125rem;
        color: #464646;
    }

    .lf__title {
        font-size: 1.625rem;
        margin: 0 0 3.5rem 0;
    }

    .lf__label {
        font-weight: 500;
        font-size: 1.25rem;
        margin: 0 0 .5rem 0;
    }

    .lf__field {
        color: #A4A4A4;
        font-size: 1.25rem;
        font-weight: 400;
        padding: 1.125rem;
        border-radius: 6px;
        border: 1px solid #E7E7E7;
        margin: 0 0 2.1875rem 0;
    }

    .lf__btn {
        width: 50%;
        background-color: #F1795F;
        color: #FFFFFF;
        padding: 1.125rem 0;
        border-radius: 6px;
        font-size: 1.25rem;
        font-weight: 500;
        cursor: pointer;
    }

    .lf__footnote {
        font-size: 1.25rem;
        color: #747474;
        padding: 0 0 .5rem 0;
        border-bottom: 1px solid #BBBBBB;
    }

    .lf__wrap > .lf__footnote {margin: 0 0 0 2.8125rem;}

    .lf__footnote {margin: 1.875rem 0 0 0; width: 34%;}


</style>
