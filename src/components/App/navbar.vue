<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item" v-if="fullscreen">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>

      <li class="nav-item">
        <span class="nav-link" @click="handleFullScreen">
          <i class="fas fa-expand-arrows-alt"></i>
        </span>
      </li>

      <li class="nav-item dropdown">
        <span class="nav-link position-relative" data-toggle="dropdown" aria-expanded="false">
          <span class="fas fa-bell"></span>
          <span class="badge badge-warning navbar-badge"
          :class="[ns.length<5?'badge-success':(ns.length<50?'badge-warning':'badge-danger')]"
          style="font-size: 12px;font-weight: 300;padding:0;right: -8px;">{{ns.length>99?'99+':ns.length}}</span>
        </span>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right notifications" style="left: 0px;right: inherit;">
          <span class="dropdown-item dropdown-header">{{ns.length}} Notifications</span>
          <div v-for="item in ns" :key="item.id">
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item text-truncate">
              <i class="fas fa-envelope mr-2"></i>
              {{item.message}}
            </a>
          </div>
          
          
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li>
    </ul>

    <ul class="navbar-nav ml-auto" style="width: 35%">
      <li class="navbar-search-block nav-item w-100">
        <form class="form-inline w-100">
          <div class="input-group input-group-sm w-100">
            <input class="form-control form-control-navbar" type="search" placeholder="Search">
            <div class="input-group-append">
              <button class="btn btn-navbar" type="button">
                <i class="fas fa-search"></i>
              </button>
              <button class="btn btn-navbar" type="button">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </form>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">

      <!--
      <li class="nav-item">
        <button class="btn btn-info mr-3" @click="openBills">
          <i class="fas fa-plus-circle"></i> New Bill
        </button>
      </li>
      -->
      
      <li class="nav-item">
        <button class="btn mr-3 text-white" :class="$route.path == '/bills'?'btn-secondary':'btn-warning'" @click="toPage"
        :disabled="$route.path == '/bills'">
          <i class="fas fa-th-large"></i>
        </button>
      </li>

      <li class="nav-item">
        <button class="btn btn-danger" @click="goLogout">
          <i class="far fa-stop-circle"></i>
        </button>
      </li>
    </ul>
  </nav>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import { remove as CookieRemove, get as CookieGet } from 'js-cookie';
export default {
  data: () => ({
    fullscreen: false
  }),

  computed: {
    ...mapGetters("app", {
      ns: "getNotifications"
    })
  },

  created () {
    if (this.ns.length === 0 && CookieGet("POS_TOKEN")) {
      this.setUserNotifications()
    }
  },

  methods: {
    openBills () {
      this.setShowBillsModel(true)
    },

    goLogout () {
      CookieRemove("POS_USERPHONE")
      CookieRemove("POS_USERID")
      CookieRemove("POS_LANGUAGE")
      CookieRemove("POS_USERNAME")
      CookieRemove("POS_TOKEN")
      this.$router.push("/login")
    },

    toPage () {
      this.$router.push('/bills')
    },

    handleFullScreen () {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },

    ...mapActions("bills", [
      "setShowBillsModel"
    ]),

    ...mapActions("app", [
      "setUserNotifications"
    ])
  }
};
</script>


<style>
.notifications{
  width: 350px;
  height: 500px;
  overflow: auto;
}
</style>
