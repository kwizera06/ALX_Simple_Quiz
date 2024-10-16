  // Wait for the DOM to be fully loaded before executing the script
  document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage and display them
    function loadTasks() {
      // Get stored tasks from Local Storage, or initialize an empty array if none are found
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

      // Loop through the stored tasks and add each one to the DOM
      storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save the task again
    }

    // Function to add a new task to the list
    function addTask(taskText, save = true) {
      // Create new li element for the task
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;

      // Create a remove button for the task
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.className = 'remove-btn';

      // Attach event listener to remove button to delete the task
      removeButton.onclick = function() {
        taskList.removeChild(taskItem);
        removeTaskFromLocalStorage(taskText); // Remove the task from Local Storage
      };

      // Append remove button to task item and task item to the task list
      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);

      // Clear the input field after adding the task
      taskInput.value = "";

      // Save the task to Local Storage if the save flag is true
      if (save) {
        saveTaskToLocalStorage(taskText);
      }
    }

    // Function to save a task to Local Storage
    function saveTaskToLocalStorage(taskText) {
      // Get the current tasks from Local Storage
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

      // Add the new task to the array
      storedTasks.push(taskText);

      // Save the updated task list back to Local Storage
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Function to remove a task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
      // Get the current tasks from Local Storage
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

      // Filter out the task that matches the taskText
      const updatedTasks = storedTasks.filter(task => task !== taskText);

      // Save the updated task list back to Local Storage
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Attach event listener to the add button to add a task
    addButton.addEventListener('click', function() {
      const taskText = taskInput.value.trim();

      // Check if the input is not empty
      if (taskText === "") {
        alert("Please enter a task.");
      } else {
        addTask(taskText);
      }
    });

    // Attach event listener to allow adding a task by pressing the 'Enter' key
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText === "") {
          alert("Please enter a task.");
        } else {
          addTask(taskText);
        }
      }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
  });