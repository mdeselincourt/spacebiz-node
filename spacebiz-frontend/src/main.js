// Front end app:
import Vue from 'vue' // Vue framework
import App from './App.vue' // My root Vue component; it contains all the others

// Not sure what this does
Vue.config.productionTip = false

// 'mount' the Vue app.
new Vue({
  render: h => h(App),
}).$mount('#app')
