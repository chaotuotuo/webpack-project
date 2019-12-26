
import Vue from 'Vue'
import Element from 'element-ui'

import App from './App.vue'

import './plugins/axios'

import 'reset-css'
import './css/style.scss'
import './plugins/element/element-variables.scss'

Vue.prototype.$bus = new Vue()

Vue.use(Element)

new Vue({
	el:'#root',
	render:h => h(App)
})