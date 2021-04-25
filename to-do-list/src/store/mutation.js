
export default function getMutations() {
    return {
        getAllTask({ taskList }, tasks) {
            tasks.forEach(task => taskList.push(task));
        },
        addTask({ taskList }, task) {
            taskList.push(task);
        },
        removeTask({ taskList }, taskId) {
            let index = taskList.findIndex(task => task.id === taskId);
            if (index || index === 0) {
                console.log("removing task");
                taskList.splice(index, 1);
            }
        }
    }
}