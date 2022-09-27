<<<<<<< HEAD
import { createStore } from 'vuex'

const files =  import.meta.globEager('./menu/*.js');
=======

import {createStore} from 'vuex'

// axios request method
const files =  import.meta.globEager('./axios/*.js');
>>>>>>> 07d119ae8ae02bf3d891218e50be8534caac06ac
const modules = {}

for(let key in files){
    Object.assign(modules,files[key].default)
}
<<<<<<< HEAD

const axiosFiles =  import.meta.globEager('./axios/*.js');
const axiosModules = {}

for(let key in axiosFiles){
  Object.assign(axiosModules,axiosFiles[key].default)
}


const store = createStore({
    state () {
      return {
        ...axiosModules,
        ...modules
      }
    },
    mutations: {
    }
  })

export default store
=======
export const store = createStore({
    state () {
      return {
        ...modules
      }
    }
  })
>>>>>>> 07d119ae8ae02bf3d891218e50be8534caac06ac
