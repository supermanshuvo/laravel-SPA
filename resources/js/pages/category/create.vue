<template>
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-12">
              <div class="card">
                  <div class="card-header d-flex justify-content-between align-items-center">
                      <h5>Create Category</h5>
                      <router-link class="btn btn-primary" :to="{ name:'category-list'}">Category List</router-link>
                  </div>
                  <div class="card-body">
                      <div class="row">
                          <div class="col-6 offset-3">
                                <form @submit.prevent="createCategory">
                                    <div class="form-group">
                                        <label for="">Category Name</label>
                                        <input type="text" v-model="categoryName" name="name" class="form-control" placeholder="Category Name">
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success">Create Category</button>
                                    </div>
                                </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            categoryName:'',
        }
    },
    methods:{
        CreateCategory(){
            axios.post('api/category',{name:this.categoryName}).then(Response=>{
                console.log(Response);
            })
        }
    }
}
</script>

<style>

</style>