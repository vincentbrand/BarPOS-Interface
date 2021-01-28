<template>
<div id="app" @mousemove="moveEvent" @click="moveEvent">
  <div v-if="$route.path !== '/login'" class="wrapper">
    <AppNavbar />
    <AppSidebar />
    
    <div class="content-wrapper">
      <router-view/>
      <BillsModel />
    </div>
    
    <AppFooter />
  </div>

  <div v-else class="wrapper">
    <router-view/>
  </div>
</div>
</template>
<script>
import AppNavbar from '@/components/App/navbar';
import AppFooter from '@/components/App/footer';
import AppSidebar from '@/components/App/sidebar';
import BillsModel from '@/components/Home/BillsNameModel';
import { remove as CookieRemove } from 'js-cookie';
import Api from '@/Http/Language';
export default {
  components: {
    AppNavbar,
    AppFooter,
    AppSidebar,
    BillsModel
  },

  data: () => ({
    timmer: null,
    redirectTime: 100, // (:s)秒
  }),

  created () {
    this.setApiI18n()
  },

  methods: {
    moveEvent() {
      let path = ["/login"];
      if (!path.includes(this.$route.path)) {
        clearTimeout(this.timmer);
        this.init();
      }
    },
   
    init() {
      this.timmer = setTimeout(() => {
        CookieRemove("POS_USERPHONE")
        CookieRemove("POS_USERID")
        CookieRemove("POS_LANGUAGE")
        CookieRemove("POS_USERNAME")
        CookieRemove("POS_TOKEN")
        this.$router.push({
          path: "/login",
        });
      }, this.redirectTime * 1000);
    },

    setApiI18n () {
      Api.getEnLanguage().then((res) => {
        const en = this.$i18n.messages.en
        this.$i18n.setLocaleMessage('en', Object.assign(en, { api: res }))
      })

      Api.getZhLanguage().then((res) => {
        const zh = this.$i18n.messages.zh
        this.$i18n.setLocaleMessage('zh', Object.assign(zh, { api: res }))
      })
    }
  }
}
</script>

<style lang="less">

</style>
