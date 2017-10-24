<template>
    <div>
        <div class="login_top">
            <div style="flex-direction:row;justify-content:center;align-items:center;height: 100px;">
                <text>账户设置</text>
            </div>
        </div>
        <div class="login_top">
            <div style="flex-direction:row;justify-content:flex-start;align-items:center;height: 100px;">
                <div @click="backtoPreviousLevel()" style="padding-left: 10px">
                    <image :src="backIcon" style="width: 36px;height: 36px"></image>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var modal = weex.requireModule('modal');
    var stream = weex.requireModule('stream')
    var storage = weex.requireModule('storage')
    var navigator = weex.requireModule('navigator')
    import api from '../../api/api'
    import router from '../../router'
    import  util from '../../util'
    export default {
        data () {
            return {

                backIcon:''
            }
        },
        methods: {

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
    .login_top{
        width: 750px;top: 0px;
        position: fixed;
        border-bottom-style: solid;
        border-bottom-color: #eeeeee;
        border-bottom-width: 1px;
    }
</style>
