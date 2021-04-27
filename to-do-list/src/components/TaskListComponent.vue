<template>
    <div class="taskList">
        <ul class="taskList__container" v-if="taskList && taskList.length">
            <li class="taskList__task" v-for="(task,index) in taskList" :key="index">
                <el-checkbox v-model="task.checked" v-on:change="onChecked($event,task.id)">{{task.task}}</el-checkbox>
                <span v-on:click="removeTask(index)" class="el-icon-close"></span>
            </li>
        </ul>
        <p class="no-items" v-else>
            No Items
        </p>
    </div>
</template>

<script>
import ElCheckbox from "element-ui/lib/checkbox"
export default {
  name: 'TaskListComponent',
  components:{
      ElCheckbox
  },
  data(){
      return {
      }
  },
  props:{
    // taskList: {
    //     default: ()=>[
    //         {
    //             checked:false,
    //             task:"doing othing."
    //         }
    //     ]
    // },
  },
  computed:{
      taskList(){
          return this.$store.state.taskList;
      }
  },
  methods:{
      removeTask:function(index){
            this.$emit("removeTask",index);
            this.$store.dispatch("removeTask",this.taskList[index].id)

      },
      onChecked:function($event,taskId){
        this.$store.dispatch("onChecked",{taskId,checked:$event});

      }
  }
}
</script>

<style lang="scss">
     .taskList{
         &__container{
             padding-inline-start: 0;
             margin-block-start: 0;
             margin-block-end:0;
         }

         &__task{
            list-style:none;
            text-align:left;
            display:flex;
            padding:16px;

            .el-icon-close{
                margin-left:auto;
                cursor:pointer;
            }

             &:hover{
                 background-color:rgb(222, 230, 241);
             }

         }
         .no-items{
            color:#d7dae2;
        }
         
     }
</style>