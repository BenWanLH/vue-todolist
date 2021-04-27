<template>
  <div class="app" id="app">
    <div class="header">
         <el-link type="primary">About</el-link>
    </div>
    <div class="app__container">
        <InputComponent v-on:addTask="addTask"></InputComponent>
        <TaskListComponent v-on:removeTask="removeTask"></TaskListComponent>
    </div>
    <el-alert
      :class="{ active: displayAlert }"
      title="ERROR"
      type="error"
      description="There was an error with your request, Please try again later"
      show-icon>
  </el-alert>
  </div>

</template>

<script>
import InputComponent from "./components/InputComponent"
import TaskListComponent from "./components/TaskListComponent"
import ElAlert from "element-ui/lib/alert"
import {Task} from './model/models'
import ElLink from "element-ui/lib/link"

// import axios from "axios";

export default {
  name: 'App',
  components: {
    InputComponent,
    TaskListComponent,
    ElLink,
    ElAlert
  },
  data(){
    return {
    }
  },
  computed:{
    taskList(){
      return this.$store.state.taskList;
    },
    displayAlert(){
      return this.$store.state.displayAlert.displayAlert;
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
      },
      removeTask(index){
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
    >.el-alert{
         position:sticky; 
         max-width:768px;
         left:50%;
         transform:translateX(-50%);
         text-align:left;
         display:none;
         &.active{
           display:flex;
         }
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
