
// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
    // Get and trim the input value
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText === "") {
      alert("Please enter a task.");
      return; // Exit function if input is empty
    }

    // Create new li element for the task
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';

    // Attach event listener to remove button to delete the task
    removeButton.onclick = function() {
      taskList.removeChild(taskItem);
    };

    // Append remove button to task item
    taskItem.appendChild(removeButton);

    // Append task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field after adding the task
    taskInput.value = "";
  }

  // Attach event listener to the add button to call addTask
  addButton.addEventListener('click', addTask);

  // Attach event listener to input field to allow adding task on 'Enter' key press
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});

