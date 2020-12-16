<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <div class="card mb-4">
                    <div class="card-header">
                            <span style="float:left;"><i class="fas fa-table mr-1"></i>
                                Sub Category List</span>
                        <span style="float:right;">
                                <router-link to="/addsubcategory">
                                    <button type="button" class="btn btn-outline-success btn-sm">Add Sub Category</button>
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
                                <tr v-for="(subCategoryList,index) in getSubCategoryList" :key = "subCategoryList.id">
                                    <td>{{ index+1 }}</td>
                                    <td>{{ subCategoryList.sub_cat_name }}</td>
                                    <td>
                                        <router-link :to="`/editcategory/${subCategoryList.id}`">
                                            <button type="button" class="btn btn-outline-success btn-sm">Edit</button>
                                        </router-link>
                                        <a href="" @click.prevent="categoryDelete(subCategoryList.id)">
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
        this.$store.dispatch('getSubCategoryList')
    },
    computed:{
        getSubCategoryList(){
            return this.$store.getters.subCategoryList
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
