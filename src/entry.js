
import App from './App.vue'
import router from './router'
const meta = weex.requireModule('meta')
// 配置 viewport 的宽度为 640px
meta.setViewport({
    width: 750
})
App.el = '#root'
App.router = router

new Vue(App)

router.push('/')
