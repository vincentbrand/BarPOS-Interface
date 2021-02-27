<template>
<!-- style="padding: 50px" -->
<div class="w-100">
    <!-- type="card" -->
    <el-carousel :interval="5000" arrow="never" indicator-position="none" :height="vdaH">
        <el-carousel-item v-for="item in swiper" :key="item.id">

          <div class="overlay">
            <div class="caption-center">

              <div class="caption-item-middle">
                <div class="light text-center">
                  <h3>{{ item.title }}</h3>
                  <h5>{{ item.subline1 }}</h5>
                  <h5>{{ item.subline2 }}</h5>
                </div>
              </div>

            </div>
          </div>

          <img :src="item.img" class="w-100 h-100">

        </el-carousel-item>
    </el-carousel>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data: () => ({
        vdaH: 0,
        swiper: []
    }),
    created () {
        let h = document.documentElement.clientHeight || document.body.clientHeight;
        this.vdaH = h + 'px';
        axios.get(process.env.VUE_APP_API_DOMAIN + "/api/tv").then(res => {
            this.swiper = res.data.Tv.slides
            console.log(this.swiper);
        })
    }
}
</script>

<style>
.overlay{
  position:absolute;
  z-index: 9999;
  display: block;
  width: 100vw;
  height: 100vh;
}

.light{
  color:#fff;
}
.dark{
  color:#000;
}


.caption-center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding:30px;
}
.caption-left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding:30px;
}
.caption-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 100vh;
  padding:30px;
}

.caption-item-top {
  align-self: flex-start;
  padding:30px;
}

.caption-item-middle {
  max-width: 100%;
  padding:30px;
}

.caption-item-bottom {
  align-self: flex-end;

}
</style>