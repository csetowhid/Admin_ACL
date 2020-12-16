<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                        <div class="card mb-4">
                            <div class="card-header">
                            <span style="float:left;"><i class="fas fa-table mr-1"></i>
                                Category List</span>
                            <span style="float:right;">
                                <router-link to="/add_category">
                                    <button type="button" class="btn btn-outline-success btn-sm">Add Category</button>
                                </router-link>
                            </span>
                            </div>
                             <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Category Name</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(categoryList,index) in getCategoryList" :key = "categoryList.id">
                                                <td>{{ index+1 }}</td>
                                                <td>{{ categoryList.cat_name }}</td>
                                                <td>
                                                    <router-link :to="`/editcategory/${categoryList.id}`">
                                                        <button type="button" class="btn btn-outline-success btn-sm">Edit</button>
                                                    </router-link>
                                                    <a href="" @click.prevent="categoryDelete(categoryList.id)">
                                                        <button type="button" class="btn btn-outline-danger btn-sm">Delete</button>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2"></div>
                </div>
            </div>
</template>

<script>
export default {
    name: "List",

    mounted() {
        this.$store.dispatch('getCategoryList')
    },
    computed:{
        getCategoryList(){
            // console.log(this.$store.getters.categoryList);
            return this.$store.getters.categoryList
        }
    },
    methods:{
        categoryDelete(id){
            axios.get('/categoryDelete/'+id).then((response)=>{
                this.$store.dispatch('getCategoryList')
                Toast.fire({
                    icon: 'success',
                    title: 'Category Deleted successfully'
                })
            })
        }

    }
}
</script>
