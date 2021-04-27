<template>
  <div id="app">
    <div class="header">
         <el-link type="primary">About</el-link>
    </div>
    <div class="app__container">
        <InputComponent v-on:addTask="addTask"></InputComponent>
        <TaskListComponent v-on:removeTask="removeTask"></TaskListComponent>
    </div>

  </div>

</template>

<script>
import InputComponent from "./components/InputComponent"
import TaskListComponent from "./components/TaskListComponent"
import {Task} from './model/models'
import ElLink from "element-ui/lib/link"

// import axios from "axios";

export default {
  name: 'App',
  components: {
    InputComponent,
    TaskListComponent,
    ElLink
  },
  data(){
    return {
    }
  },
  computed:{
    taskList(){
      return this.$store.state.taskList;
    }
  },
  created(){
    this.$store.dispatch("getAllTask");
    //  axios
    //   .get('http://localhost:4040/api/getAllTask')
    //   .then(res => {
    //     if(res && res.data && res.data.data && res.data.data.length){
    //       let allTaskList = res.data.data;
    //       allTaskList.forEach(task=> this.taskList.push(task));
    //     }
    //   });
  },
  methods:{
      addTask(task){
      //   let newTask = new Task(task);
      //  this.$store.dispatch("addTask",newTask).then(res =>{
      //     this.$store.commit("addTask",{
      //       ...newTask,
      //       "id":res.data.id
      //     })
      //   }).catch(err=>{
      //     console.error("error adding");
      //   })
          
      },
      removeTask(index){
        // if(this.$store.state.taskList[index]){
        //     this.$store.dispatch("removeTask",this.taskList[index].id)
        // }
      }
  }
}
</script>

<style lang="scss">
body{
    margin:0;
}
.header{
    background-color:white;
    border-bottom:1px solid #d7dae2;
    padding:24px;
    text-align:left;
}

.app{
    &__container{
        margin-top:24px;
        border:2px solid #d7dae2;
        border-radius:6px;
        max-width:768px;
        margin:24px auto;
       
    }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
