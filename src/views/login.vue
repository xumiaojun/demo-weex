<template>
    <div>
        <div class="login_top">
            <div style="flex-direction:row;justify-content:center;align-items:center;height: 100px;">
                <text>登&nbsp录</text>
            </div>
        </div>
        <div class="login_top">
            <div style="flex-direction:row;justify-content:flex-start;align-items:center;height: 100px;">
                <div @click="backtoPreviousLevel()" style="padding-left: 10px">
                   <image :src="backIcon" style="width: 36px;height: 36px"></image>
                </div>
            </div>
        </div>

        <div class="login-form">
            <div class="form-field">
                <input class="input-line autosize" type="text" placeholder="手机号码" v-model="form.username"></input>
            </div>
            <div class="form-field">
                <input type="password" class="input-line autosize" placeholder="请输入密码" v-model="form.password"></input>
            </div>
            <text class="button" @click="login">登 录</text>

        </div>
    </div>
</template>
<script>
    var modal = weex.requireModule('modal');
    var stream = weex.requireModule('stream')
    var storage = weex.requireModule('storage')
    var navigator = weex.requireModule('navigator')
    import api from '../api/api'
    import router from '../router'
    import  util from '../util'
    export default {
        data () {
            return {
                form:{
                    username: '',
                    password: ''
                },
                backIcon:''
            }
        },
        methods: {
            login () {
                var that=this
                if(that.form.username===''){
                    modal.alert({
                        message: "请填入账号",
                        duration: 0.3
                    }, function (value) {})
                    return;
                }
                if(that.form.password===''){
                    modal.alert({
                        message: "请输入密码",
                        duration: 0.3
                    }, function (value) {})
                    return;
                }
                if(that.form.username!=='' && that.form.password!==''){
                    var params={
                        username:that.form.username,
                        password:that.form.password,
                    }
                    api.signByUsernameAndPassword(params,suc=>{
                        if(suc.data.status=="success"){
                            storage.setItem('token'," "+suc.data.data.access_token, function(e) {});
                        }else {
                            that.password==''
                            modal.alert({
                                message: suc.data.data.message,
                                duration: 0.3
                            }, function (value) {})
                        }
                    })
                }
            },
            backtoPreviousLevel(){
                this.$router.go(-1);
            }

        },
        created(){
            this.backIcon=util.Back_Icon;//获取到返回的图标
        }
    }

</script>
<style scoped>
    .container {
        flex: 1;
        justify-content: center
    }

    .login_top{
        width: 750px;top: 0px;
        position: fixed;
        border-bottom-style: solid;
        border-bottom-color: #eeeeee;
        border-bottom-width: 1px;
    }

    .autosize {
        flex: 1
    }

    .login-form {
        position: absolute;
        top: 440px;
        width: 750px;
        padding: 80px;
    }

    .form-field {
        flex-direction: row;
        align-items: flex-start;
        margin-bottom: 60px;
        border-bottom-color: #1E90FF;
        border-bottom-width: 1px;
    }
    .input-line {
        background-color: transparent;
        line-height: 50px;
        color: black;
        margin-bottom: 15px;
    }

    .button {
        background-color: #1E90FF;
        text-align: center;
        font-size: 36px;
        color: #ffffff;
        margin-top: 20px;
        padding: 30px;
        flex: 1;
        border-radius: 5px;
    }
</style>
