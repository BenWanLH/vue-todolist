<template>
    <div class="inputComponent__container">
        <el-input  placeholder="Please input" v-model="input"></el-input>
        <el-button @click="emitValue" type="primary" v-bind:disabled="!input">Add</el-button>
    </div>
</template>

<script>
import ElButton from 'element-ui/lib/button'
import ElInput from 'element-ui/lib/input'
import {Task} from '../model/models'

export default {
  name: 'InputComponent',
  components:{
      ElButton,
      ElInput
  },
  data(){
      return {
          input:""
      }
  },
  methods:{
        emitValue:function(){
            if(this.input){
                let newTask = new Task(this.input);
                this.$store.dispatch("addTask",newTask).then(res =>{
                    this.input="";
                }).catch(err=>{
                    console.error("error adding");
                })
            }
        }
  }
}
</script>

<style lang="scss">
     .inputComponent{
            &__container{
                display:flex;
                border-bottom:1px solid #d7dae2;
                padding:16px;

                .el-input{
                    margin-right:12px;
                }
            }
            
        }
</style>

