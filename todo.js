document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const task = document.getElementById('taskInput').value;
    const deadline = document.getElementById('deadlineInput').value;
    const priority = document.getElementById('prioritySelect').value;

    // Create new task item
    const taskItem = document.createElement('li');
    taskItem.textContent = `${task} - Deadline: ${deadline}`;
    taskItem.classList.add(priority);

    // Append task item to task list
    document.getElementById('taskList').appendChild(taskItem);

    // Clear form inputs
    document.getElementById('taskInput').value = '';
    document.getElementById('deadlineInput').value = '';
});
