function atribuir(){
    const todoInput = document.getElementById('todoInput').value;
    const list = document.getElementById('list');

    const newTodo = document.createElement('li');
    const newContent = document.createTextNode(todoInput);

    const vari = document.getElementById(newContent);
    vari.value = hello



    
    newTodo.appendChild(newContent)
    list.appendChild(newTodo)
    
    console.log(newContent);
    console.log(list);  
    
}