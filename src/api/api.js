
var stream = weex.requireModule('stream');
var storage = weex.requireModule('storage');
var token='';
  storage.getItem("token",function(e){//读取数据
    token = e.data;
  });
  var server='http://120.92.169.67/api'


export default  {
    /**
     * 根据 token 获取个人信息
     * @param params
     * @returns {*}
     */
    getUserInfoByToken(suc){
        stream.fetch({
            method:"GET",
            url:server+'/user/current',
            headers:{'Content-Type':'application/json','Authorization':token},
            type:'json'
        },function(res) {
            suc(res)
        },function(res){
        });
    },
    /**
     * 登录
     * @param params
     * @param suc
     */
    signByUsernameAndPassword(params,suc){
        stream.fetch({
            method:"post",
            url:server+'/token/get',
            headers:{'Content-Type':'application/json'},
            type:'json',
            body:JSON.stringify({
                username:params.username,
                password:params.password,
            })
        },function(res){
            suc(res)
            if(res.data.status=="success"){
                storage.setItem('token',"bearer "+res.data.data.access_token, function(e) {});
                token="bearer "+res.data.data.access_token;
            }
        },function(res){
        });
    },

}