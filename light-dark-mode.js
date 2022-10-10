const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const add= document.getElementById('add');
const input_task= document.getElementById('new-task')
const todo_container= document.getElementById('todo-container');
const title = document.querySelectorAll('.title');

const colors = {
    green_dark: "#547340",
    green_light: "#a2c98a"
}
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        input_task.style.background='transparent'
        input_task.style.color='black';

        add.style.background= '#ffffff';

        todo_container.style.backgroundColor='#ededed'

        body.style.background = 'white';
        body.style.color = '#000000';

        title.forEach(t => t.style.color = colors.green_dark);
    }else{
        input_task.style.background='#212121';

        add.style.background= '#373737';
        input_task.style.color='white';

        todo_container.style.backgroundColor='#212121';

        body.style.background = '#0c0c0c';
        body.style.color = '#ffffff';

        title.forEach(t => t.style.color = colors.green_light);
    }
});