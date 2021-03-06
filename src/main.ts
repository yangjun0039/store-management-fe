import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "./request";
import { AxiosInstance } from "axios";

declare module "vue/types/vue" {
  interface Vue {
    $axios: AxiosInstance;
  }
}

Vue.use(ElementUI);
Vue.use(v => (v.prototype.$axios = axios));

Vue.config.productionTip = false;

store.dispatch('init')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
