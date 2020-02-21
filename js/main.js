//'use strict';
let headerInput = document.querySelector('.header-input'),          // Поле ввода
    headerButton = document.querySelector('.header-button'),        // Плюс
    toDo = document.querySelector('#todo'),                         // Список невыполненных дел
    completed = document.querySelector('#completed'),               // Список выполненных дел

    toDoItem = document.querySelectorAll('.todo-item'),             // Элемент списка, дело
    toDoRemove = document.querySelectorAll('.todo-remove'),         // Корзина

    toDoComplete = toDo.querySelectorAll('.todo-complete'),        // Галочка верхний список
    toDoComppleteDone = completed.querySelectorAll('.todo-complete'); // Галочка Нижний список
    toDoButtons = document.querySelector('.todo-buttons');          // Блок с кнопками

///// func

let letsDoThis = function(event){
    event.preventDefault();
    if (headerInput.value.trim() !== ''){
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
        deleteBtn.addEventListener('click', deleteItem);
        let doneElem = newElem.querySelector('.todo-complete');
        doneElem.addEventListener('click', done);
    }
};
let comeBack = function(){
    toDo.appendChild(this.parentNode.parentNode);
    this.removeEventListener('click', comeBack);
    this.addEventListener('click', this.done); 
};
let deleteItem = function(){
    this.parentNode.parentNode.remove();
    console.log('Удаляю дело');
};
let done = function(){
    completed.appendChild(this.parentNode.parentNode);
    this.removeEventListener('click', done);
    this.addEventListener('click', this.comeback);
    console.log('Дело сделано');
};
let eventsListeners = function(){
    headerButton.addEventListener('click', letsDoThis);
    //let _this = this;
    
    toDoRemove.forEach(function(item) {
        item.addEventListener('click', this.deleteItem);
    }); 
    
    toDoComplete.forEach(function(item){    
        item.addEventListener('click', this.done);
    
    });
    toDoComppleteDone.forEach(function(item){    
        item.addEventListener('click', this.comeBack);
    
    });
};

eventsListeners();


/*
let obj = {
    letsDoThis(event){
        event.preventDefault();
        
        if (headerInput.value.trim() !== ''){
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
    comeBack(item){
        toDo.appendChild(this.parentNode.parentNode);
        this.removeEventListener('click', obj.comeBack);
        this.addEventListener('click', obj.done);
        
    },
    
    
    deleteItem(){
        this.parentNode.parentNode.remove();
        console.log('Удаляю дело');
        
    },
    done(){
        completed.appendChild(this.parentNode.parentNode);
        this.removeEventListener('click', obj.done);
        this.addEventListener('click', obj.comeback);
        console.log('Дело сделано');
    },
    eventsListeners(){
        headerButton.addEventListener('click', this.letsDoThis.bind(this));
        let _this = this;
        

        toDoRemove.forEach(function(item) {
            item.addEventListener('click', _this.deleteItem);
        }.bind(this)); 
        
        toDoComplete.forEach(function(item){    
            item.addEventListener('click', obj.done);
        
        }.bind(this));
        toDoComppleteDone.forEach(function(item){    
            item.addEventListener('click', _this.comeBack);
        
        }.bind(this));
    }
};

obj.eventsListeners(); */









