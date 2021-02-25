<template>
    <div>
        <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Employees</h1>
          </div>
          <div class="col-sm-6">

          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content pr-3 pl-3">

      <!-- Default box -->
      <div class="card card-solid">
        <div class="card-body pb-0" style="display: block;">
          <div class="row d-flex align-items-stretch">

            <div class="col-12 mb-2 text-right">
              <button class="btn btn-success btn-sm mr-2" @click="openBillsModal">
                <i class="fas fa-plus-circle"></i>
                <span class="">Add</span>
              </button>
              <button class="btn btn-secondary btn-sm mr-2">
                <i class="fas fa-file-import"></i>
                <span class="">Import</span>
              </button>
              <button class="btn btn-primary btn-sm">
                <i class="fas fa-file-export"></i>
                <span class="">Export</span>
              </button>
              <hr>
            </div>


            <div class="col-12 col-sm-4 col-md-3 d-flex align-items-stretch" v-for="item in 5" :key="item">
              <div class="card bg-light">
                
                <div class="card-body pt-0">
                  <div class="row">
                    <div class="col-9">
                      <div class="text-muted border-bottom-0 pt-2 pb-2">The Hai </div>
                    </div>
                    <div class="col-3 text-right">
                      <div class="employee-switch">
                        <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35' v-model="autoAddCustomer"></el-switch>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-7">
                      <h2 class="lead"><b>Dan</b></h2>
                      <p class="text-muted text-sm"><b>Position: </b> Manager </p>
                      <ul class="ml-4 mb-0 fa-ul text-muted">
                        <li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span>(+86)12212239852</li>
                      </ul>
                    </div>
                    <div class="col-5 text-center">
                      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg" alt="user-avatar" class="img-circle img-fluid">
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="text-right">

                    <button class="btn btn-info btn-sm mr-1">
                      <i class="fas fa-pencil-alt"></i>
                      <span class="">Edit</span>
                    </button>
                    <button class="btn btn-danger btn-sm mr-1">
                      <i class="fas fa-trash"></i>
                      <span class="">Delete</span>
                    </button>
                    <button class="btn btn-primary btn-sm">
                      <i class="fas fa-user"></i>
                      <span class="">View</span>
                    </button>

                  </div>
                </div>
              </div>
            </div>



            <div class="col-12 col-sm-4 col-md-3 d-flex" @click="openBillsModal">
              <div class="card bg-light">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 text-center">
                      <i class="fas fa-plus-circle fa-5x text-gray-dark"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>







          </div>
        </div>
        <!-- /.card-body -->
        <!-- <div class="card-footer">
          <nav aria-label="Contacts Page Navigation">
            <ul class="pagination justify-content-center m-0">
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">4</a></li>
              <li class="page-item"><a class="page-link" href="#">5</a></li>
              <li class="page-item"><a class="page-link" href="#">6</a></li>
              <li class="page-item"><a class="page-link" href="#">7</a></li>
              <li class="page-item"><a class="page-link" href="#">8</a></li>
            </ul>
          </nav>
        </div> -->
        <!-- /.card-footer -->
      </div>
      <!-- /.card -->

    </section>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
import Api from '@/Http/Employees';
export default {
  data: () => ({
    employees: []
  }),

  created () {
    Api.getEmployees().then((res) => {
      this.employees = res.data
    })
  },

  computed: {
    ...mapGetters("bills", {
      "billsList": "getBillsList",
    })
  },

  methods: {
    openBillsModal() {
      this.setShowBillsModel(true)
    },
    ...mapActions("bills", [
      "setBills",
      "setShowBillsModel"
    ])
  }
}
</script>

<style>
.employee-switch{

}
</style>
