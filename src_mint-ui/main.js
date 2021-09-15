// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Button, Loadmore} from "mint-ui"
import 'mint-ui/lib/style.css'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component(Button.name, Button)
Vue.component(Loadmore.name, Loadmore)
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
