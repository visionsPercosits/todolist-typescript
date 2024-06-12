interface Task {
    id: number;
    description: string;
    completed: boolean;
}

class ToDoList {
    private tasks: Task[] = [];


    addTask(description: string): void {
        const task: Task = {id: this.tasks.length + 1, description, completed: false};
        this.tasks.push(task);
    }

    removeTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    completeTask(id: number): void {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = true;
        }
    }
}

