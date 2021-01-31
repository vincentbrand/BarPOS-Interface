<template>
<div class="row no-gutter">
      <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"
      :style="'background-image:url('+bgImg+')'">
          <!-- <div id="frontpage-logo"></div> -->
      </div>
      <div class="col-md-8 col-lg-6">

        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto">
                
                 <div class="logo-holder">
                    <h1>BarPos</h1>
                    <!-- <img src="../assets/img/full-logo.png" class="img-fluid">  -->
                 </div>
                 <h3 class="login-heading mb-4">{{$t('login.msg')}}</h3>

                <form @submit.prevent="goLogin">
                  <div class="form-label-group">
                    <input type="email" v-model="formData.username" id="inputEmail" class="form-control" :placeholder="$t('login.name')" required="" autofocus="">
                    <label for="inputEmail">{{$t('login.name')}}</label>
                  </div>

                  <div class="form-label-group">
                    <input v-model="formData.password" type="password" id="inputPassword" class="form-control" :placeholder="$t('login.password')" required="">
                    <label for="inputPassword">{{$t('login.password')}}</label>
                  </div>

                  <button :disabled='disabled' class="btn btn-lg btn-info btn-block text-uppercase font-weight-bold mb-2 login-btn" type="submit">
                    <b-spinner v-if="disabled" style="color: #fff" small label="Spinning"></b-spinner>
                    {{$t('login.login')}}
                  </button>

                  <!-- <div class="">
                    <router-link class="small a-ripple" to="/forgot">{{$t('login.forgot')}}</router-link>
                  </div> -->
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lang-login">
        <i class="fas fa-globe-asia"></i>
        <span @click="tabZH">中文</span>/
        <span @click="tabEN">English</span>
      </div>

      
</div>

</template>

<script>

export default {
  name: 'login',
  data: () => ({
    formData: {
      username: '',
      password: '',
      text: ''
    },
    disabled: false,
    bgImg: require("../assets/img/login-bg.jpg")
  }),
  
  created () {
    document.querySelector('body').setAttribute('style', ``)
  },

  methods: {
    tabEN () {
      this.$i18n.locale = 'en'
      this.$cookie.set('lang', 'en')
    },
    tabZH () {
      this.$i18n.locale = 'zh'
      this.$cookie.set('lang', 'zh')
    },
    goLogin () {
      this.disabled = true
      if (this.formData.username=='root@ripple.cn'&&this.formData.password=='123456') {
        setTimeout(() => {
          this.disabled = false
          this.$router.push('/login')
        }, 3000)

      } else {
        this.disabled = false
      }

    }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.text-cut {
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
.text-cut-2{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.lang-login {
  font-size: 13px;
  padding: 8px 4px;
  position: fixed;
  top: 20px;
  right: 50px;
  
}
.lang-login span{
    padding: 0 6px;
    cursor: pointer;
}

.lang-login span:hover {
    color: #333;
}

:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}

.login,
.image {
  min-height: 100vh;
}

.bg-image {
  /* background-image: url("../img/login-bg.jpg"); */
  background-size: cover;
  background-position: center bottom;
}

.login-heading {
  font-weight: lighter;
  color: #666;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 0;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
  padding: var(--input-padding-y) var(--input-padding-x);
  height: auto;
  /*border-radius: 2rem;*/
  border-radius: 0;
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  line-height: 1.5;
  color: #495057;
  cursor: text;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

#frontpage-logo {
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 3px;
  background: #fff;
  /* background-image: url("../img/frontpage-logo.png"); */
  background-size: cover;
  background-position: center;
}

.login-btn{
  border-radius: 1px !important;
  font-weight: 400 !important;
}


.logo-holder {
  width: 200px;
  opacity: 0.8;
  padding-bottom: 20px;
}

.waterHolder {
  width: 100%;
  height: 100%;
}

body {
  font-family: "Raleway";
}

.btn-ripple{
  background:#aa0b69;
  color: #fff;
}

.avatar{
  border-radius: 50%;
}

button{
  outline: none;
  border: none;
}

</style>
