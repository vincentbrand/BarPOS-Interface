<template>
<section class="content pt-3">
    <div class="container-fluid">
      <div class="row">
          <div class="col-12">
              <div class="card">
                  <div class="card-header">
                      Employees Create
                  </div>
                  <div class="card-body">
                      <el-form ref="form" :model="form" label-width="80px">

                        <el-form-item label="Name（English）" label-width='auto'>
                            <el-input v-model="form.name.en"></el-input>
                        </el-form-item>

                        <el-form-item label="Name（中文）" label-width='auto'>
                            <el-input v-model="form.name.zh"></el-input>
                        </el-form-item>

                        <el-form-item label="Language" label-width='auto'>
                            <el-select v-model="form.preferred_language" class="w-100" placeholder="Select Language">
                                <el-option label="English" value="en"></el-option>
                                <el-option label="中文" value="zh"></el-option>
                            </el-select>
                        </el-form-item>
                        
                        <el-form-item label="Phone" label-width='auto'>
                            <el-input v-model="form.phone"></el-input>
                        </el-form-item>

                        <el-form-item label="Password" label-width='auto'>
                            <el-input type="password" max='9999' v-model="form.pin"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">Confirm</el-button>
                            <el-button @click="goBack">Cancel</el-button>
                        </el-form-item>
                    </el-form>
                  </div>
              </div>
          </div>
      </div>
    </div>
</section>
</template>

<script>
import Api from '@/Http/Employees';
export default {
    data: () => ({
        form: {
            preferred_language: 'en',
            phone: '',
            pin: '',
            name: { en: '', zh: '' }
        }
    }),

    methods: {
        onSubmit () {
            Api.setCreateEmployees(this.form).then(res => {
                if (res.data.id)
                this.goBack()
            })
        },

        goBack () {
            this.$router.go(-1)
        }
    }

}
</script>
