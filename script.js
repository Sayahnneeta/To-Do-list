const todoForm= document.querySelector('todo-form');
const todoInput = document.querySelector('.input-btn');
const todoItem =document.querySelector('.items');

let todos = [];

todoForm.addEventListener('submit',function(event)
{
    event.preventDefault();
    addingTodos(todoInput.value);
})

function addingTodos(item)
{
    if(item != '')
    {
        const todo =
        {
            id: Date.now(),
            name=item,
            completed: false
        };
        todos.push(todo);
        addToLocalStorage(todos);
        todoInput.value ='';
    }
}

function renderTodos(todos)
{
    todoItem.innerHTML = '';
    todos.forEach(function(item)
    {
        const checked = item.completed ?'checked' : null;

        const li = document.createElement('li');
        li.setAttribute('class','item');
        li.setAttribute('data-key', item.id);
        
    })
}