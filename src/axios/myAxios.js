import axios from 'axios'

const require = axios.create()

require.defaults.timeout = 2500;

export default require;