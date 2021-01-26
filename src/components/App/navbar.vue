<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <span class="nav-link" @click="handleFullScreen">
          <i class="fas fa-expand-arrows-alt"></i>
        </span>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <button class="btn btn-info mr-3" @click="openBills">
          <i class="fas fa-plus-circle"></i> New Bill
        </button>
      </li>
      
      <li class="nav-item">
        <button class="btn btn-warning mr-3 text-white" @click="toPage">
          <i class="fas fa-th-large" v-if="$route.path == '/'"></i>
          <i class="fas fa-th-list" v-else></i>
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
import { mapActions } from 'vuex';
export default {
  data: () => ({
    fullscreen: false
  }),

  methods: {
    openBills () {
      this.setShowBillsModel(true)
    },

    goLogout () {
      this.$router.push("/login")
    },

    toPage () {
      const r = this.$route.path == '/'?'/card':'/'
      this.$router.push(r)
    },

    handleFullScreen (){
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
    ])
  }
};
</script>
