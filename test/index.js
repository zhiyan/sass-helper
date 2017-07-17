import './index.scss'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import PageIcons from './pages/icons'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

const app = {
	template:`
		<router-view></router-view>
	`
}

router.map({
	'/' : {
		component: PageIcons
	}
})

router.start(app, '#app')