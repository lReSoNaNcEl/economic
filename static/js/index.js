/**
 * Возвращает массив из дочерних элементов DOM узла.
 *
 * @param {String} className Название класса родительского элемента.
 * @returns {Array}
 */
const parseHTMLCollection = (className) => {
    const collection = document.getElementsByClassName(className);
    let data = [];
    for (let i = 0; i <= collection.length; i++) {
        data.push(collection[i]);
    }
    data.pop();
    return data;
};
