import { createApp } from 'vue'
<<<<<<< HEAD
import './style.less'
import '@/assets/constant.less';   
import "@/package/fackerCMD/style.less";
import Index from './Index.vue'
import router from './router/index.js'
import store from './store'

createApp(Index).
    use(router).
    use(store).
    mount('#qiaokai')
=======
import './style.css'
import {store} from './store/index'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(store);
app.use(ElementPlus)
app.mount('#app')
>>>>>>> 07d119ae8ae02bf3d891218e50be8534caac06ac
