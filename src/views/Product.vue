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
          <div class="card-body" style="display: block;">

            <el-table :data="products" style="width: 100%">
              <!-- name -->
              <el-table-column prop="name" label="Name" sortable width="180">
              </el-table-column>
              <!-- Category -->
              <el-table-column label="Category" sortable>
                <template slot-scope="{ row }">
                    {{row.category.name}}
                </template>
              </el-table-column>
              <!-- Prices -->
              <el-table-column label="Prices" sortable width="300">
                <template slot-scope="{ row }">
                    {{row.price}},
                    {{row.happyhour}},
                    {{row.discount}}
                </template>
              </el-table-column>
              <!-- Stock -->
              <el-table-column label="Stock">
                <template>
                    <div class="progress progress-sm">
                      <div class="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style="width: 57%"></div>
                    </div>
                    <small>57% Complete</small>
                </template>
              </el-table-column>
              <!-- Status -->
              <el-table-column label="Status" width="150">
                <template>
                  <div class="w-100 padding-left">
                    <i class="fas fa-eye"></i>
                  </div>
                </template>
              </el-table-column>
              <!-- Action -->
              <el-table-column width="300">
                <template slot="header">
                  <div class="text-right">
                    <button class="btn btn-success btn-sm mr-2">
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
                  </div>
                </template>
                <template>
                  <div class="text-right">
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
                  </div>
                </template>
              </el-table-column>
            </el-table>
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
      })
    }
}
</script>


<style>
.cell{
  color: #333333 !important;
}
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
