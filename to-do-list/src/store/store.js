import Vuex from "vuex"
import Vue from 'vue'
import getActions from "./actions"
import getMutations from "./mutation"
import getState from "./state"


Vue.use(Vuex);
function getStoreConfig(){
    return new Vuex.Store({
        state:getState(),
        mutations:getMutations(),
        actions:getActions()
      })
} 
var store;
export default store = getStoreConfig();