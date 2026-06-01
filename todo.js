const body = document.getElementById("todo-body");
const btn = document.querySelector("button");

const task = document.createElement("p");
body.insertBefore(task, btn);

const status = document.createElement("p");
body.insertBefore(status, btn);

btn.addEventListener("click", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/7");
    const todo = await response.json();

    task.innerText = todo.title;
    status.innerText = todo.completed ? "completed" : "not completed";
})

// const loadTodo = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/7");
//     const todo = await response.json();
//     return todo;
// }

// const displayTodo = () => {
//     btn.addEventListener("click", async () => {
//         const todo = loadTodo();
//         task.innerText = todo.title;
//         status.innerText = todo.completed;
//     })
// }

// displayTodo();

