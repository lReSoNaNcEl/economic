<template>
    <section class="ld">
        <h2 class="ld__title title">Нормативные правовые документы</h2>
        <div class="ld__docs">

            <nuxt-link v-for="doc in docs" to="#" class="ld__docs__item">
                <div class="ld__docs__item__header">
                    <div class="ld__docs__item__header__title">{{doc.title}}</div>
                    <img class="ld__docs__item__header__icon" src="img/word.svg">
                </div>
                <div class="ld__docs__item__header__description">{{doc.description}}</div>
            </nuxt-link>

        </div>
    </section>
</template>

<script>
    import MaterialItem from '@/components/MaterialItem';
    export default {
        components: {
            MaterialItem
        },
        data: function () {
            return {
                docs: [
                    {
                        id: 1,
                        title: 'Выдержки из закона Российской Федерации',
                        description: '«Об общих принципах организации законодательных (представительных) и исполнительных органов государственной власти субъектов российской федерации»'
                    },                    {
                        id: 2,
                        title: 'Оценка регулирующего воздействия',
                        description: 'Процедура оценки регулирующего воздействия позволяет выявить и оценить влияние законопроекта на экономику субъекта РФ в случае...'
                    },                    {
                        id: 3,
                        title: 'Экспертиза действующих актов, оценка фактического воздействия',
                        description: 'Экспертиза действующих актов призвана подтвердить эффективность принятых законопроектов и выявить их...'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .ld {
        width: inherit;
        background-color: #F9F9F9;
        padding: 0 0 6.25rem 0;
    }

    .ld__title {
        margin: 0 0 0 4%;
        padding: 3.125rem 0 2.5rem 0;
    }

    .ld__docs {
        display: flex;
        justify-content: space-between;
        width: 92%;
        margin: 0 auto;
    }

    .ld__docs__item {
        width: 32%;
        background-color: #FFFFFF;
        padding: 1.25rem 1.25rem 5.625rem 1.25rem;
        border-radius: 8px;
        border: 1px solid #E7E7E7;
    }

    .ld__docs__item__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.125rem;
        margin: 0 0 2.1875rem 0;
    }

    .ld__docs__item__header__title {
        width: 80%;
        color: #898989;
        font-weight: 500;
        line-height: 130%;
    }

    .ld__docs__item__header__description {
        color: #1D1E25;
        font-weight: 400;
        line-height: 150%;
    }

</style>
