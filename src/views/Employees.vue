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
            <!-- left -->
            <div class="col-6">
              <el-select v-model="venueId" placeholder="请选择" size="small">
                <el-option
                v-for="item in venues"
                :key="item.id"
                :label="item.name"
                :value="item.id">
                </el-option>
              </el-select>
            </div>
              <!-- right -->
              <div class="col-6 text-right">
                <div class="col-12 mb-2 text-right">
                  <button class="btn btn-success btn-sm mr-2" @click="addVisible = true">
                    <i class="fas fa-plus-circle"></i>
                    <span class="">Add</span>
                  </button>
                  <button class="btn btn-secondary btn-sm mr-2" @click="importFile = true">
                    <i class="fas fa-file-import"></i>
                    <span class="">Import</span>
                  </button>
                  <button class="btn btn-primary btn-sm">
                    <i class="fas fa-file-export"></i>
                    <span class="">Export</span>
                  </button>
                </div>
              </div>

              <div class="col-12 mb-2">
                <hr>
              </div>

              <div class="col-12 col-sm-4 col-md-3 d-flex align-items-stretch" v-for="item in employees" :key="item.id">
                <div class="card bg-light">
                  
                  <div class="card-body pt-0">
                    <div class="row">
                      <div class="col-9">
                        <div class="text-muted border-bottom-0 pt-2 pb-2">The Hai </div>
                      </div>
                      <div class="col-3 text-right">
                        <div class="employee-switch">
                          <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35'></el-switch>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-7">
                        <h2 class="lead"><b>{{item.name}}</b></h2>
                        <p class="text-muted text-sm"><b>Position: </b> Manager </p>
                        <ul class="ml-4 mb-0 fa-ul text-muted">
                          <li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span>{{item.phone}}</li>
                        </ul>
                      </div>
                      <div class="col-5 text-center">
                        <img src="../assets/avatar.jpg" alt="user-avatar" class="img-circle img-fluid" style="width: 80px;height: 80px">
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="text-right">

                      <button class="btn btn-info btn-sm mr-1" @click="addVisible = true">
                        <i class="fas fa-pencil-alt"></i>
                        <span class="d-none d-sm-none d-md-none d-lg-block float-right ml-1">Edit</span>
                      </button>
                      <button class="btn btn-danger btn-sm mr-1">
                        <i class="fas fa-trash"></i>
                        <span class="d-none d-sm-none d-md-none d-lg-block float-right ml-1">Delete</span>
                      </button>
                      <button class="btn btn-primary btn-sm">
                        <i class="fas fa-user"></i>
                        <span class="d-none d-sm-none d-md-none d-lg-block float-right ml-1">View</span>
                      </button>

                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-4 col-md-3 d-flex align-items-stretch" @click="addVisible = true">
                <div class="card bg-light w-100 ">
                  <div class="card-body d-flex justify-content-center align-items-center">
                    <div class="row">
                      <div class="col-12 text-center ">
                        <i class="fas fa-plus-circle fa-5x text-gray-dark"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        
      </div>
      </div>
      <!-- /.card -->

    </section>


      <!-- edit / add employees -->
      <el-dialog
          title="Add Employee"
          :visible.sync="addVisible"
          width="30%">

        <div class="row my-3">
          <div class="col-6">
            <el-input placeholder="Name" v-model="employee.name"></el-input>
          </div>
          <div class="col-6">
              <el-select v-model="venue" placeholder="Select a Venue">
                <el-option
                v-for="item in venues"
                :key="item.id"
                :label="item.name"
                :value="item.id">
                </el-option>
              </el-select>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-6">
            <el-input placeholder="Name" v-model="employee.phone"></el-input>
          </div>
          <div class="col-6">
            <el-select v-model="role" placeholder="Select a Role">
              <el-option
                  v-for="item in roles"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addVisible = false">Cancel</el-button>
          <el-button type="success" @click="addVisible = false">Save</el-button>
        </span>
      </el-dialog>
      <!-- END OF: edit / add employees -->

      <!-- edit / add employees -->
      <el-dialog
          title="Import from csv"
          :visible.sync="importFile"
          width="30%"
          class="text-center"
          center>

        <el-upload
            class="upload-demo text-center"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
          <el-button size="small" type="primary">Click to upload</el-button>
          <div slot="tip" class="el-upload__tip mt-3">.csv files with a size less than 1500kb</div>
        </el-upload>


        <span slot="footer" class="dialog-footer">
          <el-button @click="addVisible = false">Cancel</el-button>
          <el-button type="success" @click="addVisible = false">Import</el-button>
        </span>
      </el-dialog>
      <!-- END OF: edit / add employees -->


    </div>
</template>

<script>
import Api from '@/Http/Login/index';

export default {
  data: () => ({
    bg: require("../assets/bg.jpg"),
    employees: [],
    venues: [],
    venueId: null,
    addVisible: false,
    importFile: false,
    employee: {
      name: '',
      phone: ''
    },
    roles: [
      {
        value: 1,
        label: 'Guest'
      }, {
        value: 2,
        label: 'Staff'
      }, {
        value: 3,
        label: 'Waiter'
      }, {
        value: 4,
        label: 'Manager'
      }, {
        value: 5,
        label: 'Supervisor'
      }
    ],
    role: '',
    venue: '',
  }),

  watch: {
    venueId (val) {
      Api.setEmployeesVenues(val).then(res => {
        this.employees = res.data
      })
    }
  },

  created () {
    Api.setVenues().then(res => {
      this.venues = res.data
      this.venueId = res.data[0].id
    })
  },

  methods: {

  }
}
</script>

<style>
</style>
