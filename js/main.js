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
        
        if (headerInput.value !== ''){
            headerButton.disabled = false;
            let newElem = document.createElement('li');
            newElem.innerHTML = headerInput.value + 
            "<div class='todo-buttons'>" +
                "<button class='todo-remove'></button>" +
                "<button class='todo-complete'></button>" +
            "</div>";
            newElem.className = 'todo-item';
            toDo.appendChild(newElem);
            headerInput.value = '';
            
            let deleteBtn = newElem.querySelector('.todo-remove');
            deleteBtn.addEventListener('click', this.deleteItem);
            let doneElem = newElem.querySelector('.todo-complete');
            doneElem.addEventListener('click', this.done);
        }
        
    },
    comeBack(){
        toDo.appendChild(this.parentNode.parentNode);
    },
    
    
    deleteItem(){
        this.parentNode.parentNode.remove();
        console.log('Удаляю дело');
        
    },
    done(){
        completed.appendChild(this.parentNode.parentNode);
        let complElem = completed.querySelector('todo-complete');
        complElem.addEventListener('click', this.comeBack.bind(this));
        console.log('Дело сделано');
    },
    eventsListeners(){
        headerButton.addEventListener('click', this.letsDoThis.bind(this));
        let _this = this;
        

        toDoRemove.forEach(function(item) {
            item.addEventListener('click', _this.deleteItem);
        }.bind(this)); 
        
        toDoComplete.forEach(function(item){    
            item.addEventListener('click', _this.done);
            
        }.bind(this));

    }
};

obj.eventsListeners();

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