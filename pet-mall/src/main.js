import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
    //组件
import vant from './vant/index'
vant()

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')