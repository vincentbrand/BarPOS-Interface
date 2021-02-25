<template>
<section class="content pt-3">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
            <h4>Bills Setting</h4>
        </div>
        <!-- single customer -->
        <div class="col-6">
          <div class="card">
            <div class="card-body">
                <label class="text-capitalize">Alipay Code</label>
                <el-upload
                class="upload-demo w-100"
                drag
                action=""
                multiple>
                <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>

                <img :src="weChatQrCode" alt="" style="width: 50%; margin-left: 25%;">
            </div>
            </div>
          </div>

            <!-- WeChat pay -->
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <label class="text-capitalize">WeChatPay Code</label>
                        <el-upload
                        class="upload-demo w-100"
                        drag
                        action=""
                        multiple>
                        <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                        <img :src="weChatQrCode" alt="" style="width: 50%; margin-left: 25%;">
                    </div>

                </div>
            </div>
        </div>

        
    </div>


      <!-- /.row -->
    <!--/. container-fluid -->

    
  </section>
</template>

<script>
export default {
    data: () => ({
    weChatQrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX///8AAABVwtN+AAACjElEQVR4nO3dS47bQAwE0Jn7XzqrAAEit1hFGcYkj8s2P/V0AX997+rrd0U9X3/V5Kcy4Xae8LKHkDBKuJ0nvOwhJIwSHlYfqssafY5o4WmK8G6+CkQYLzxNEd7NV4EI44WnKcK7+SrQh4WT893Vw3h0K0tISEhISEhI+Jxw+RUICQkJCQkJf5bwAHvqJ0JCQkJCQsK9cFKROdo8uZVNEU6vEvZFeDdFOL1K2Bfh3dT3rpbm6KVMuJ0nfPClTLidJ3zwpUy4nSd88KVMuJ0nfPBlmXBb0eoJ47FkTxXhdXM3/pkivG7uxj9ThNfN3fhnivC6uRsvky0DTSI+1RyNExISEhISEl66Jp7Joqh5Ul2M06LlasK4CAknyQinewpeHeO0aLmaMK5SGEWcHIv2PMUgJIxyZOeTzYSE3U+Ed+eTzYR3Jw4bu6tdT/TtDuOEhISEhISEf05NYNHG5XhkHn0OQkJCQkJCwjD0af71wslL91OUh5CQkJCQkLBONtnTVZmekJCQkJCQ8Dnh4wsf/4jbQFER9kcJF4GiIuyPEi4CRUXYHy2F74s4yXEIfRjfUgkJCQkJCQlnFa2O0h/GlzGyIrxpJrweX8bIivCmmfB6fBkjK8Kb5jcKJ8cmOSYv0ZeavBzynNCEhISEhIT/sXCZY5n1jZsJCQkJCQkJ3/B/wFGg6Ho0lZ0nJCQkJCQknAmj9JOpSYzRFyckJCQkJCR8p7BLP7kefVbCF2OHq9HCqAhfNEeBCAl3RfiiOQr0jwgntby6PHpYSJgfWwbqjhISRseWgbqjhITRsWWg7mgp7OoQOsoxaS4TbucJL1+65jLhdp7w8qVrLhNu5wkvX7rmMuF2nvDypWvu6hdwJWEkXvHKCAAAAABJRU5ErkJggg==',

    }),
}
</script>

<style>
.el-upload.el-upload--text,.el-upload-dragger{
    width: 100% !important;
}
.el-upload-dragger{
    border: 3px #eeeeee dashed !important;;
}
</style>
