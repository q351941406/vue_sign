// import './assets/main.css' //加载就会自动生效了的
import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import { inject } from '@vercel/analytics';

inject();
const app = createApp(App);
app.use(Antd).mount("#app");