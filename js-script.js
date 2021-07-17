
let btn = document.getElementById('add')
btn.addEventListener('click', function () {
    let ul = document.getElementById('list');
    let list = ul.innerHTML;
    let task = document.getElementById('task').value;
    list+= `<li class="task-to-do">${task}<button>Delete</button></li>`
    ul.innerHTML = list;


    // чистим инпут
    let refresh = document.getElementById('task');
    refresh.value='';

});   

    // меняем цвет пункта списка
let ul = document.getElementById('list');
ul.addEventListener('click', (event) =>{
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
    }
    // опциональное задание
    if(event.target.tagName === 'BUTTON') {
        event.target.closest('li').remove();
       
    }
});
    

