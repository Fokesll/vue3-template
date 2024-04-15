import { createApp } from 'vue'
import '@a/base/tailwind.css'
import i18n from './lang'
import antd from 'ant-design-vue'
import router from './router'
import pinia from './pinia'
import App from './App.vue'
import axios from 'axios'
import * as echarts from 'echarts';


const app = createApp(App);

app.use(i18n);
app.use(antd);
app.use(router);
app.use(pinia);

app.config.globalProperties.$http = axios;

app.mount('#app')
