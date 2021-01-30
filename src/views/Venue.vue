<template>
<div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Venues</h1>
          </div>
          <!-- <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Manage</a></li>
              <li class="breadcrumb-item active">Venue</li>
            </ol>
          </div> -->
        </div>
      </div><!-- /.container-fluid -->
    </section>


    <!-- Main content -->
    <section class="content pl-3 pr-3">

      <!-- Default box -->
      <div class="card">

        <div class="card-body p-0">
          <table class="table table-striped projects">
            <thead>
            <tr>
              <th style="width: 20%">
                Venue
              </th>
              <th style="width: 30%">
                Staff
              </th>
              <th>
                Sales Goal
              </th>
              <th style="width: 8%" class="text-center">
                Status
              </th>
              <th style="width: 20%">
              </th>
            </tr>
            </thead>
            <tbody>

            <tr v-for='item in venues' :key="item.id">
              <td>
                <div>{{item.name || "The Hai"}}</div>
                <small>
                  Created {{item.created_at.split("T")[0]}}
                </small>
              </td>
              <td>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <img alt="Avatar" class="table-avatar" :src="avatar1">
                  </li>
                  <li class="list-inline-item">
                    <img alt="Avatar" class="table-avatar" :src="avatar2">
                  </li>
                </ul>
              </td>
              <td class="project_progress">
                <div class="progress progress-sm">
                  <div class="progress-bar bg-gradient-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style="width: 57%">
                  </div>
                </div>
                <small>
                  57% Complete
                </small>
              </td>
              <td class="project-state">
                <span class="badge badge-success">Open</span>
              </td>
              <td class="project-actions text-right">
                <button class="btn btn-primary btn-sm mr-1" href="#">
                  <i class="fas fa-folder">
                  </i>
                  View
                </button>
                <button class="btn btn-info btn-sm mr-1" href="#">
                  <i class="fas fa-pencil-alt">
                  </i>
                  Edit
                </button>
                <button class="btn btn-danger btn-sm" href="#">
                  <i class="fas fa-trash">
                  </i>
                  Delete
                </button>
              </td>
            </tr>
            
            </tbody>
          </table>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->

    </section>
    <!-- /.content -->
</div>
</template>


<script>
import Api from '@/Http/Venue';
export default {
  data: () => ({
    venues: [],
    avatar1: require("../assets/avatar/avatar.png"),
    avatar2: require("../assets/avatar/avatar2.png"),
  }),

  created () {
    Api.getVenues().then((res) => {
      this.venues = res.data
      console.log(this.venues)
    })
  }
}
</script>
