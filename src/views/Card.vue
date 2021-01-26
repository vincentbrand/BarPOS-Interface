<template>
  <!-- Main content -->
  <section class="content pt-3">
    <div class="container-fluid">
      <div class="row">
        <!-- single customer -->
        <div class="col-3" v-for="item in billsList" :key='item.id'>
          <div class="card">
            <div class="card-body p-0">
              <div class="d-md-flex">
                <div class="p-1 flex-fill p-4" style="overflow: hidden">
                  <div class="row">
                    <div class="col-9">
                      <h5 class="text-primary">{{item.name}}</h5>
                    </div>
                    <div class="col-2 text-right">
                      <h5 class="text-primary">{{item.quantity}}</h5>
                    </div>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-glass-martini-alt fa-5x text-primary"></i>
                  </div>
                  <div class="text-right mt-4">
                    <span class="text-black">{{item.date}}, {{item.time}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END OF: single customer -->

        <!-- single customer -->
        <div class="col-3">
          <div class="card" @click="openBillsModal">
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
      console.log(123)
      this.setShowBillsModel(true)
    },

    ...mapActions("bills", [
      "setBills",
      "setShowBillsModel"
    ])
  }
}
</script>
