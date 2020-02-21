//'use strict';
let headerInput = document.querySelector('.header-input'),          // Поле ввода
    headerButton = document.querySelector('.header-button'),        // Плюс
    toDo = document.querySelector('#todo'),                         // Список невыполненных дел
    completed = document.querySelector('#completed'),               // Список выполненных дел
    toDoItem = document.querySelectorAll('.todo-item'),             // Элемент списка, дело
    toDoRemove = document.querySelectorAll('.todo-remove'),            // Корзина
    toDoComplete = document.querySelectorAll('.todo-complete'),        // Галочка
    toDoButtons = document.querySelector('.todo-buttons');          // Блок с кнопками



let obj = {
    letsDoThis(event){
        event.preventDefault();
        let newElem = document.createElement('li');
        newElem.innerHTML = headerInput.value + 
            "<div class='todo-buttons'>" +
                "<button class='todo-remove'></button>" +
                "<button class='todo-complete'></button>" +
            "</div>";
        newElem.className = 'todo-item';
        toDo.appendChild(newElem);
        headerInput.value = '';
        
           console.log(this); 
                
        //   toDoComplete = document.querySelectorAll('.todo-complete');        // Галочка


    /*    let newElement = document.createElement('li');
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
        console.log('Добавляю дело');   */
        let deleteBtn = newElem.querySelector('.todo-remove');
    },
    deleteItem(item){
        this.parentNode.parentNode.remove();
        console.log('Удаляю дело');
        
    },
    done(){
        completed.appendChild(this.parentNode.parentNode);  
        console.log('Дело сделано');
    },
    eventsListeners(){
        headerButton.addEventListener('click', this.letsDoThis);
        var _this = this;
        
        
        toDoRemove.forEach(function(item) {
            item.addEventListener('click', _this.deleteItem);
            
        }); 
        deleteBtn.forEach(function(item) {
            item.addEventListener('click', _this.deleteItem);
        }).bind(this);
        toDoComplete[0].addEventListener('click', this.done);
    },
};

obj.eventsListeners();
