import Vuex from "vuex"

import getActions from "./actions"
import getMutations from "./mutation"
import getState from "./state"


export default function getStoreConfig(){
    return new Vuex.Store({
        state:getState(),
        mutations:getMutations(),
        actions:getActions()
      })
} 