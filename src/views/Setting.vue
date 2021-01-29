<template>
<!-- Main content -->
<section class="content pt-3">

  <div class="container-fluid">
    <div class="row">

      <div class="col-md-3">
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">Sytem Settings</h3>
          </div>
          <div class="card-body">

            <div class="form-group row">
              <label class="col-8 col-form-label">Venue Setting</label>
              <div class="col-4">
                <select class="form-control" disabled="">
                  <option selected="">The Hai</option>
                  <option>Real Shanghai</option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-8 col-form-label">Interface Theme</label>
              <div class="col-4">
                <select class="form-control">
                  <option selected="">Default</option>
                  <option>Desert</option>
                  <option>Forest</option>
                  <option>Spaceship</option>
                  <option>Vulcano</option>
                </select>
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
                  <div class="input-group date" id="timepicker" data-target-input="nearest">
                    <input type="text" class="form-control datetimepicker-input" data-target="#timepicker">
                    <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                      <div class="input-group-text"><i class="far fa-clock"></i></div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-group date" id="timepicker" data-target-input="nearest">
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
                  <label class="form-label">Happy Hour starts at:</label>
                </div>
                <div class="col-6">
                  <label class="form-label">Happy Hour closes at:</label>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="input-group date" id="timepicker" data-target-input="nearest">
                    <input type="text" class="form-control datetimepicker-input" data-target="#timepicker">
                    <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                      <div class="input-group-text"><i class="far fa-clock"></i></div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-group date" id="timepicker" data-target-input="nearest">
                    <input type="text" class="form-control datetimepicker-input" data-target="#timepicker">
                    <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                      <div class="input-group-text"><i class="far fa-clock"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr>



          </div>

        </div>
      </div>

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


      <div class="col-md-3">
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">Feature Settings</h3>
          </div>
          <div class="card-body">

            <div class="form-group">
              <div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
                <label class="custom-control-label" for="customSwitch3">auto-logout</label>
                <input type="checkbox" class="custom-control-input" id="customSwitch3">
              </div>
            </div>

            <div class="form-group">
              <div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
                <input type="checkbox" class="custom-control-input" id="customSwitch3">
                <label class="custom-control-label" for="customSwitch3"> auto-add customer</label>
              </div>
            </div>

            <div class="form-group">
              <div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
                <input type="checkbox" class="custom-control-input" id="customSwitch3">
                <label class="custom-control-label" for="customSwitch3">add user suggestion</label>
              </div>
            </div>
            <div class="form-group">
              <div class="custom-control custom-switch custom-switch-on-success">
                <input type="checkbox" class="custom-control-input" id="customSwitch3">
                <label class="custom-control-label" for="customSwitch3">generate sales report</label>
              </div>
            </div>
            <div class="form-group">
              <div class="custom-control custom-switch custom-switch-on-success">
                <input type="checkbox" class="custom-control-input" id="customSwitch3">
                <label class="custom-control-label" for="customSwitch3">receive promotional emails</label>
              </div>
            </div>
            <div class="form-group">
              <div class="custom-control custom-switch custom-switch-on-success">
                <input type="checkbox" class="custom-control-input" id="customSwitch3">
                <label class="custom-control-label" for="customSwitch3">phone notifications</label>
              </div>
            </div>
            <div class="form-group">
              <div class="custom-control custom-switch custom-switch-on-success">
                <input type="checkbox" class="custom-control-input" id="customSwitch3">
                <label class="custom-control-label" for="customSwitch3">allow excel export/import</label>
              </div>
            </div>
            <div class="form-group">
              <div class="custom-control custom-switch custom-switch-on-success">
                <input type="checkbox" class="custom-control-input" id="customSwitch3">
                <label class="custom-control-label" for="customSwitch3">enable pin login</label>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div class="col-md-3">
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">Display Settings</h3>
          </div>
          <div class="card-body">

            <div class="form-group">
              <div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
                <input type="checkbox" class="custom-control-input" id="customSwitch3">
                <label class="custom-control-label" for="customSwitch3">multilanguage</label>
              </div>
            </div>
            <div class="form-group">
              <div class="custom-control custom-switch custom-switch-on-success">
                <input type="checkbox" class="custom-control-input" id="customSwitch3">
                <label class="custom-control-label" for="customSwitch3">allow excel export/import</label>
              </div>
            </div>
            <div class="form-group">
              <div class="custom-control custom-switch custom-switch-on-success">
                <input type="checkbox" class="custom-control-input" id="customSwitch3">
                <label class="custom-control-label" for="customSwitch3">splitscreen enabled</label>
              </div>
            </div>
            <div class="form-group">
              <div class="custom-control custom-switch custom-switch-on-success">
                <input type="checkbox" class="custom-control-input" id="customSwitch3">
                <label class="custom-control-label" for="customSwitch3">split screen commercials</label>
              </div>
            </div>
            <div class="form-group">
              <div class="custom-control custom-switch custom-switch-on-success">
                <input type="checkbox" class="custom-control-input" id="customSwitch3">
                <label class="custom-control-label" for="customSwitch3">split screen payment</label>
              </div>
            </div>
            <div class="form-group">
              <div class="custom-control custom-switch custom-switch-on-success">
                <input type="checkbox" class="custom-control-input" id="customSwitch3">
                <label class="custom-control-label" for="customSwitch3">activate commercials</label>
              </div>
            </div>

          </div>
        </div>
      </div>



    </div>
  </div>


</section>
<!-- /.content -->
</template>
