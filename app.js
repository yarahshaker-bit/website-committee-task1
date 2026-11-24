"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks = [];
let nextID = 1;
function addTask(title, priority, dueDate) {
    const newTask = {
        id: nextID++,
        title: title,
        completed: false,
        priority: priority,
        dueDate: dueDate,
    };
    tasks.push(newTask);
    return newTask;
}
function toggleTaskCompletion(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
    }
    else {
        console.log(`Task with ID ${id} not found`);
    }
}
function getPendingTasks() {
    return tasks.filter(task => !task.completed);
}
// addTask(12345, "HIGH");
// addTask("Fix Server Bug", "URGENT");
// toggleTaskCompletion("1");
//# sourceMappingURL=app.js.map