<template>
<!-- Main Sidebar Container -->
  
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <!-- LOGO
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">AdminLTE 3</span>
      -->
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img :src="user.avatar" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">{{user.name}}</a>
        </div>
      </div>

      <!-- sidebar menu -->
      <nav class="mt-2">
        <ul data-widget="treeview" role="menu" data-accordion="false" class="nav nav-pills nav-sidebar flex-column">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>Bills <i class="fas fa-angle-left right"></i><span class="badge badge-info right">3</span></p>
            </a>
            <ul class="nav nav-treeview" >
              <li class="nav-item">
                <a href="#" class="nav-link pl-4">
                  <i class="nav-icon fas fa-copy"></i>
                  <p>Bills Overview</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link pl-4">
                  <i class="nav-icon fas fa-archive"></i>
                  <p>Archived Bills</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link pl-4">
                  <i class="nav-icon fas fa-receipt"></i>
                  <p> Receipts </p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/stats">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>Statistics</p>
            </router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-glass-martini-alt "></i>
              <p> Products <i class="fas fa-angle-left right"></i></p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fas fa-folder-open nav-icon"></i><p class="pl-4">Categories</p>
                </a>
              </li>
              <li class="nav-item">
                <router-link to="/product" class="nav-link">
                  <i class="fas fa-glass-cheers nav-icon"></i><p class="pl-4">Products</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-plus-square"></i><p>Extras <i class="fas fa-angle-left right"></i></p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link pl-4">
                  <i class="fas fa-cubes nav-icon"></i><p class="pl-4">Features</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link pl-4">
                  <i class="fas fa-money-bill nav-icon"></i><p class="pl-4">Purchases</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-th"></i><p>Features <i class="fas fa-angle-left right"></i></p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fas fa-boxes nav-icon"></i><p class="pl-4">Stock Management</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fas fa-box nav-icon"></i><p class="pl-4">Order</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fas fa-desktop nav-icon"></i><p class="pl-4">Split Screen</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fas fa-mobile-alt nav-icon"></i><p class="pl-4">Mini Program</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fas fa-wechat nav-icon"></i><p class="pl-4">Mini Program</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-cogs"></i>
              <p> Settings <i class="fas fa-angle-left right"></i><span class="right badge badge-danger">New</span></p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link pl-4">
                  <i class="nav-icon far fa-file-alt"></i><p class="pl-4">Bill Settings</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link pl-4">
                  <i class="nav-icon fas fa-users"></i><p class="pl-4">Users</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link pl-4">
                  <i class="nav-icon fas fa-calendar-alt"></i><p class="pl-4">Time and Date</p>
                </a>
              </li>
              <li class="nav-item">
                <router-link class="nav-link pl-4" to="/venue">
                  <i class="nav-icon fas fa-building"></i><p class="pl-4">Venue</p>
                </router-link>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link pl-4">
                  <i class="nav-icon fas fa-cogs"></i><p class="pl-4">Others</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link pl-4">
                  <i class="nav-icon fas fa-user-tie"></i><p class="pl-4">Supervisor</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>


<script>
import Api from '@/Http/App';
import { get as CookieGet } from 'js-cookie';
export default {
  data: () => ({
    user: {
      avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=121352583,3553479540&fm=26&gp=0.jpg',
      name: 'Vince'
    }
  }),

  created () {
    const lang = CookieGet("POS_LANGUAGE") || "en"
    const isLogin = CookieGet("POS_TOKEN") ? true : false
    if (!isLogin) return;
    Api.getSidebarNav(lang).then(res => {
      console.log(res)
    })
  }
}
</script>
