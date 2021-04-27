
export default function getMutations() {
    return {
        getAllTask({ taskList }, tasks) {
            tasks.forEach(task => {
                task.checked = !!task.checked;
                taskList.push(task);   
            });
                
        },
        addTask({ taskList }, task) {
            taskList.push(task);
        },
        removeTask({ taskList }, taskId) {
            let index = taskList.findIndex(task => task.id === taskId);
            if (index || index === 0) {
                taskList.splice(index, 1);
            }
        },
        onChecked({taskList},{taskId,checked}){
            let task = taskList.find(task=> task.id === taskId);
            if(task){
                task.checked=checked;
            }
        },
        setAlert({ displayAlert }, display) {
            displayAlert.displayAlert=display;
        },
    }
}