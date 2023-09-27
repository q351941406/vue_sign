// import './assets/main.css' //加载就会自动生效了的
import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";

const app = createApp(App);
app.use(Antd).mount("#app");