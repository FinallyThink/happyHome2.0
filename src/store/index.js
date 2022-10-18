import { createStore } from 'vuex'

const files =  import.meta.globEager('./menu/*.js');
const modules = {}

for(let key in files){
    Object.assign(modules,files[key].default)
}

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
