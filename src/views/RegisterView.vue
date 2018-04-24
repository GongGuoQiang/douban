<template>
    <div class="register-view">
        <template v-if="isComplete">
           <h1 class="title">注册成功</h1>
           <form class="" method="post" onsubmit="return false">
               <p class="tip">请复制以下Token进行登录</p>
               <div class="form-alias">
                   <label>
                       <!-- <strong>token</strong> -->
                       <input type="text" name="token" v-model='token' placeholder="token" value="">
                   </label>
               </div>
               <div class="form-submit">
                   <router-link class="submit" :to="{name:'loginview',}" tag="button">
                       去登陆
                   </router-link>
               </div>
           </form>
      </template>
      <template v-else>
          <h1 class="title">欢迎加入豆瓣</h1>
          <form  method="post" @submit.prevent="onSubmit()">
              <p v-if="error" class="tip error"></p>
              <div class="form-alias">
                  <label>
                      <!-- <strong>邮箱</strong> -->
                  </label>
                  <input type="text" v-model.trim="email" name="email" placeholder="邮箱" value="">
              </div>
              <div class="form-pwd">
                  <label>
                      <!-- <strong>请输入密码</strong> -->
                      <div v-if="passType === 'password'">
                          <input type="password" v-model.trim='pass' name="pass" placeholder="密码" value="">
                      </div>
                      <div v-if="passType === 'text'">
                          <input type="text" v-model.trim='pass' name="pass"   value="">
                      </div>
                      <span class="show-pwd" :class="{show: isShow}" @click="showPwd()">显示密码</span>
                  </label>
              </div>
              <div class="form-user">
                  <input type="text" name="username" value="" placeholder="用户名">
              </div>
              <input class="submit" :disabled="isDisabled" @click="submit" type="submit" name="" value="立即注册">
          </form>
          <div class="dow">
              <p>点击「注册」代表你已阅读并同意用户使用协议</p>
              <a href="#">下载app</a>
          </div>
      </template>
    </div>
</template>

<script>
export default {
    name:'RegisterView',
    data () {
      return {
          isComplete: false,        // Registration completed
          isDisabled: false,        // Disabled submit button
          isShow: 0,                // Show pwd
          registerState: '立即注册',
          passType: 'password',     // Password input type
          error: '',                // Verification results
          email: '',
          pass: '',
          name: '',
          token: ''
      }
    },
    computed: {

    },
    methods: {
        submit:function(){
             this.isComplete = true;
        },
        showPwd: function () {
          this.isShow = this.isShow ? 0 : 1
          this.isShow ? this.passType = 'text' : this.passType = 'password'
        },
    },
    created () {

    }
}
</script>

<style scoped>
   h1{margin: 4rem 0;text-align: center;font-size: 4rem;color: #42bd56;}
   input{width: 80%;height: 4.4rem;display: block;margin: 0 auto;border: 1px solid #eee;outline: 0;border-radius: 4px;font-size: 1rem;text-indent: 2rem;}
   .submit{background: #42bd56;color: #fff;font-size: 1.7rem;margin-top: 1rem;}
   .dow p{color: #888;text-align: center;font-size: 0.8rem;margin: 1rem 0;}
   .dow a{color: #42bd56;display: block;text-align: center;}
   p{text-align: center;}
   .submit{width: 80%;display: block;height: 4.4rem;border: 0;outline: 0;margin: 0 auto;margin-top: 1rem;border-radius: 0.6rem;}
   .register-view form .form-pwd .show-pwd{
    position: absolute;
    right: .2rem;
    top: 0;
    z-index: 1;
}
.form-pwd{position: relative;}
</style>
