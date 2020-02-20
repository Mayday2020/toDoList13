//'use strict';
let headerInput = document.querySelector('.header-input'),          // Поле ввода
    headerButton = document.querySelector('.header-button'),        // Плюс
    toDo = document.querySelector('#todo'),                         // Список невыполненных дел
    completed = document.querySelector('#completed'),               // Список выполненных дел
    toDoItem = document.querySelectorAll('.todo-item'),             // Элемент списка, дело
    toDoRemove = document.querySelectorAll('.todo-remove'),            // Корзина
    toDoComplete = document.querySelector('.todo-complete'),        // Галочка
    toDoButtons = document.querySelector('.todo-buttons');          // Блок с кнопками

let obj = {
    letsDoThis(event){
        event.preventDefault();
        let newElement = document.createElement('li');
        newElement.textContent = headerInput.value;
        newElement.className = 'todo-item';
        toDo.appendChild(newElement);
        headerInput.value = '';

        newDivElem = document.createElement('div');
        newDivElem.className = 'todo-buttons';
        newElement.appendChild(newDivElem);

        newElemRemove = document.createElement('button');
        newElemRemove.className = 'todo-remove';
        newDivElem.appendChild(newElemRemove);

        newElemComp = document.createElement('button');
        newElemComp.className = 'todo-complete';
        newDivElem.appendChild(newElemComp);
        console.log('Добавляю дело');
    },
    deleteItem(){
        this.remove();
        console.log('Удаляю дело');
    },
    done(){
        completed.appendChild(this.newElement);
        console.log('Дело сделано');
    },
    eventsListeners(){
        headerButton.addEventListener('click', this.letsDoThis);
        toDoRemove.addEventListener('click', this.deleteItem);
        toDoComplete.addEventListener('click', this.done);
    },
};
obj.eventsListeners();
