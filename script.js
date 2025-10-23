const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add new task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return; // ignore empty input

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("span");
  delBtn.textContent = "✖";
  delBtn.classList.add("delete");

  // remove task when clicked
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = ""; // clear input
});
