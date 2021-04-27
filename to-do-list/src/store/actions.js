import * as api from "../api/api"


export default function getActions () {
    return {
        getAllTask({ commit }) {
            return api.getAllTask().then(res => {
                    if (res && res.data && res.data.data && res.data.data.length) {
                        commit("getAllTask", res.data.data);
                    }
                });
        },
        addTask({ commit }, newTask) {
            return api.addTask(newTask).then(res=>{
                commit("addTask",{
                    ...newTask,
                    "id":res.data.id
                })
            });
        },
        removeTask({ commit }, taskId) {
            return api.removeTask(taskId).then(res=>{
                commit("removeTask",taskId);
            });
        },
        onChecked({commit},{taskId,checked}){
            return api.onChecked({taskId,checked}).then(res=>{
                commit("onChecked",{taskId,checked});
            });
        },
        setAlert({commit},display){
            commit("setAlert",display);
            if(display){
                setTimeout(function(){
                    commit("setAlert",!display);
                },5000);
            }
        }
    }
    
}