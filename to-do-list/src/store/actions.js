import axios from "axios";


export default function getActions () {
    return {
        getAllTask({ commit }) {
            axios
                .get('http://localhost:4040/api/getAllTask')
                .then(res => {
                    if (res && res.data && res.data.data && res.data.data.length) {
                        commit("getAllTask", res.data.data);
                    }
                });
        },
        addTask({ commit }, newTask) {
            return axios.post("http://localhost:4040/api/addTask", newTask);
        },
        removeTask({ commit }, taskId) {
            return axios.delete(`http://localhost:4040/api/removeTask/${taskId}`).then(res=>{
                commit("removeTask",taskId);
            });
        }
    }
    
}