<template>
<!-- style="padding: 50px" -->
<div class="w-100">
    <!-- type="card" -->
    <el-carousel :interval="3000" :height="vdaH">
        <el-carousel-item v-for="item in swiper" :key="item.id">
            <img :src="item.img" alt="" class="w-100 h-100">
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
        // this.vdaH = (h - 100) + 'px';
        this.vdaH = h + 'px';
        axios.get(process.env.VUE_APP_API_DOMAIN + "/api/tv").then(res => {
            this.swiper = res.data.Tv.slides
        })
    }
}
</script>
