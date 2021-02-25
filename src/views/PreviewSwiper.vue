<template>
<div class="w-100" style="padding: 50px">
    <el-carousel :interval="3000" :height="vdaH" type="card">
        <el-carousel-item v-for="item in swiper" :key="item">
            <img :src="item" alt="" class="w-100 h-100">
        </el-carousel-item>
    </el-carousel>
</div>
</template>

<script>
export default {
    data: () => ({
        vdaH: 0,
        swiper: [
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1639829983,1524205132&fm=26&gp=0.jpg",
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa3.att.hudong.com%2F65%2F38%2F16300534049378135355388981738.jpg&refer=http%3A%2F%2Fa3.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616733873&t=fcb50be167f8e27c7bf74ec3aec6ab1f",
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F52%2F62%2F31300542679117141195629117826.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616733873&t=0b9793a353e776452dc777fffecc8e61",
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2166338999,2869506199&fm=26&gp=0.jpg",
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa3.att.hudong.com%2F08%2F22%2F01300000013945118822221353308.jpg&refer=http%3A%2F%2Fa3.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616741673&t=412e379a716967884c756265fdb5da8b"
        ]
    }),

    created () {
        let h = document.documentElement.clientHeight || document.body.clientHeight;
        this.vdaH = (h - 100) + 'px';
    }
}
</script>
