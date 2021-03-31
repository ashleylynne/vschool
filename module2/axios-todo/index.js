// Part 1 - GET


// GET requests


// Display All Todos at top of page. This will be the main container where all elements will go

const list = document.getElementById("list")

// GET all

// Get request
axios.get("https://api.vschool.io/simpfriedrice/todo")
    .then(res => {
        // log response
        console.log(res)
        // user creates todos variable
        const todos = res.data
    // List ToDos Loop
    for(let i = 0; i < todos.length; i++) {
        makeOne(todos[i])
    }
})
    .catch(err => {
        console.log(err)
    });

// Create one to do

function makeOne(todo){
    // Create div container
    const container = document.createElement("div")
    // Create h1 element
    const h1 = document.createElement("h1")
    // add description
    const p = document.createElement("p")
    // add img
    const img = document.createElement("img")
    // make a new input
    const newInput = document.createElement("input");

    // Create title
    h1.textContent = todo.title
    // add description
    p.textContent = todo.description
    // define img
    img.src = todo.imgUrl
    // make it a checkbox
    newInput.type = "checkbox";
    // add text
    newInput.textContent = "";
    // Define checked box = completed todo
    newInput.checked = todo.completed
    // Append element to page
    document.body.appendChild(h1)
    // append to div
    document.body.appendChild(newInput)
    // Append new div to list
    list.appendChild(container)
    // Append new h1 to div
    container.appendChild(h1)
    // Append user input to div (checked box)
    container.appendChild(newInput)
    
    // addEventListener take 2 arguments, action and the function
    newInput.addEventListener("change", function(e) {
        const completedToDo = {
            completed: e.target.checked
        
        }
        axios.put("https://api.vschool.io/simpfriedrice/todo/" + todo._id, completedToDo)
            // This should fire off a linethrough when the todo is completeted but it is giving me an 'undefined' error. trying to debug
            .then(res => {
                if(res.data.completed){
                    h1.style.textDecoration = "line-through"
                } else {
                    h1.style.textDecoration = "none"
                }
            });
    });

    // Part 3 Put
    // add put button for each todo
    // create button element
    const putBtn = document.createElement("button")
    putBtn.textContent = "put"
    // append to the todo
    h1.appendChild(putBtn)
    // add event listener
    putBtn.addEventListener("submit", function(e){
        e.preventDefault();
        axios.put("https://api.vschool.io/simpfriedrice/todo/" + todo._id, todo)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    })   

    // Part 4 Delete
    // add delete button for each todo
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "delete"
    // Append child
    h1.appendChild(deleteBtn)
    deleteBtn.addEventListener("click", function(e){
        // Allows user to delete specific todo
        e.preventDefault();
        // delete request
        axios.delete("https://api.vschool.io/simpfriedrice/todo/" + todo._id, todo)
        .then(res=>{
            console.log(res)
            // delete child
            list.removeChild(container) 
            })
            .catch(err=>console.log(err))
        })

};

// Part 2 - POST
// The user can add new todos to their list. The new item should be 
// posted to the todo API so a future reload of the page will still display 
// that new todo item. Making the new todo appear without a refresh is extra credit, 
// but you're encouraged to attempt it.
// A user should be able to geive the item a title.
// A user should be able to give the item a price.
// A user should be able to give the item a description.
// A user should be able to attach an imgUrl to the item

// Add ToDos Form
const addToDoForm = document["add-todo-form"]

// Add Todo button

addToDoForm.addEventListener("submit", function(e){
    e.preventDefault();
    console.dir(addToDoForm)
    const toDoContent = addToDoForm.title.value
    console.log(toDoContent);
    const userPost= {
        title : toDoContent
    }
    postToDo(userPost);
});

// Post ToDo Function (currently this function works but I have to refresh the page first for it to show up)
function postToDo(userPost) {
    axios.post("https://api.vschool.io/simpfriedrice/todo", userPost)
    .then(res => {
        makeOne(res.data)
    })
    .catch(err => {
        console.log(err)
    });
}

// update
// Clearlist function to avoid data repeat on page
function clearList() {
    const list = document.getElementById('list')
    while(list.firstChild) {
        list.removeChild(list.firstChild)
    }
}
// List data
getToDos(todos);


