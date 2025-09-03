todoBtn = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => displayTodo(data))

}

displayTodo = (posts) => {
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML = "";
// {
//     "userId": 10,
//     "id": 188,
//     "title": "vel non beatae est",
//     "completed": true
// }
    posts.forEach(post => {
        console.log(post);
        
        const todocontain = document.createElement("div")
        todocontain.innerHTML = `
        <div class = "todo-card">
        <p>${post.id}</p>
        <p>${post.completed === true ?`<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}</p>
        <p>${post.title}</p>
        </div>
        
        `;
        todoContainer.append(todocontain)

    })
}