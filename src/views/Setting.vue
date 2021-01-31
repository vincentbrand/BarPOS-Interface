<template>
<!-- Main content -->
<section class="content pt-3">

  <div class="container-fluid">
    <div class="row">
      <!-- Sytem Settings -->
      <div class="col-md-3">
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">Sytem Settings</h3>
          </div>
          <div class="card-body">

            <div class="form-group row">
              <label class="col-7 col-form-label">Venue Setting</label>
              <div class="col-5">
                <el-select size="small" v-model="VenueSetting">
                  <el-option
                  v-for="item in VenueSettingOptions"
                  :key="item.label"
                  :label="item.label"
                  :value="item.value" />
                </el-select>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-7 col-form-label">Interface Theme</label>
              <div class="col-5">
                <el-select size="small" v-model="InterfaceTheme">
                  <el-option
                  v-for="item in InterfaceThemeOptions"
                  :key="item.label"
                  :label="item.label"
                  :value="item.value" />
                </el-select>
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
                  <label class="form-label">Happy Hour starts at:</label>
                </div>
                <div class="col-6">
                  <label class="form-label">Happy Hour closes at:</label>
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

            <hr>
          </div>

        </div>
      </div>

      <!-- Usage Settings -->
      <div class="col-md-3">
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">Usage Settings</h3>
          </div>
          <div class="card-body">

            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-10 col-form-label">
                Maximum amount of total active bills in the system
              </label>
              <div class="col-sm-2">
                <input type="email" class="form-control" id="inputEmail3" placeholder="5" disabled="">
              </div>
            </div>

            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-10 col-form-label">
                Maximum item per active bill in the system
              </label>
              <div class="col-sm-2">
                <input type="email" class="form-control" id="inputEmail3" placeholder="5" disabled="">
              </div>
            </div>

            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-10 col-form-label">
                Maximum amount of customers saved in the system
              </label>
              <div class="col-sm-2">
                <input type="email" class="form-control" id="inputEmail3" placeholder="10" disabled="">
              </div>
            </div>

            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-10 col-form-label">
                Maximum amount of employees able to be used the system
              </label>
              <div class="col-sm-2">
                <input type="email" class="form-control" id="inputEmail3" placeholder="1" disabled="">
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Feature Settings -->
      <div class="col-md-3">
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">Feature Settings</h3>
          </div>
          <div class="card-body">

            <div class="form-group">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35' v-model="autoLogout"></el-switch>
              <span class="text-bold pl-3">auto-logout</span>
            </div>

            <div class="form-group">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35' v-model="autoAddCustomer"></el-switch>
              <span class="text-bold pl-3">auto-add customer</span>
            </div>

            <div class="form-group">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35' v-model="addUserSuggestion"></el-switch>
              <span class="text-bold pl-3">add user suggestion</span>
            </div>

            <div class="form-group">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35' v-model="generateSalesReport"></el-switch>
              <span class="text-bold pl-3">generate sales report</span>
            </div>

            <div class="form-group">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35' v-model="receivePromotional"></el-switch>
              <span class="text-bold pl-3">receive promotional emails</span>
            </div>

            <div class="form-group">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35' v-model="phoneNotifications"></el-switch>
              <span class="text-bold pl-3">phone notifications</span>
            </div>

            <div class="form-group">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35' v-model="allowExcelExport"></el-switch>
              <span class="text-bold pl-3">allow excel export/import</span>
            </div>

            <div class="form-group">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35' v-model="enablePiLogin"></el-switch>
              <span class="text-bold pl-3">enable pin login</span>
            </div>

          </div>
        </div>
      </div>

      <!-- Display Settings -->
      <div class="col-md-3">
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">Display Settings</h3>
          </div>
          <div class="card-body">
            
            <div class="form-group">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35' v-model="multilanguage"></el-switch>
              <span class="text-bold pl-3">multilanguage</span>
            </div>

            <div class="form-group">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35' v-model="excelExport"></el-switch>
              <span class="text-bold pl-3">allow excel export/import</span>
            </div>

            <div class="form-group">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35' v-model="splitscreenEnabled"></el-switch>
              <span class="text-bold pl-3">splitscreen enabled</span>
            </div>

            <div class="form-group">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35' v-model="splitScreenCommercials"></el-switch>
              <span class="text-bold pl-3">split screen commercials</span>
            </div>

            <div class="form-group">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35' v-model="splitScreenPayment"></el-switch>
              <span class="text-bold pl-3">split screen payment</span>
            </div>

            <div class="form-group">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" :width='35' v-model="activateCommercials"></el-switch>
              <span class="text-bold pl-3">activate commercials</span>
            </div>

          </div>
        </div>
      </div>



    </div>
  </div>


</section>
<!-- /.content -->
</template>

<script>
export default {
  data: () => ({
    VenueSetting: '',
    InterfaceTheme: '',
    BusinessOpensAt: '',
    BusinessClosesAt: '',
    HappyHourStartAt: '',
    HappyHourClosesAt: '',

    //
    autoLogout: false,
    autoAddCustomer: false,
    addUserSuggestion: false,
    generateSalesReport: false,
    receivePromotional: false,
    phoneNotifications: false,
    allowExcelExport: false,
    enablePiLogin: false,
    //
    multilanguage: false,
    excelExport: false,
    splitscreenEnabled: false,
    splitScreenCommercials: false,
    splitScreenPayment: false,
    activateCommercials: false,

    VenueSettingOptions: [
      {
        label: 'The Hai',
        value: 'The Hai'
      },
      {
        label: 'Real Shanghai',
        value: 'Real Shanghai'
      }
    ],

    InterfaceThemeOptions: [
      {
        label: 'Default',
        value: 'Default'
      },
      {
        label: 'Desert',
        value: 'Desert'
      },
      {
        label: 'Forest',
        value: 'Forest'
      },
      {
        label: 'Spaceship',
        value: 'Spaceship'
      },
      {
        label: 'Vulcano',
        value: 'Vulcano'
      }
    ],
  })
}
</script>

