const todoTextarea = document.getElementById('todo-textarea','todo-textarea-2','todo-textarea-3',);
const addTodoBtn = document.getElementById('add-todo-btn','add-todo-btn-2','add-todo-btn-3',);
const todoContainer = document.getElementById('todo-container','todo-container-2','todo-container-3',);

const state = {
   todoItems: [],
};

const setTodoItems = items => {
    state.todoItems = items;
};

//set a new array;
const addTodoItem = item => {
    const todoItemsCopy = state.todoItems.slice();
    todoItemsCopy.push(item);
    setTodoItems(todoItemsCopy);
}



const removeTodoItem = index =>{ 
    const todoItemsCopy = state.todoItems.slice();
    todoItemsCopy.splice (index,1);
    setTodoItems (todoItemsCopy);
};//设置removeTodoItem;
    


const buildTodoItem = (item , index)=> {
    const todoEl = document.createElement('article');
    const textEl = document.createElement('p');
    const deleteBtn = document.createElement('button');

    deleteBtn.addEventListener('click', evt => {
       removeTodoItem(index);//实行removeTodoItem;
       buildTodoItems(state.todoItems);

});
    deleteBtn.innerHTML = 'delete';


    textEl.innerHTML = item;

    todoEl.append(textEl,deleteBtn);
    return todoEl;
};

const buildTodoItems = items =>{
    todoContainer.innerHTML = '';
    const todoItemEls = items.map(buildTodoItem);
    todoContainer.append(...todoItemEls);
}



const main = () => {
   addTodoBtn.addEventListener('click', evt => {
       const todoValue = todoTextarea.value;
       if (todoValue.length >0) {
           addTodoItem(todoValue);
          buildTodoItems(state.todoItems);
       }
   });
};

main();