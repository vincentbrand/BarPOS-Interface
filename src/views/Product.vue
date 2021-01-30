<template>
<div>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Products</h1>
        </div>
        <!-- <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active">Products</li>
          </ol>
        </div> -->
      </div>
    </div><!-- /.container-fluid -->
  </section>
  <section class="content pl-3 pr-3">
      <!-- Default box -->
      <div class="card">
          <div class="card-body p-0" style="display: block;">
            <table class="table table-striped projects">
              <thead>
              <tr>
                <th style="width: 15%">Name</th>
                <th style="width: 15%">Category</th>
                <th style="width: 15%">Prices</th>
                <th style="width: 20%" class="text-center">Stock</th>
                <th style="width: 5%" class="text-center">Status</th>
                <th style="width: 30%" class="text-right">

                  <button class="btn btn-success btn-sm mr-1">
                    <i class="fas fa-plus-circle"></i>
                    <span class="">Add</span>
                  </button>
                  <button class="btn btn-secondary btn-sm">
                    <i class="fas fa-file-import"></i>
                    <span class="">Import</span>
                  </button>

                </th>
              </tr>
              </thead>
              <tbody>
              <!-- one row -->
                <tr v-for="item in products" :key="item.id">
                  <td>
                    {{item.name}}
                  </td>
                  <td>
                    {{item.category.name}}
                  </td>
                  <td>
                    {{item.price}},
                    {{item.happyhour}},
                    {{item.discount}}
                  </td>
                  <td class="project_progress">
                    <div class="progress progress-sm">
                      <div class="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style="width: 57%">
                      </div>
                    </div>
                    <small>57% Complete</small>
                  </td>
                  <td class="project-state">
                    <i class="fas fa-eye"></i>
                  </td>
                  <td class="project-actions text-right">
                    <button class="btn btn-primary btn-sm mr-1">
                      <i class="fas fa-folder"></i>
                      <span class="">View</span>
                    </button>
                    <button class="btn btn-info btn-sm mr-1">
                      <i class="fas fa-pencil-alt"></i>
                      <span class="">Edit</span>
                    </button>
                    <button class="btn btn-danger btn-sm">
                      <i class="fas fa-trash"></i>
                      <span class="">Delete</span>
                    </button>
                  </td>
                </tr>
              <!-- END OF: one row -->

              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
      </div>
      <!-- /.card -->
  </section>
</div>
</template>

<script>
import Api from '@/Http/Products';
export default {
    data: () => ({
      products: []
    }),

    created () {
      Api.getProducts().then((res) => {
        this.products = res.data
        console.log(res.data)
      })
    }
}
</script>


<style>
/*
#cc8b86
#f9eae1
#7d4f50
#d1be9c
#aa998f
*/
/*
a {
    color: #7d4f50;
}
.content-wrapper {
    background-color: #f4f6f9;
}
.btn-info, .btn-success {
    color: #fff;
    background-color: #aa998f;
    border-color: #aa998f;
}
.btn-warning, .btn-secondary, .btn-primary {
    color: #fff;
    background-color: #d1be9c;
    border-color: #d1be9c;
}
.btn-danger {
    color: #fff;
    background-color: #7d4f50;
    border-color: #7d4f50;
}
*/
</style>
