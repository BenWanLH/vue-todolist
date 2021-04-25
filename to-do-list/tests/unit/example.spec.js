import { mount, shallowMount,createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import InputComponent from '@/components/InputComponent.vue'
import TaskListComponent from "@/components/TaskListComponent"
import Vuex from 'vuex';
import App from "@/App.vue"

const localVue = createLocalVue()

localVue.use(Vuex)
jest.mock("axios", ()=>({
  get: ()=>Promise.resolve({data:{data:[{id:1,task:"abc",checked:0}]}}),
  post: ()=>Promise.resolve({id:1}),
  delete:()=> Promise.resolve({id:1})
}));
describe('UI test', () => {

  let store, state,mutations,actions

  beforeEach(() => {
    state = {
      taskList:[
        {id:1,task:"abc",checked:0},
        {id:2,task:"123",checked:0},
        {id:3,task:"xyz",checked:0},
      ]
    }
    mutations = {
      getAllTask: jest.fn(),
      addTask:jest.fn(),
      removeTask:jest.fn()
    }
    actions = {
      getAllTask: jest.fn(),
      addTask:jest.fn(),
      removeTask:jest.fn()
    }
    store = new Vuex.Store({
      actions,
      mutations,
      state
    })
    
  })

  it('renders add button as disabled when no input',()=>{
    const wrapper = mount(InputComponent,{
    });
    const button = wrapper.find("button");
    expect(button.attributes().disabled).toEqual('disabled');
  })

  it('renders button as enabled when input is filled',async ()=>{
    const wrapper = mount(InputComponent,{
    });
    const button = wrapper.find("button");
    const input = wrapper.find("input");
    input.setValue("123");
    await input.trigger("input");
    expect(button.attributes().disabled).toBeUndefined();

  })

  it('renders 3 task when there are 3 task in store',async ()=>{
    const wrapper = mount(TaskListComponent,{
      store,
      localVue
    });
    const tasks = wrapper.findAll(".taskList__task");
    expect(tasks.length).toEqual(3);
  })


})

describe("store", ()=>{
  let store, state,mutations,actions
  beforeEach(() => {
    state = {
      taskList:[{id:1,task:"abc",checked:"1234"}]
    }
    mutations = {
      getAllTask: jest.fn(),
      addTask:jest.fn(),
      removeTask:jest.fn()
    }
    actions = {
      getAllTask: jest.fn(),
      addTask:jest.fn(),
      removeTask:jest.fn()
    }
    store = new Vuex.Store({
      state,mutations,actions
    });
    
  })

 // el-button clicks cannot trigger their function 
  // it('checks addTask action was called',  ()=>{
    
  //   const wrapper = mount(App,{
  //     store,
  //     localVue 
  //   });
  //   expect(actions.getAllTask).toHaveBeenCalled();
  //   const inputComponent = wrapper.findComponent(InputComponent);
  //   const button = wrapper.find(".el-button");
  //   const input = wrapper.find("input");
  //   input.setValue("123");
  //   input.trigger("input");
  //   button.trigger("click");
    
  //   //expect(button.attributes().disabled).toEqual('disabled');
  //   expect(actions.addTask).toHaveBeenCalled();
  // })

  it('expect getAllTask action to be called when app mounts', ()=>{
    const wrapper = mount (App,{
      store,
      localVue
    }); 
    expect(actions.getAllTask).toHaveBeenCalled();
  })

  it('expect removeTask action to be called when x button clicked', ()=>{
    const wrapper = mount(App,{
          store,
          localVue 
        });
    const noItem = wrapper.find(".no-items")
    const deleteButton = wrapper.find(".el-icon-close");
    //const test = await axios.get("/");

    deleteButton.trigger("click");
    expect(actions.removeTask).toHaveBeenCalled();
    
  });
})
