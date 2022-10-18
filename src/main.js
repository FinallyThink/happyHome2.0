import { createApp } from 'vue'
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
