const inputBox = document.querySelector(".task");
const addBtn = document.querySelector(".add");
const toDoList = document.querySelector(".todolist");

console.log(inputBox);

addBtn.addEventListener("click", () => {
    if(inputBox.value.trim() === ""){
        alert("Enter a task");
    }else{
       

        let task = document.createElement("li");
        task.textContent = inputBox.value;

        toDoList.appendChild(task);
        inputBox.value = "";

        let span = document.createElement("span");
        span.innerHTML = ('<i class="fa-solid fa-x"></i>')
        task.appendChild(span);
        
      task.addEventListener("click", () => {
        task.classList.toggle("checked");
    })

    span.addEventListener ("click" , () => {
        task.remove();

    });
}
});

