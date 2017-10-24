<template>
    <div>
    <div class="myInfo_top">
        <div style="flex-direction:row;justify-content:flex-end;align-items:flex-end;height: 35px;">
            <text @click="jumpMyAccoumtMain()" class="iconfont icon_setting" style="margin-right:20px;">&#xe609;</text>
        </div>
        <div  @click="jumpLogin" style="flex-direction:row;justify-content:flex-start;height: 135px;">
            <div style="flex-direction:row;justify-content:flex-start;height: 100px;align-items: center">


            <div style="margin-left: 20px">
              <image :src="anonymity_Icon" style="width: 100px;height: 100px;border-radius:50%;border-style:solid;border-width: 1px;border-color: #eeeeee"></image>
            </div>
            <div style="margin-left: 10px;" >
                <text style="font-size: 28px">登录/注册</text>
            </div>
            <text class="iconfont icon_right">&#xe8b2;</text>
            </div>
        </div>

    </div>

    <!--<div @click="jumpLogin()">-->
        <!--<text>调往登录</text>-->
    <!--</div>-->
    </div>
</template>
<script>
    var modal = weex.requireModule('modal');
    var stream = weex.requireModule('stream')
    var storage = weex.requireModule('storage')
    var navigator = weex.requireModule('navigator')

    import router from '../router'
    import api from '../api/api'
    import util from '../util'
    export default {
        data () {
            return {
               user:{
                  nickName:''
               },
                isLogin:false,
                anonymity_Icon:"",
                rightIcon:'',
            }
        },
        methods: {
            checkSign () {
                var that=this;
                api.getUserInfoByToken(suc=>{

                    if(suc.data.data.status){

                    }
                });
            },
            jumpLogin(){
                router.push('/login')
            },
            jumpMyAccoumtMain(){
                router.push('/my_account_main')
            },

        },
        created(){
            util.initIconFont();
            this.checkSign();
            this.anonymity_Icon=util.Anonymity_Icon;

        }
    }
</script>
<style >
    .myInfo_top{
        width: 750px;top: 0px;
        position: fixed;
        border-bottom-style: solid;
        border-bottom-color: #eeeeee;
        border-bottom-width: 1px;
    }

    .iconfont{
      font-family: iconfont3 !important;
    }

    .icon_right{
        font-size:27px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 1px;
        -moz-osx-font-smoothing: grayscale;
    }
    .icon_setting{
        font-size:24px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 1px;
        -moz-osx-font-smoothing: grayscale;
    }

</style>
