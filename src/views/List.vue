<template>
  <!-- Main content -->
  <section class="content pt-3">
    <div class="container-fluid">
      <div class="row">
        <!-- user  -->
        <div class="col-md-6" style="max-height: 600px;overflow:auto">
          <el-collapse v-model="userIdx" accordion>
            <div class="card" v-for="(user, uIdx) in billsList" :key="'bills' + user.id"
            :class="uIdx===userIdx?'active':''">
              <div class="card-body" style="padding-top: 10px;padding-bottom: 10px;">
                <el-collapse-item :title="user.name" :name="uIdx" @click="onChangeUidx(uIdx)">
                  <table class="table table-hover text-nowrap" :id="user.name">
                    <tbody>
                      
                      <tr v-for="(item,index) in user.items" :key="item.id">
                        <td>{{item.product.name}}</td>
                        <td>¥ {{item.price}}</td>
                        <td>{{item.quantity}}</td>
                        <td>{{item.time}}</td>
                        <td class="text-right">
                          <button class="btn btn-info mr-2" @click="copyGoodsItem(index)">
                            <i class="el-icon-refresh text-white"></i>
                          </button>

                          <button class="btn btn-danger" @click="deleteGoodsItem(index, item)">
                            <i class="el-icon-delete text-white"></i>
                          </button>
                        </td>
                      </tr>
                    
                    </tbody>
                  </table>

                  <div class="clearfix">
                    
                    <button class="btn btn-secondary">
                      <i class="fas fa-search"></i> Details
                    </button>

                    <button class="btn btn-info float-right" @click="openOtherPay(user)">
                      <i class="fas fa-yen-sign"></i> Manual Pay
                    </button>

                    <button class="btn btn-info float-right mr-3"  @click="openQrCode">
                      <i class="fas fa-qrcode"></i> QR Pay
                    </button>

                  </div>
                </el-collapse-item>
              </div>
            </div>
          </el-collapse>
        </div>

        <!-- food -->
        <div class="col-md-6" style="max-height: 600px;overflow:auto">
          <div class="card card-primary card-outline card-tabs">
            <el-tabs type="border-card">

              <el-tab-pane :label="item.name" v-for="item in category" :key='item.id'>
                <table class="table">
                    <tbody>
                      <tr v-for="goods in item.products" :key="'goods' + goods.id">
                        <td>{{ goods.name }}</td>
                        <td>
                          <button class="btn btn-info" @click.stop="addUserGoods(goods, 'happyhour')">
                             {{ goods.happyhour }}
                          </button>
                        </td>
                        <td>
                          <button class="btn btn-primary" @click.stop="addUserGoods(goods, 'price')">
                             {{ goods.price }}
                          </button>
                        </td>

                        <td>
                          <button class="btn btn-secondary" @click.stop="addUserGoods(goods, 'discount')">
                             {{ goods.discount }}
                          </button>
                        </td>
                        
                        <td>
                          <el-input-number
                          v-model="goods.quantity"
                          controls-position="right"
                          :min="1" :max="10"
                          ></el-input-number>
                        </td>
                         
                      </tr>
                    </tbody>
                  </table>
              </el-tab-pane>
              
              <el-tab-pane>
                <span slot="label">
                  <i class="fas fa-plus-circle"></i>
                </span>
                <div class="tab-pane fade show">
                  <h5>Add Custom Product</h5>
                  <hr />
                  <div class="flex justify-content-between flex-column">
                    <div class="form-group mb-2">
                      <input type="text" v-model="customProduct.name" class="form-control" placeholder="Name" />
                    </div>
                    <div class="form-group mb-2">
                      <input type="decimal" v-model="customProduct.price" class="form-control" placeholder="50" />
                    </div>
                    <div class="form-group">
                      <el-input-number
                      v-model="customProduct.quantity"
                      controls-position="right"
                      :min="1" :max="10"
                      ></el-input-number>
                    </div>
                    <div class="form-group mb-2">
                      <button class="btn btn-info" @click="addUserCustomGoods">
                          Add To Bill
                      </button>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>

        </div>
      </div>

      <!-- /.row -->
    </div>
    <!--/. container-fluid -->

    <!-- 微信  支付宝 -->
    <el-dialog
    title="QR Payment"
    :visible.sync="isShowPayCode"
    width="60%">
        <div class="row">
            <div class="col-6 text-center">
            <h4>WeChat</h4>
            <img
                :src="weChatQrCode"
                class="img-fluid"
            />
            </div>
            <div class="col-6 text-center">
            <h4>Alipay</h4>
            <img
                :src="AlipayQrCode"
                class="img-fluid"
            />
            </div>
        </div>

        <span slot="footer" class="dialog-footer">
            <button class="btn btn-info" @click="isShowPayCode = false">Close</button>
        </span>
    </el-dialog>

    <!-- 其他支付方式 -->
    <el-dialog
    title="Method of Payment"
    :visible.sync="isShowOtherPay"
    width="30%">
        <div class="row">
            <div class="col-6 text-center">
              <button class="btn btn-info" @click="closePayBills">
                Cash Payments
              </button>
            </div>
            <div class="col-6 text-center">
              <button class="btn btn-info" @click="closePayBills">
                Unionpay Pay
              </button>
            </div>
        </div>
  </el-dialog>

  </section>
  
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
import { get as CookieGet } from 'js-cookie';
export default {
  name: "Home",

  data: () => ({
    isShowPayCode: false,
    isShowOtherPay: false,
    userIdx: "",
    categoryTabIdx: 0,
    emloyeeId: 0,
    closeOtherPayId: 0,
    weChatQrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX///8AAABVwtN+AAACjElEQVR4nO3dS47bQAwE0Jn7XzqrAAEit1hFGcYkj8s2P/V0AX997+rrd0U9X3/V5Kcy4Xae8LKHkDBKuJ0nvOwhJIwSHlYfqssafY5o4WmK8G6+CkQYLzxNEd7NV4EI44WnKcK7+SrQh4WT893Vw3h0K0tISEhISEhI+Jxw+RUICQkJCQkJf5bwAHvqJ0JCQkJCQsK9cFKROdo8uZVNEU6vEvZFeDdFOL1K2Bfh3dT3rpbm6KVMuJ0nfPClTLidJ3zwpUy4nSd88KVMuJ0nfPBlmXBb0eoJ47FkTxXhdXM3/pkivG7uxj9ThNfN3fhnivC6uRsvky0DTSI+1RyNExISEhISEl66Jp7Joqh5Ul2M06LlasK4CAknyQinewpeHeO0aLmaMK5SGEWcHIv2PMUgJIxyZOeTzYSE3U+Ed+eTzYR3Jw4bu6tdT/TtDuOEhISEhISEf05NYNHG5XhkHn0OQkJCQkJCwjD0af71wslL91OUh5CQkJCQkLBONtnTVZmekJCQkJCQ8Dnh4wsf/4jbQFER9kcJF4GiIuyPEi4CRUXYHy2F74s4yXEIfRjfUgkJCQkJCQlnFa2O0h/GlzGyIrxpJrweX8bIivCmmfB6fBkjK8Kb5jcKJ8cmOSYv0ZeavBzynNCEhISEhIT/sXCZY5n1jZsJCQkJCQkJ3/B/wFGg6Ho0lZ0nJCQkJCQknAmj9JOpSYzRFyckJCQkJCR8p7BLP7kefVbCF2OHq9HCqAhfNEeBCAl3RfiiOQr0jwgntby6PHpYSJgfWwbqjhISRseWgbqjhITRsWWg7mgp7OoQOsoxaS4TbucJL1+65jLhdp7w8qVrLhNu5wkvX7rmMuF2nvDypWvu6hdwJWEkXvHKCAAAAABJRU5ErkJggg==',
    AlipayQrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX///8AAABVwtN+AAACjElEQVR4nO3dS47bQAwE0Jn7XzqrAAEit1hFGcYkj8s2P/V0AX997+rrd0U9X3/V5Kcy4Xae8LKHkDBKuJ0nvOwhJIwSHlYfqssafY5o4WmK8G6+CkQYLzxNEd7NV4EI44WnKcK7+SrQh4WT893Vw3h0K0tISEhISEhI+Jxw+RUICQkJCQkJf5bwAHvqJ0JCQkJCQsK9cFKROdo8uZVNEU6vEvZFeDdFOL1K2Bfh3dT3rpbm6KVMuJ0nfPClTLidJ3zwpUy4nSd88KVMuJ0nfPBlmXBb0eoJ47FkTxXhdXM3/pkivG7uxj9ThNfN3fhnivC6uRsvky0DTSI+1RyNExISEhISEl66Jp7Joqh5Ul2M06LlasK4CAknyQinewpeHeO0aLmaMK5SGEWcHIv2PMUgJIxyZOeTzYSE3U+Ed+eTzYR3Jw4bu6tdT/TtDuOEhISEhISEf05NYNHG5XhkHn0OQkJCQkJCwjD0af71wslL91OUh5CQkJCQkLBONtnTVZmekJCQkJCQ8Dnh4wsf/4jbQFER9kcJF4GiIuyPEi4CRUXYHy2F74s4yXEIfRjfUgkJCQkJCQlnFa2O0h/GlzGyIrxpJrweX8bIivCmmfB6fBkjK8Kb5jcKJ8cmOSYv0ZeavBzynNCEhISEhIT/sXCZY5n1jZsJCQkJCQkJ3/B/wFGg6Ho0lZ0nJCQkJCQknAmj9JOpSYzRFyckJCQkJCR8p7BLP7kefVbCF2OHq9HCqAhfNEeBCAl3RfiiOQr0jwgntby6PHpYSJgfWwbqjhISRseWgbqjhITRsWWg7mgp7OoQOsoxaS4TbucJL1+65jLhdp7w8qVrLhNu5wkvX7rmMuF2nvDypWvu6hdwJWEkXvHKCAAAAABJRU5ErkJggg==',
    customProduct: {
      id: null,
      price: "",
      type: 'custom',
      quantity: 1,
      name: ''
    }
  }),

  computed: {
    ...mapGetters("bills", {
      "billsList": "getBillsList",
      "category": "getFoodCategory"
    })
  },

  created () {
    const idx = this.$route.query.idx;
    this.userIdx = idx ? parseInt(idx) : "";
    this.emloyeeId = CookieGet("POS_USERID")
    // if (this.billsList.length <= 0) {
      this.setBills()
    // }
    if (this.category.length <= 0) {
      this.setFoodCategory()
    }
  },

  methods: {
    deleteGoodsItem(index, item) {
      this.removeBillsGoods({
        userIdx: this.userIdx,
        idx: index,
        item,
        price: item.price
      })
    },

    copyGoodsItem (idx) {
      const item = this.billsList[this.userIdx].items[idx]
      const bills = this.billsList[this.userIdx]
      this.addBillsGoods({
        userIdx: this.userIdx,
        item: item,
        bill_id: bills.id,
        type: item.type,
        price: item.price
      })
    },

    onChangeUidx(idx) {
      this.userIdx = idx;
    },

    addUserGoods(item, key) {
      if (this.userIdx === "") return;
      const bills = this.billsList[this.userIdx]
      this.addBillsGoods({
        userIdx: this.userIdx,
        item: item,
        bill_id: bills.id,
        price: item[key],
        type: key
      })
    },

    addUserCustomGoods() {
      if (this.userIdx === "") return;
      const bills = this.billsList[this.userIdx]
      this.addBillsGoods({
        userIdx: this.userIdx,
        item: this.customProduct,
        bill_id: bills.id,
        price: this.customProduct.price,
        type: "custom"
      })
    },

    openQrCode () {
      this.isShowPayCode = true
    },

    openOtherPay (item) {
      this.closeOtherPayId = item.id
      this.isShowOtherPay = true
    },

    closePayBills () {
      this.userCloseBills(this.closeOtherPayId).then(() => {
        this.isShowOtherPay = false
        this.userIdx = ""
        this.setBills()
      })
    },

    ...mapActions("bills", [
      "setBills",
      "setFoodCategory",
      "removeBillsGoods",
      "addBillsGoods",
      "userCloseBills"
    ])
  },
};
</script>

<style>
.el-collapse-item__header,.el-collapse-item__wrap{
  font-size: 18px;
  border-bottom: none;
}
.el-collapse-item__content{
  padding-bottom: 0;
}
.el-button.is-circle{
  outline: none;
}
.card{
  box-shadow: none !important;
}
.card.active{
  box-shadow: 0 0 10px #409EFF !important;
  border: 1px solid #409EFF;
}
.el-collapse{
  border-bottom: none;
  border-top: none;
}
</style>
