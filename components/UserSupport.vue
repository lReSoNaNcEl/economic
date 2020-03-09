<template>
    <section class="support">
        <div class="support__wrapper">
            <h2 class="support__title title">Поддержка пользователей</h2>
            <button type="button" class="support__btn btn">Отправить сообщение</button>
        </div>

        <div class="support__wrapper">
            <div class="support__container">
                <h3 class="support__container__title">Методологическая поддержка</h3>
                <p class="support__container__notify"><b>Обращаетесь в случае:</b> не понимаете, что именно нужно разместить в отдельных полях на этапах проведения оценки регулирующего воздействия (далее - ОРВ); требуются пояснения и уточнения по процедурам ОРВ. Не согласны с реализованной на портале логикой и процессами. Отдел оценки регулирующего воздействия и развития конкуренции управления экономики администрации Липецкой области</p>
                <div class="support__container__contacts">
                    <div class="support__container__contacts__title">Отдел оценки регулирующего воздействия и развития конкуренции управления экономики администрации Липецкой области</div>
                    <div class="support__container__contacts__item">
                        <div class="support__container__contacts__item__post">Начальник отдела</div>
                        <div class="contacts__wrapper">
                            <div class="support__container__contacts__item__fio">Фокеев Валентин Александрович</div>
                            <div class="support__container__contacts__item__phone">(4742) 27-10-88</div>
                        </div>
                    </div>

                    <div class="support__container__contacts__item">
                        <div class="support__container__contacts__item__post">Главный консультант</div>
                        <div class="contacts__wrapper">
                            <div class="support__container__contacts__item__fio">Бизин Сергей Викторович</div>
                            <div class="support__container__contacts__item__phone">(4742) 22-85-22</div>
                        </div>
                    </div>

                    <div class="support__container__contacts__item">
                        <div class="support__container__contacts__item__post">Ведущий консультант</div>
                        <div class="contacts__wrapper">
                            <div class="support__container__contacts__item__fio">Ротова Ольга Борисовна</div>
                            <div class="support__container__contacts__item__phone">(4742) 22-86-87</div>
                        </div>
                    </div>

                    <div class="support__container__contacts__item">
                        <div class="support__container__contacts__item__post">Консультант</div>
                        <div class="contacts__wrapper">
                            <div class="support__container__contacts__item__fio">Кудрик Лариса Викторовна</div>
                            <div class="support__container__contacts__item__phone">(4742) 22-86-84</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="support__container">
                <h3 class="support__container__title">Технологическая поддержка</h3>
                <p class="support__container__notify"><b>Обращаетесь в случае:</b> некорректного функционирования портала</p>
                <div class="support__container__contacts">
                    <div class="support__container__contacts__title">Управление информатизации администрации Липецкой области</div>
                    <div class="contacts__wrapper">
                        <div class="support__container__contacts__item__mail">itc48@admlr.lipetsk.ru</div>
                        <div class="support__container__contacts__item__phone">(4742) 28-81-99</div>
                    </div>
                </div>

                <div class="support__container__manual">
                    <div class="support__container__manual__title">Инструкция по работе с порталом</div>
                    <nuxt-link to="#" class="support__container__manual__link">Инструкция по работе с порталом для пользователей (экспертов)</nuxt-link>
                    <nuxt-link to="#" class="support__container__manual__link">Инструкция по работе с порталом для разработчиков</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .support {
        width: inherit;
        background-color: #F9F9F9;
        padding: 2.8125rem 0 9.375rem 0;
    }

    .support__wrapper {
        width: 92%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto 2.1875rem auto;
    }

    .support__btn {width: 17.5rem;}

    .support__container {
        width: 49%;
        padding: 0 1.25rem 3.75rem .9375rem;
    }

    .support__container:first-child {
        background-color: white;
        border: 1px solid #EBEBEB;
    }

    .support__container__notify {
        margin: 0 0 3.125rem 0;
        font-size: 1.125rem;
        line-height: 170%;
    }

    .support__container__title {
        color: #898989;
        font-size: 1.25rem;
        font-weight: 400;
        margin: 1.875rem 0 2.5rem 0;
    }

    .contacts__wrapper {
        display: flex;
        justify-content: space-between;
    }

    .support__container__contacts__title {
        font-weight: bold;
        color: #1D1E25;
        font-size: 1.125rem;
        margin: 0 0 1.875rem 0;
    }

    .support__container__contacts__item {
        padding: 0 2.8125rem 1.75rem 0;
    }

    .support__container__contacts__item__post {
        color: #898989;;
        font-size: 1rem;
    }

    .support__container__contacts__item__fio,
    .support__container__contacts__item__phone,
    .support__container__contacts__item__mail {
        color: #1D1E25;
        font-size: 1.125rem;
    }

    .support__container__manual {
        width: 100%;
        background-color: white;
        margin: 4.375rem 0 0 0;
        padding: 1.875rem .9375rem 3.75rem .9375rem;
        border: 1px solid #EBEBEB;
    }

    .support__container__manual__title {
        font-size: 1.25rem;
        color: #898989;
        margin: 0 0 2.5rem 0;
    }
    .support__container__manual__link {
        display: block;
        font-size: 1.125rem;
        color: #F1795F;;
        border-bottom: 1px solid #F5DBD6;
    }

    .support__container__manual__link:nth-of-type(1) {margin: 0 0 1.125rem 0;}

    .support__container:nth-of-type(2) .support__container__contacts__item__phone {padding: 0 11.875rem 0 0;}
    .support__container:nth-of-type(1) .support__container__contacts__item:last-child {padding-bottom: 0;}

</style>
