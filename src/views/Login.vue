<template>
<div class="container">
    <div class="row justify-content-center align-items-center" style="padding-top:15%;">
        <!-- employee -->
        <div class="col-2" v-for="user in SystemAdmin" :key="user.id" @click="onLoginUser(user)">
            <div class="card">
                <div class="card-body p-2">
                <div class="d-md-flex">
                    <div class="p-2 flex-fill" style="overflow: hidden">
                    <img src="../assets/avatar.jpg" class="img-circle border-success img-fluid" alt="User Image">
                    <div class="text-center my-3">
                        <h6 class="text-cut">{{user.name}}</h6>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <!-- END OF: employee -->
    </div>

    <div class="fixed-venue">
        <el-select v-model="venueId" placeholder="请选择" size="small">
            <el-option
            v-for="item in venues"
            :key="item.id"
            :label="item.name"
            :value="item.id">
            </el-option>
        </el-select>
    </div>

    <div class="fixed-logout">
        <button class="btn btn-danger rounded-circle" @click="logout">
            <i class="far fa-stop-circle"></i>
        </button>
    </div>

    <el-dialog
    title="Login User"
    :visible.sync="isShowLogin"
    :custom-class='isShowAn?"animate__shakeX":"animate__"'
    width="20%"
    center>
        <form @submit.prevent='onSubmit' v-if="isShowLogin">
            <input v-focus type="password" v-model="password" class="i-input" maxlength="4">
        </form>
        <h6 class="text-center mt-2 text-black text-cut">{{nowLoginUser.name}}</h6>
    </el-dialog>
</div>

</template>

<script>
import Api from '@/Http/Login/index';
import ApiInit from '@/Http/index';
import { set as CookieSet } from 'js-cookie';
export default {
    data: () => ({
        isShowLogin: false,
        isShowAn: false,
        password: '',
        venueId: null,
        bg: require("../assets/bg.jpg"),

        SystemAdmin: [],
        venues: [],

        nowLoginUser: {}
    }),

    watch: {
        password (val) {
            if (val.length === 4) {
                this.onSubmit()
            }
        },

        venueId (val) {
            CookieSet("POS_VENUE_ID", val)
            Api.setEmployeesVenues(val).then(res => {
                this.SystemAdmin = res.data
            })
        }
    },

    mounted() {
        document.querySelector('body').setAttribute('style', `background: url(${this.bg}) no-repeat; height: auto; background-size: 100% 100%;`)
    },

    directives: {
        // 注册一个局部的自定义指令 v-focus
        focus: {
        // 指令的定义
        inserted: function (el) {
                // 聚焦元素
                el.focus()
            }
        }
    },

    created () {
        // Api.getEmployeesLoginInfo().then(res => {
        //     this.SystemAdmin = res.data
        // })
        Api.setVenues().then(res => {
            this.venues = res.data
            this.venueId = res.data[0].id
        })
    },

    methods: {
        onLoginUser (item) {
            this.nowLoginUser = item
            this.isShowLogin = true
        },

        onSubmit () {
            Api.setEmployeesLogin({
                phone: this.nowLoginUser.phone,
                pin: this.password
            }).then(result => {
                if (result.access_token)
                this.setCookie(result)
                else
                this.setRestart()
            })
        },

        setRestart () {
            this.password = ''
            this.isShowAn = true
            this.$message.error('Password Error');
            const that = this
            setTimeout(() => { that.isShowAn = false }, 500)
        },

        setCookie (result) {
            const expires = {expires: 10/24}
            const { data, access_token } = result
            // 设置本地语言
            this.$i18n.locale = data.preferred_language;
            // 设置本地缓存
            CookieSet('POS_USERID', data.id, expires)
            CookieSet('POS_USERNAME', data.name.en, expires)
            CookieSet('POS_LANGUAGE', data.preferred_language, expires)
            CookieSet('POS_USERPHONE', data.phone, expires)
            CookieSet('POS_TOKEN', access_token, expires)
            // 设置请求时header
            ApiInit.setHeader()
            this.$router.push("/bills")
            this.isShowLogin = false
        },

        logout () {
            this.$router.push("/auth/login")
        }
    }
}
</script>

<style lang='less'>
.i-input{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 30px;
    text-align: center;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
}

@keyframes shakeX {
    0%,to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    10%,30%,50%,70%,90% {
        -webkit-transform: translate3d(-10px,0,0);
        transform: translate3d(-10px,0,0)
    }

    20%,40%,60%,80% {
        -webkit-transform: translate3d(10px,0,0);
        transform: translate3d(10px,0,0)
    }
}

.animate__shakeX {
    animation: shakeX .5s;
}

.fixed-venue{
    position: fixed;
    top: 30px;
    right: 30px;
    width: 100px;
}

.fixed-logout{
    position: fixed;
    bottom: 50px;
    right: 50px;
    .btn{
        width: 45px;
        height: 45px;
        text-align: center;
    }
}

</style>
