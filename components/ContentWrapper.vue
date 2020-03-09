<template>
    <div class="content-wrapper">
        <div class="content-wrapper__header">
            <div class="flex-wrap">
                <img class="content-wrapper__header__logo" src="img/logo.svg" alt="">
                <h1 class="content-wrapper__header__title">Интернет-портал для публичного обсуждения проектов <br> и действующих нормативных актов органов государственнной <br> власти Липецкой области</h1>
            </div>
            <div class="flex-wrap">
                <div class="content-wrapper__header__toggle">
                    <div class="content-wrapper__header__toggle__line"></div>
                    <div class="content-wrapper__header__toggle__line"></div>
                    <div class="content-wrapper__header__toggle__line"></div>
                </div>
                <div class="content-wrapper__header__text">Порталы других субъектов</div>
            </div>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        mounted: function () {
            document.getElementsByClassName('content-wrapper')[0].style.backgroundImage = 'url(img/bg.png)';
        }
    }
</script>

<style scoped>

    .flex-wrap {
        display: flex;
        align-items: center;
    }

    .flex-wrap:nth-of-type(2) {
        border-left: 1px solid white;
        align-items: center;
        padding: 0 0 0 1.625rem;
    }

    .content-wrapper {
        width: 100%;
        min-height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    .content-wrapper__header {
        width: 90rem;
        display: flex;
        justify-content: space-between;
        color: white;
        margin: 0 auto;
        padding: 3.125rem 0 0 0;
    }

    .content-wrapper__header__logo {
        width: 6.875rem;
        height: 8.75rem;
        margin: 0 1.625rem 0 0;
    }

    .content-wrapper__header__title {
        font-size: 1.625rem;
        font-weight: 400;
        line-height: 130%;
    }

    .content-wrapper__header__toggle {
        height: 1rem;
        width: 1.125rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
    }

    .content-wrapper__header__toggle__line {
        width: 100%;
        height: 2px;
        background-color: white;
    }

    .content-wrapper__header__text {
        font-size: 1.25rem;
        font-weight: 300;
        padding: 0 3.5rem 0 .625rem;
    }

    .content {
        width: 90rem;
        display: flex;
        flex-direction: column;
        margin: 8.75rem auto 0 auto;
    }

</style>
