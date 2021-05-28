let display= document.getElementById('inputе');
let add = document.getElementById('btn');
let tasks = document.getElementById('outArr');
let completedTasks = document.getElementById('delet');

add.addEventListener('click',createTask);
let completedTaskContainer = [];
let taskContainer = [];
localStorage.setItem('todo', JSON.stringify(taskContainer));


function createTask (){
    
    let newItem =  {
      todo :  display.value,
    //   checked: false,
    }
    if(display.value == ""){
        alert('no task')
    }else{
        taskContainer.push(newItem);
    }
    display.value = "";
    displayTasks();
    // completedTask();
        localStorage.setItem('todo', JSON.stringify(taskContainer));
        
}

function displayTasks (){
    tasks.innerHTML = "";
    for (let i = 0; i < taskContainer.length; i++)
    tasks.innerHTML +=`<li><input  type = 'checkbox'  onclick="completedTask(${i})"  id="fluency(${i})" >
    ${taskContainer[i].todo}:<img src = 'img/dustbin_120823.png'  width='25' height='15' onclick='del(${i})'></li>`;
        
    // console.log(taskContainer)
    tasks.classList.add('outArr');
        
}

function del(index){
    taskContainer.splice(index,1);
    console.log(index);
    displayTasks ()
    
}       
   
function completedTask (){
    display.value = "";
    let idInput = document.getElementsByTagName('input');
    let length = idInput.length;
    console.log(idInput)
        
        for(var i=0;i<length;i++ ){
            if(idInput[i].checked){
            completedTaskContainer.push(idInput[i].nextSibling.nodeValue);   
            }
        }
        del();
         completedTasks.innerHTML = "";

        for (let i = 0; i < completedTaskContainer.length; i++){ 
        completedTasks.innerHTML+= `<li>${completedTaskContainer[i]}:<img src = 'img/dustbin_120823.png'  width='25' height='15' onclick='dels(${i})'></li>`;
      
    }
        completedTasks.classList.add('delet');
        console.log(completedTaskContainer)
        
            
            
}     

function dels(index){

    completedTaskContainer.splice(index,1);
    console.log(index);
    completedTask ()
            
}       
