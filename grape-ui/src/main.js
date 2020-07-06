import Vue from 'vue'
import Button from './components/Button'
import App from './App'
import Icon from './components/Icon'
Vue.config.productionTip = false


Vue.component('g-button',Button)
Vue.component('g-icon',Icon)

new Vue({
  render: h => h(App),
}).$mount('#app')
