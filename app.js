const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')


//  load all eventListeners

loadEvebtListenets()

function loadEvebtListenets () {
//    add task event
    form.addEventListener('submit', addTask)

    // remove task event
    taskList.addEventListener('click', removeTask)

    // clear task event
    clearBtn.addEventListener('click', clearTasks)

    // Filter tasks event 
    filter.addEventListener('keyup', filterTasks)
}

// Add task
function addTask(e) {
    if(taskInput.value === ''){
        alert(' Add a Task')
    }
    // create li element
    const li = document.createElement('li');
    // Add class 
    li.className = 'collectoin-item'
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value))
    // Create new link element
    const link = document.createElement('a')
    // add class to a
    link.className = 'delete-item secondary-content'
    // add icon html
    link.innerHTML = '<i class = "fa fa-remove">'
    // append the link to li
    li.appendChild(link)
    console.log(li)
    // append li to ul
    taskList.appendChild(li)
    // clear input
    taskInput.value =''
    e.preventDefault()
}

// Remove Task

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item') ) {
        const collectionItem = document.querySelector('.collectoin-item')
        if(confirm(`Are You Sure Delete Item: ${collectionItem.textContent}`)){
            e.target.parentElement.parentElement.remove()
        }
        
    }
    
}

// clear tasks
function clearTasks() {
    if(confirm('Are You Sure Clear All task'))
    taskList.innerHTML = '';
}


// filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase()
    
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!= -1){
            task.style.display = 'block'
        }else {
            task.style.display = 'none'
        }
    })
}
