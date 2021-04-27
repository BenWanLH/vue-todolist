import axios from "axios"
import store from "../store/store"

axios.interceptors.response.use(
    function(successRes) {
      return successRes;
    }, 
    function(error) {
        store.dispatch("setAlert",true);
        //store.dispatch("addTask",{task:"abc","checked":false});
        //store.dispatch("getTask");
        return Promise.reject(error);
    }
  );

export function getAllTask(){
    return axios.get(`${process.env.VUE_APP_API_URL}/api/getAllTask`)
}
export function addTask(newTask){
    return axios.post(`${process.env.VUE_APP_API_URL}/api/addTask`,newTask)
}
export function removeTask(taskId){
    return axios.delete(`${process.env.VUE_APP_API_URL}/api/removeTask/${taskId}`)
}
export function onChecked({taskId,checked}){
    return axios.post(`${process.env.VUE_APP_API_URL}/api/updateTask`, {taskId,checked})
} 