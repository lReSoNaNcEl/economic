<template>
    <div class="filter">

        <div class="filter__wrap">
            <div class="filter__wrap__item">
                <label for="procedure" class="filter__name">Процедура</label>
                <select class="filter__field" id="procedure" placeholher="Нажмите, чтобы выбрать">
                    <option value="default">Нажмите, чтобы выбрать</option>
                    <option value="">test</option>
                    <option value="">test</option>
                    <option value="">test</option>
                </select>
            </div>

            <div class="filter__wrap__item">
                <label for="view" class="filter__name">Вид</label>
                <select class="filter__field" id="view" placeholher="Нажмите, чтобы выбрать">
                    <option value="default">Нажмите, чтобы выбрать</option>
                    <option value="">test</option>
                    <option value="">test</option>
                    <option value="">test</option>
                </select>
            </div>


            <div class="filter__wrap__item">
                <label for="phase" class="filter__name">Этап</label>
                <select class="filter__field" id="phase" placeholher="Нажмите, чтобы выбрать">
                    <option value="default">Нажмите, чтобы выбрать</option>
                    <option value="">test</option>
                    <option value="">test</option>
                    <option value="">test</option>
                </select>
            </div>
        </div>

        <div class="filter__wrap">
            <div class="filter__wrap__item">
                <label for="developer" class="filter__name">Разработчик</label>
                <select class="filter__field" id="developer" placeholher="Нажмите, чтобы выбрать">
                    <option value="default">Нажмите, чтобы выбрать</option>
                    <option value="">test</option>
                    <option value="">test</option>
                    <option value="">test</option>
                </select>
            </div>

            <div class="filter__wrap__item">
                <label for="status" class="filter__name">Статус</label>
                <select class="filter__field" id="status" placeholher="Нажмите, чтобы выбрать">
                    <option value="default">Нажмите, чтобы выбрать</option>
                    <option value="">test</option>
                    <option value="">test</option>
                    <option value="">test</option>
                </select>
            </div>
        </div>

        <div class="filter__wrap">
            <div class="filter__wrap__item">
                <label for="activity" class="filter__name">Вид экономической деятельности</label>
                <select class="filter__field" id="activity" placeholher="Нажмите, чтобы выбрать">
                    <option value="default">Нажмите, чтобы выбрать</option>
                    <option value="">test</option>
                    <option value="">test</option>
                    <option value="">test</option>
                </select>
            </div>

            <div class="filter__wrap__item">
                <label for="date_start" class="filter__name">Период публикации</label>
                <input class="filter__field" id="date_start" type="date"/>
                <img class="filter__icon" src="img/calendar.svg"/>
            </div>

            <div class="filter__wrap__item">
                <label for="date_end" class="filter__name hidden">Окончание</label>
                <input class="filter__field" id="date_end" type="date"/>
                <img class="filter__icon" src="img/calendar.svg"/>
            </div>
        </div>

        <div class="filter__control">
                <button class="filter__control__reset">
                    <img class="filter__control__cross" src="img/cross.svg"/>
                    <p>Сбросить фильтры</p>
                </button>
                <button class="filter__control__btn btn">Применить фильтры</button>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

    .filter {
        width: inherit;
        background-color: white;
        padding: 1.875rem 0 3.125rem 0;
    }

    .filter__name {
        color: #1D1E25;
        font-size: 1.125rem;
        margin: 0 0 .625rem 0;
    }

    .filter__field {
        border: 1px solid #E7E7E7;
        height: 3.125rem;
        box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 5px;font-size: 1.125rem;
        letter-spacing: .01rem;
        color: #898989;
        padding: 0 1.5625rem;

    }

    .filter__wrap {
        width: 92%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin: 0 auto 1.5625rem auto;
        padding: 0 13rem 0 0;
    }

    .filter__wrap__item {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .filter__control {
        width: 92%;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        letter-spacing: .01rem
    }

    .filter__control__cross {
        width: 2rem;
        padding: 0 .9375rem 0 0;
    }

    .filter__control__reset {
        background-color: transparent;
        color: #898989;
        font-size: 1.125rem;
        display: flex;
        cursor: pointer;
        height: 3.125rem;
    }

    .filter__control__btn {
        width: 15.625rem;
        margin: 0 0 0 2.8125rem;
    }

    .filter__field[id="procedure"],
    .filter__field[id="view"],
    .filter__field[id="phase"],
    .filter__field[id="status"] {
        width: 22.5rem;
    }

    .filter__field[id="developer"],
    .filter__field[id="activity"] {
        width: 46.25rem;
    }

    .filter__field[id="date_start"],
    .filter__field[id="date_end"] {
        width: 10.625rem;
    }


    .filter__icon {
        position: absolute;
        width: 1.5rem;
        top: 2.8125rem;
        left: 8.125rem;
    }


</style>
