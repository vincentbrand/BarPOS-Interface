<template>
  <!-- Main content -->
  <section class="content pt-3">
    <div class="container-fluid">
      <div class="row">
        <!-- single customer -->
        <div class="slot" v-for="item in billsList" :key='item.id'>
          <div class="card d-card" @click="goBillsList(item)">
            <div class="card-body p-0">
              <div class="text-center h4">{{ item.name | truncate(12, '') }}</div>

              <div class="text-center pt-3">
                <i :class="item.items[0] ? item.items[0].product.category.icon : 'fas fa-glass-martini-alt '"
                class="fa-3x text-primary"></i>
              </div>

              <div class="mt-4 d-flex justify-content-between text-bold">
                <span v-if="display.time" class="time">{{item.time}}</span>
                <span v-if="display.quantity" class="quantity">{{item.quantity}}</span>
                <span v-if="display.total" class="total">{{item.total}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- END OF: single customer -->

        <!--
        <div class="slot" v-for="index in slots" :key="index">
          <div class="card d-card" @click="openBillsModal">
            <div class="card-body p-0">
              <div class="d-md-flex">
                <div class="p-1 flex-fill text-center p-4">
                  <i class="fas fa-plus-circle fa-4x text-gray my-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        -->


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
      slots: 10,
      // settings !!
      display:{
        time:true,
        quantity:true,
        total:true,
      }
    }),

  created () {
    this.setBills();
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
.text-cut{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
}
.h4{
  font-weight: normal;
  font-size: 1.1rem;
}
.slot{
  width:200px;
  margin:0 0 20px 20px;
}
.time{
  font-weight: normal;
}
.quantity{
  font-weight: normal;
}
.total{
  font-weight: normal;
}

.card {
  margin-bottom: 0rem;
}

</style>
