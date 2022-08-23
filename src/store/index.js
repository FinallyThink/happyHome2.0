
import Vuex from 'vuex'

// axios request method
const files = require.context('./axios', true, /\.js$/)
const modules = {}

files.keys().map(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})


export default new Vuex.Store({
    ...modules,
})