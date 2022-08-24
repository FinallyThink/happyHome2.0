
import {createStore} from 'vuex'

// axios request method
const files =  import.meta.globEager('./axios/*.js');
const modules = {}

for(let key in files){
    Object.assign(modules,files[key].default)
}
export const store = createStore({
    state () {
      return {
        ...modules
      }
    }
  })