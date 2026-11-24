export {}; 
type Priority = 'LOW'| 'MEDIUM'| 'HIGH';

interface Task {
    id:number;
    title:string;
    completed:boolean;
    priority:Priority;
    dueDate?:string | undefined;
}

const tasks: Task[] = [];
let nextID: number = 1;


function addTask (title:string, priority:Priority, dueDate?:string): Task {
    const newTask: Task = {
        id: nextID++,
        title: title,
        completed: false,
        priority: priority,
        dueDate: dueDate,
    };
    tasks.push(newTask);
    return newTask;
}

function toggleTaskCompletion(id:number): void{
    const task=tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
    } else {
        console.log(`Task with ID ${id} not found`);        
    }
}

function getPendingTasks(): Task[] {
    return tasks.filter(task => !task.completed);
}

// addTask(12345, "HIGH");
// addTask("Fix Server Bug", "URGENT");
// toggleTaskCompletion("1");