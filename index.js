const todoInput = document.getElementById('todoInput');

todoInput.addEventListener('keyup', function (event){

    if(event.key != 'Enter' || event.keyCode != 13 || todoInput.value.trim() === ""){
        return;
    }

    const list = document.getElementById('list')
    const inputValue = todoInput.value;

    const newTodo = document.createElement('li');
    const newContent = document.createTextNode(inputValue);      

    newTodo.appendChild(newContent);
    list.appendChild(newTodo);

    if (event.key === 'Enter' || event.keyCode === 13) {
        onfocus= this.value='';
    }

});