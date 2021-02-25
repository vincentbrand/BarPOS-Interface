<template>
<!-- Main content -->
<section class="content pt-3">
    <div class="container-fluid">

        <div class="row">


          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Create New Venue</h3>
              </div>
              <div class="card-body">

                <div class="form-group">
                  <label>Name</label>
                  <input type="text" class="form-control" placeholder="Name">
                </div>
                <div class="form-group">
                  <label>City</label>
                  <input type="text" class="form-control" placeholder="Shanghai">
                </div>
                <div class="form-group">
                  <label>District</label>
                  <input type="text" class="form-control" placeholder="Jingan">
                </div>
                <div class="form-group">
                  <label>Street</label>
                  <input type="text" class="form-control" placeholder="YanPing Road 123">
                </div>

                <hr>
                <h5>Times</h5>
                <hr>

                <div class="form-group">
                  <div class="row">
                    <div class="col-6">
                      <label class="form-label">Business opens at:</label>
                    </div>
                    <div class="col-6">
                      <label class="form-label">Business closes at:</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="input-group date">
                        <el-time-picker
                        size='small'
                        v-model="BusinessOpensAt"
                        :picker-options="{
                            selectableRange: '00:00:00 - 23:59:00'
                        }">
                        </el-time-picker>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-group date">
                        <el-time-picker
                        size='small'
                        v-model="BusinessClosesAt"
                        :picker-options="{
                            selectableRange: '00:00:00 - 23:59:00'
                        }">
                        </el-time-picker>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <div class="row">
                    <div class="col-6">
                      <label class="form-label">Happy Hour starts:</label>
                    </div>
                    <div class="col-6">
                      <label class="form-label">Happy Hour stops:</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="input-group date">
                        <el-time-picker
                        size='small'
                        v-model="HappyHourStartAt"
                        :picker-options="{
                            selectableRange: '00:00:00 - 23:59:00'
                        }"
                        placeholder="任意时间点">
                        </el-time-picker>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-group date">
                        <el-time-picker
                        size='small'
                        v-model="HappyHourClosesAt"
                        :picker-options="{
                            selectableRange: '00:00:00 - 23:59:00'
                        }"
                        placeholder="任意时间点">
                        </el-time-picker>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <!-- <div class="col-md-4">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Create New Venue</h3>
              </div>
              <div class="card-body">

                <div class="form-group">
                  <label>Name</label>
                  <div class="row">
                    <div class="col-6">
                      <input type="text" class="form-control" placeholder="名字">
                    </div>
                    <div class="col-6">
                      <input type="text" class="form-control" placeholder="Name">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>City</label>
                  <div class="row">
                    <div class="col-6">
                      <input type="text" class="form-control" placeholder="上海">
                    </div>
                    <div class="col-6">
                      <input type="text" class="form-control" placeholder="Shanghai">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>District</label>
                  <div class="row">
                    <div class="col-6">
                      <input type="text" class="form-control" placeholder="静安区">
                    </div>
                    <div class="col-6">
                      <input type="text" class="form-control" placeholder="Jingan">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Street</label>
                  <div class="row">
                    <div class="col-6">
                      <input type="text" class="form-control" placeholder="延平路123号">
                    </div>
                    <div class="col-6">
                      <input type="text" class="form-control" placeholder="YanPing Road 123">
                    </div>
                  </div>
                </div>

                <hr>
                <h5>Times</h5>
                <hr>

                <div class="form-group">
                  <div class="row">
                    <div class="col-6">
                      <label class="form-label">Business opens at:</label>
                    </div>
                    <div class="col-6">
                      <label class="form-label">Business closes at:</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="input-group date">
                        <input type="text" class="form-control datetimepicker-input" data-target="#timepicker">
                        <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                          <div class="input-group-text"><i class="far fa-clock"></i></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-group date">
                        <input type="text" class="form-control datetimepicker-input" data-target="#timepicker">
                        <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                          <div class="input-group-text"><i class="far fa-clock"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <div class="row">
                    <div class="col-6">
                      <label class="form-label">Happy Hour starts:</label>
                    </div>
                    <div class="col-6">
                      <label class="form-label">Happy Hour stops:</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="input-group date">
                        <input type="text" class="form-control datetimepicker-input" data-target="#timepicker">
                        <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                          <div class="input-group-text"><i class="far fa-clock"></i></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="input-group date">
                        <input type="text" class="form-control datetimepicker-input" data-target="#timepicker">
                        <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                          <div class="input-group-text"><i class="far fa-clock"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->

          <!-- additional settings -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Additional Settings</h3>
              </div>
              <div class="card-body">

                <!--
                <p>Employees</p>
                <hr>
                <h6>Products</h6>
                <hr>
                -->

                <label class="form-label">Copy products from</label>
                <div class="form-group row">
                  <div class="col-5">
                    <select class="form-control">
                      <option selected>The Hai</option>
                      <option>Real Shanghai</option>
                    </select>
                  </div>

                  <div class="col-2">
                    <button type="submit" class="btn btn-sm btn-block btn-info mt-1"><i class="fas fa-arrow-right"></i></button>
                  </div>
                  <div class="col-5">
                    <select class="form-control">
                      <option>The Hai</option>
                      <option selected>Real Shanghai</option>
                    </select>
                  </div>
                </div>

                <hr>

                <div class="form-group row">
                  <label class="col-8 col-form-label">Remove all Products</label>
                  <div class="col-4 text-right">
                    <button type="submit" class="btn btn-sm btn-block btn-danger">Delete All <i class="fas fa-trash-alt"></i></button>
                  </div>
                </div>

                <hr>

                <div class="form-group row">
                  <label class="col-4 col-form-label">Month Goal</label>
                  <div class="col-8">
                    <input type="text" class="form-control" placeholder="Name">
                  </div>
                </div>

                <hr>

                <div class="form-group">
                    <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35' v-model="sendNotifications"></el-switch>
                    <span class="text-bold pl-3">Send notifications</span>
                </div>

                <div class="form-group">
                    <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35' v-model="multilanguage"></el-switch>
                    <span class="text-bold pl-3">Multilanguage</span>
                </div>

              </div>
            </div>
          </div>

        </div>
    </div>


</section>
<!-- /. Main content -->
</template>

<script>
export default {
    data: () => ({
        BusinessOpensAt: "",
        BusinessClosesAt: "",
        HappyHourStartAt: "",   
        HappyHourClosesAt: "",
        sendNotifications: false,
        multilanguage: false
    }),
}
</script>

<style>
a{
    border: none;
}
</style>
