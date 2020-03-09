<template>
    <form class="sf" action="#" method="POST">
        <h2 class="sf__title">Регистрация</h2>

        <label class="sf__label" for="login">Логин</label>
        <input class="sf__field" type="text" id="login" placeholder="Введите имя пользователя">

        <label class="sf__label" for="photo">Пароль</label>
        <input class="sf__field" type="text" id="photo" placeholder="Введите номер телефона">

        <label class="sf__label" for="email">Пароль</label>
        <input class="sf__field" type="text" id="email" placeholder="Введите email">

        <label class="sf__label" for="password">Пароль</label>
        <input class="sf__field" type="text" id="password" placeholder="Введите пароль">

        <label class="sf__label" for="password_repeat">Пароль</label>
        <input class="sf__field" type="text" id="password_repeat" placeholder="Введите пароль ещё раз">

        <button class="sf__btn btn" type="submit">Зарегистрироваться</button>

        <nuxt-link class="sf__footnote" to="/login">Вернуться ко входу</nuxt-link>
    </form>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .sf {
        width: 60%;
        display: flex;
        flex-direction: column;
        background-color: #F9F9F9;
        border-radius: 10px;
        margin: 0 auto;
        padding: 2.5rem 3.125rem 5rem 3.125rem;
        color: #464646;
    }

    .sf__title {
        font-size: 1.625rem;
        margin: 0 0 3.5rem 0;
    }

    .sf__label {
        font-weight: 500;
        font-size: 1.25rem;
        margin: 0 0 .5rem 0;
    }

    .sf__field {
        color: #A4A4A4;
        font-size: 1.25rem;
        font-weight: 400;
        padding: 1.125rem;
        border-radius: 6px;
        border: 1px solid #E7E7E7;
        margin: 0 0 2.1875rem 0;
    }

    .sf__btn {width: 100%;}

    .sf__footnote {
        font-size: 1.25rem;
        color: #747474;
        padding: 0 0 .5rem 0;
        border-bottom: 1px solid #BBBBBB;
        width: 24%;
        margin: 2rem auto 0 auto;
    }



</style>
