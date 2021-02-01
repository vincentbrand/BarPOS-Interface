<template>
<div id="app" @mousemove="moveEvent" @click="moveEvent">

  <div v-if="routerPath.includes($route.path)" class="wrapper">
    <router-view/>
  </div>

  <div v-else class="wrapper">
    <AppNavbar />
    <AppSidebar />
    
    <div class="content-wrapper">
      <router-view/>
      <BillsModel />
    </div>
    
    <AppFooter />
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
    timer: null,
    isShowSidebar: false,
    redirectTime: 15, // (:s)秒
    routerPath: ["/login", "/auth/login"]
  }),

  created () {
    this.setApiI18n()
  },

  methods: {
    moveEvent() {
      let path = ["/login", "/auth/login"];
      if (!path.includes(this.$route.path)) {
        clearTimeout(this.timer);
        this.init();
      }
    },
   
    init() {
      this.timer = setTimeout(() => {
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
.el-loading-spinner .path{
  stroke-width: 6 !important;
  stroke: #343a40 !important;
}

.el-loading-spinner .el-loading-text{
  color: #343a40 !important;
  font-weight: bold;
}

.el-loading-mask.is-fullscreen .el-loading-spinner .circular{
  width: 42px !important;
  height: 42px !important;
}
</style>
