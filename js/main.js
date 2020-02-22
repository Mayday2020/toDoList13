//'use strict';
// получаем элементы со страницы
const input = document.querySelector('.header-input'),              // поле ввода элемента
      btnAdd = document.getElementById('add'),                      // кнопка Добавить дело в верх.список
      toDoList = document.getElementById('todo'),                   // верх.список дел
      completeList = document.getElementById('completed'),          // нижн.список дел              
      btnDelete = document.querySelectorAll('.todo-remove'),        // кнопка Удалить
      toDoKey = 'toDo',                                             // ключ верх.списка в LS
      completedKey = 'completed';                                   // ключ нижн.списка в LS
let   toDoArr = localStorage.getItem(toDoKey) || [],                // массив верх.списка
      completedArr = localStorage.getItem(completedKey) || [];      // массив нижн.списка

    // перевод строк в массив верх.списка
if (typeof(toDoArr) === 'string') {
    toDoArr = toDoArr.split(',');
}
    // перевод строк в массив нижн.списка
if (typeof(completedArr) === 'string') {
    completedArr = completedArr.split(',');
}
    //добавление нового элемента в верх.список
const addElem = (text, list, anotherList) => {
    let newItem = document.createElement('li');
    newItem.classList = 'todo-item';
    newItem.textContent = text;
    newItem.innerHTML += '<div class="todo-buttons">' +
                            '<button class="todo-remove"></button>' +
                            '<button class="todo-complete"></button>' +
                            '</div>';
    let BtnDo = newItem.querySelector('.todo-complete');
    list.appendChild(newItem);
    newItem.querySelector('.todo-remove').addEventListener('click', (event) =>{
        event.target.parentNode.parentNode.remove();
        checkLS();
    });
    BtnDo.addEventListener('click', function (event) {
        moveElem(list, anotherList, this);
    });
    checkLS();
};
    // перенос дела в нижн.список
const moveElem = (fromList, toList, elem) => {
    toList.appendChild(elem.parentNode.parentNode);
    elem.removeEventListener('click', (event) => moveElem(fromList, toList, elem));
    elem.addEventListener('click', (event) => moveElem(toList, fromList, elem));
    checkLS();
};
    // добавляем в LS
const checkLS = () => {
    let items = [];
    toDoList.querySelectorAll('li').forEach(item => items.push(item.textContent.trim()));
    localStorage.setItem(toDoKey, items);
    items = [];
    completeList.querySelectorAll('li').forEach(item => items.push(item.textContent.trim()));
    localStorage.setItem(completedKey, items);
};   
    // проверка поля ввода и запуск addElem
btnAdd.addEventListener('click', (event) => {
    event.preventDefault();
    let value = input.value.trim();
    input.value = '';
    if (value !== ''){
        addElem(value, toDoList, completeList)
    }
});
    // удаляем элемент
btnDelete.forEach (item => item.addEventListener('click', (event) => {
    event.target.parentNode.parentNode.remove();
    checkLS();
}));
    // события существующим эдементам
toDoList.querySelectorAll('.todo-complete').forEach(item => item.addEventListener('click', (event) => moveElem(toDoList, completeList, item)));
completeList.querySelectorAll('.todo-complete').forEach(item => item.addEventListener('click', (event) => moveElem(completeList, toDoList, item)));
    // получаем элементы с LS 
toDoArr.forEach(item => addElem(item, toDoList, completeList));
completedArr.forEach(item => addElem(item, completeList, toDoList))








