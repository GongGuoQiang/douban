<template>
  <div class="login-view">
    <h1>
      <a href="javascript:history.go(-1);">取消</a>登录豆瓣
    </h1>
    <form method="get" @submit.prevent="onSubmit()">
      <p v-if="error" class="tip error">{{error}}</p>
      <div class="form-user">
        <label>
          <strong>邮箱</strong>
          <input
            v-model="email"
            type="email"
            name="email"
            @input="updateData"
            placeholder="邮箱">
        </label>
      </div>
      <div class="form-pwd">
        <label>
          <strong>请输入密码</strong>
          <template v-if="passType === 'password'">
            <input
            v-model="token"
            type="password"
            name="token"
            @input="updateData"
            placeholder="Token">
          </template>
          <template v-if="passType === 'text'">
            <input
            v-model="token"
            type="text"
            name="token"
            @input="updateData"
            placeholder="Token">
          </template>
          <span class="show-pwd" :class="{show: isShow}" @click="showPwd()"></span>
        </label>
      </div>
      <!-- <div class="form-element hide">
        <input id="remember" type="checkbox" name="remember" checked="">
        <label for="remember">下次自动登录</label>
      </div> -->
      <div class="">
        <button
          class="submit"
          type="submit"
          :disabled="isDisabled"
          :class="{disabled: isDisabled}">
          {{loginState}}
        </button>
      </div>
    </form>
    <div class="footer">
      <div class="more-login">使用其他方式登录 &amp; 找回密码</div>
      <div class="btns">
        <router-link :to="{name: 'RegisterView'}">注册豆瓣帐号</router-link>
        <a href="#">下载豆瓣App</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'loginview',
  data () {
    return {
      loginState: '登录',
      isDisabled: false,    // Disabled submit button
      isShow: 0,            // Show pwd
      passType: 'password',
      error: ''             // Verification results
    }
  },
  computed: {
    // Getting Vuex State from store/modules/user
    ...mapState({
      email: state => state.user.temp_email,
      token: state => state.user.temp_token
    })
  },
  methods: {
    showPwd: function () {
      this.isShow = this.isShow ? 0 : 1
      this.isShow ? this.passType = 'text' : this.passType = 'password'
    },
    updateData: function (e) {
      // v-model Form handling
      this.$store.commit({
        type: 'updateData',
        name: e.target.name,
        value: e.target.value
      })
    },
    beforeSubmit: function () {
      // console.log('Submiting...')
      this.isDisabled = true
      this.loginState = '正在登录...'
    },
    onSuccess: function (res) {
      // console.log('complete!')
      this.$router.push({name: 'StatusView'})
    },
    onError: function (err) {
      // console.log(err)
      this.error = err.body.error
      this.loginState = '登录'
      this.isDisabled = false
    },
    onSubmit: function () {
      // Disabled submit button
      this.beforeSubmit()
      // Login...
      this.$store.dispatch({
        type: 'login',
        email: this.email,
        token: this.token
      }).then(res => {
        // Success handle
        this.onSuccess(res)
      }, err => {
        // Error handle
        this.onError(err)
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.getters.currentUser.email) {
        // next({ path: '/' })
        vm.$router.push({name: 'StatusView'})
      } else {
        next()
      }
    })
  },
  created () {
    // Getting local user automatic filling
    if (localStorage.getItem('email')) {
      this.$store.commit({
        type: 'getLocalUser'
      })
    }
  }
}
</script>

<style scoped>
.login-view h1{
    height: 4.5rem;
    margin: 0 0 1rem;
    padding: 0 1.8rem;
    line-height: 4.5rem;
    background: #fff;
    border-bottom: .1rem solid #eee;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
}
.login-view form {
    padding: 2rem 1.5rem;
}
.login-view form strong {
    font-size: 1.5rem;
    color: #222;
    display: none;
    margin-bottom: .5rem;
}
.login-view form input[type=email], .login-view form input[type=password], .login-view form input[type=text] {
    display: inline-block;
    width: 100%;
    height: 4.4rem;
    padding: 0 .8rem;
    box-sizing: border-box;
    font-size: 1.5rem;
    background: #fff;
    border: .1rem solid #ccc;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
    outline: 0;
}
.login-view h1 a {
    position: absolute;
    left: 1.8rem;
    top: 0;
    color: #42bd56;
    font-size: 1.5rem;
    font-weight: 400;
}
.login-view form .form-pwd .show-pwd {
    position: absolute;
    right: .2rem;
    top: 0;
    display: block;
    height: 100%;
    width: 3.2rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBT…+qRiGN/qr6gO0pROWvqrv8afJK/N3mVsCtgFsBtwL/XwV+As2W8ubaOJDiAAAAAElFTkSuQmCC);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 2.2rem;
    z-index: 1;}
    .login-view form .submit {
    cursor: pointer;
    width: 100%;
    padding: 1.2rem 2.6rem;
    margin-top: 1rem;
    font-size: 1.7rem;
    text-align: center;
    color: #fff;
    background: #17aa52;
    border: .1rem solid #17aa52;
    border-radius: .3rem;
}
.login-view .footer .more-login {
    font-size: 1.5rem;
    color: #aaa;
    text-align: center;
}
.login-view .footer .btns{
    margin-top: 4rem;
    text-align: center;
    font-size: 1.5rem;
}
.login-view .footer .btns a {
    color: #42bd56;
    margin-right: 1.5rem;
}
</style>
