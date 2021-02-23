<template>
  <!-- Main content -->
  <section class="content pt-3">
    <div class="container-fluid">
      <div class="row">
        <!-- single customer -->
        <div class="col-2" v-for="item in billsList" :key='item.id'>
          <div class="card d-card" @click="goBillsList(item)">
            <div class="card-body p-0">
              <div class="text-block text-center text-cut h4">{{item.name}}</div>
                
              <div class="text-center pt-3">
                <i :class="item.items[0] ? item.items[0].product.category.icon : 'fas fa-glass-martini-alt '" 
                class="fa-5x text-primary"></i>
              </div>

              <div class="mt-4 d-flex justify-content-between text-bold">
                <span class="text-black">{{item.quantity}}</span>
                <span class="text-black">{{item.time}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- END OF: single customer -->

        <!-- single customer -->
        <div class="col-2">
          <div class="card d-card" @click="openBillsModal">
            <div class="card-body p-0">
              <div class="d-md-flex">
                <div class="p-1 flex-fill text-center p-4">
                  <i class="fas fa-plus-circle fa-5x text-gray-dark mt-4 mb-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END OF: single customer -->
      </div>

      <!-- /.row -->
    </div>
    <!--/. container-fluid -->

    
  </section>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
  data: () => ({
  }),

  created () {
    if (this.billsList.length <= 0) {
      this.setBills()
    }
  },

  computed: {
    ...mapGetters("bills", {
      "billsList": "getBillsList",
    })
  },

  methods: {
    openBillsModal () {
      this.setShowBillsModel(true)
    },

    goBillsList (item) {
      // this.$router.push(`/bills?idx=${idx}`)
      this.$router.push(`/bills/${item.id}`)
    },

    ...mapActions("bills", [
      "setBills",
      "setShowBillsModel"
    ])
  }
}
</script>

<style>
.d-card{
  width: 100%;
  padding: 20px;
}
</style>
