const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const add= document.getElementById('add');
const input_task= document.getElementById('new-task')
const todo_container= document.getElementById('todo-container');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        input_task.style.background='transparent'

        add.style.background= '#ffffff';

        todo_container.style.backgroundColor='#ededed'

        body.style.background = 'white';
        body.style.color = '#000000';
    }else{
        input_task.style.background='#212121';

        add.style.background= '#373737';

        todo_container.style.backgroundColor='#212121';

        body.style.background = '#0c0c0c';
        body.style.color = '#ffffff';
    }
});