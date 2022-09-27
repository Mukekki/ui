import Vue from 'vue'
import App from './App.vue'
import Tooltip from './index.js'


Vue.config.productionTip = false

Vue.use(Tooltip)

let app = new Vue({
  render: h => h(App),
})


app.$mount('#app')

