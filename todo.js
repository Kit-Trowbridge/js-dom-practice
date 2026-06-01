const body = document.getElementById("todo-body");
const btn = document.querySelector("button");

const task = document.createElement("p");
body.insertBefore(task, btn);

const status = document.createElement("p");
body.insertBefore(status, btn);

const randomTask = () => {
    return Math.ceil(Math.random() * 200);
}

btn.addEventListener("click", async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomTask()}`);
    const todo = await response.json();

    task.innerText = todo.title;
    status.innerText = `${!todo.completed ? "not " : ""}completed`;
})

