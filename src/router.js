import VueRouter from 'vue-router'
import Main from './views/main.vue'
import Login from './views/login.vue'
import Index from './views/index.vue'
import Project_List from './views/project_list.vue'
import Hire from './views/hire.vue'
import My_Info from  './views/my_info.vue'

/**
 * 账号设置
 */
import My_Account_Main from './views/my_account/my_account_main.vue'

Vue.use(VueRouter)

export default new VueRouter({

    routes: [
        {
            path:'/',
            component:Main,
            children:[
                {
                    path:'/',
                    component:Index,
                },
                {
                    path:'/project_list',
                    component:Project_List,
                },

                {
                    path:'/hire',
                    component:Hire
                },
                {
                    path:'/my_info',
                    component:My_Info
                }
            ]
        },
        //登录
        {
            path:'/login',
            component:Login
        },
        {
            path:'/my_account_main',
            component:My_Account_Main
        },

    ]
})
