const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const add= document.getElementById('add');
const inputtask= document.getElementById('new-task')
const complete_task= document.getElementById('complete');
const incomplete_task= document.getElementById('incomplete');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        
        inputtask.style.background='transparent'
        
        add.style.background= 'rgb(250, 249, 249)';
        
        incomplete_task.style.background='rgb(250, 249, 249)'
        complete_task.style.background='rgb(250, 249, 249)'


        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';

        add.style.background= 'grey';


        inputtask.style.background='#3c3535';

        incomplete_task.style.background='#3c3535'
        complete_task.style.background='#3c3535'
    }
});