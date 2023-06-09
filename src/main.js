import { createApp } from 'vue'
import './assets/css/reset.css'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import store from './store/index'

createApp(App).use(router).use(ElementPlus).use(store).mount('#app')
